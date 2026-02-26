/* =====================================================
   QUIZ APP - app.js
   Full quiz logic: navigation, timer, localStorage,
   autocorrect, review, keyboard shortcuts
   ===================================================== */

/* ────────── STATE ────────── */
const state = {
  currentTest: null,    // 'test1' | 'test2' | 'test3'
  questions: [],        // active question list (filtered/shuffled)
  currentIdx: 0,
  selected: null,
  checked: false,
  answers: {},          // { [q.id]: 'A'|'B'|'C'|'D' }
  marked: {},           // { [q.id]: true }
  opts: {
    shuffle: false,
    timer: false,
    autocorrect: false,
    topic: 'all'
  },
  timer: {
    enabled: false,
    startMs: 0,
    elapsedMs: 0,
    interval: null
  }
};

/* ────────── HELPERS ────────── */
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
function pad2(n){ return String(n).padStart(2,'0'); }
function msToClock(ms){
  const s = Math.floor(ms/1000);
  const mm = Math.floor(s/60);
  const ss = s % 60;
  return `${pad2(mm)}:${pad2(ss)}`;
}
function deepClone(o){ return JSON.parse(JSON.stringify(o)); }
function shuffle(arr){
  const a = arr.slice();
  for (let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

/* ────────── LOCAL STORAGE ────────── */
const LS_KEY = 'quizlab-settings-v1';
function loadSettings(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(!raw) return;
    const s = JSON.parse(raw);
    if(typeof s.shuffle === 'boolean') state.opts.shuffle = s.shuffle;
    if(typeof s.timer === 'boolean') state.opts.timer = s.timer;
    if(typeof s.autocorrect === 'boolean') state.opts.autocorrect = s.autocorrect;
  }catch(e){}
}
function saveSettings(){
  localStorage.setItem(LS_KEY, JSON.stringify({
    shuffle: state.opts.shuffle,
    timer: state.opts.timer,
    autocorrect: state.opts.autocorrect
  }));
}

/* ────────── SCREEN ROUTING ────────── */
function showScreen(id){
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

/* ────────── ICONS ────────── */
function iconChevron(){
  return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 8 10 12 14 8"/></svg>`;
}

/* ────────── MENU TOGGLES ────────── */
function bindToggles(){
  const tShuffle = $('toggle-shuffle');
  const tTimer = $('toggle-timer');
  const tAuto = $('toggle-autocorrect');

  const apply = () => {
    tShuffle.classList.toggle('active', state.opts.shuffle);
    tTimer.classList.toggle('active', state.opts.timer);
    tAuto.classList.toggle('active', state.opts.autocorrect);
    saveSettings();
  };

  tShuffle.addEventListener('click', () => { state.opts.shuffle = !state.opts.shuffle; apply(); });
  tTimer.addEventListener('click', () => { state.opts.timer = !state.opts.timer; apply(); });
  tAuto.addEventListener('click', () => { state.opts.autocorrect = !state.opts.autocorrect; apply(); });

  apply();
}

/* ────────── TOPIC FILTER ────────── */
function bindTopicFilter(){
  const sel = $('topic-filter-select');
  sel.addEventListener('change', () => {
    state.opts.topic = sel.value;
  });
}

/* ────────── TEST START ────────── */
function startTest(testKey){
  const testData = TESTS_DATA[testKey];
  if (!testData) return;

  state.currentTest = testKey;
  state.currentIdx = 0;
  state.selected = null;
  state.checked = false;
  state.answers = {};
  state.marked = {};

  // set title
  $('quiz-test-title').textContent = testData.title;
  $('q-total').textContent = testData.questions.length;

  // build active question list
  let qs = deepClone(testData.questions);

  // topic filter
  if (state.opts.topic && state.opts.topic !== 'all'){
    qs = qs.filter(q => q.tema === state.opts.topic);
  }
  // fallback: if filter makes empty, use all
  if (!qs.length) qs = deepClone(testData.questions);

  // shuffle
  if (state.opts.shuffle) qs = shuffle(qs);

  state.questions = qs;
  $('q-total').textContent = qs.length;

  // timer
  state.timer.enabled = state.opts.timer;
  if (state.timer.interval) clearInterval(state.timer.interval);
  state.timer.elapsedMs = 0;
  state.timer.startMs = performance.now();
  $('quiz-timer').classList.toggle('hidden', !state.timer.enabled);
  if (state.timer.enabled){
    $('timer-display').textContent = '00:00';
    state.timer.interval = setInterval(() => {
      state.timer.elapsedMs = performance.now() - state.timer.startMs;
      $('timer-display').textContent = msToClock(state.timer.elapsedMs);
    }, 250);
  }

  showScreen('quiz-screen');
  renderQuestion();
}

/* ────────── MENU BINDING ────────── */
function bindMenuCards(){
  $$('.test-card').forEach(card => {
    card.addEventListener('click', () => {
      startTest(card.dataset.test);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        startTest(card.dataset.test);
      }
    });
  });
}

/* ────────── QUESTION RENDER ────────── */
function renderQuestion(){
  const q = state.questions[state.currentIdx];
  if (!q) return;

  $('q-current').textContent = state.currentIdx + 1;
  $('q-topic').textContent = q.tema;
  $('q-id').textContent = `#${q.id}`;
  $('q-text').textContent = q.enunciado;

  // marked pill
  $('q-marked').style.display = state.marked[q.id] ? 'inline-flex' : 'none';

  // progress
  const pct = ((state.currentIdx) / Math.max(1, state.questions.length)) * 100;
  $('progress-fill').style.width = `${pct}%`;

  // answers
  const answersWrap = $('answers');
  answersWrap.innerHTML = '';
  state.selected = state.answers[q.id] || null;
  state.checked = false;

  // feedback reset
  const fb = $('feedback');
  fb.className = 'feedback';
  fb.innerHTML = '<span class="muted">Selecciona una opción y pulsa “Comprobar”.</span>';

  // buttons
  $('prev-btn').disabled = state.currentIdx === 0;
  $('next-btn').disabled = state.currentIdx === state.questions.length - 1;
  $('check-btn').disabled = !state.selected;
  $('check-btn').style.display = 'inline-flex';
  $('next-btn').style.display = 'inline-flex';

  // build options
  const letters = ['A','B','C','D'];
  letters.forEach(letter => {
    const opt = q.opciones[letter];
    const btn = document.createElement('div');
    btn.className = 'answer';
    btn.dataset.letter = letter;
    btn.innerHTML = `
      <span class="letter">${letter}</span>
      <div class="txt">${opt}</div>
    `;
    if (state.selected === letter) btn.classList.add('selected');

    btn.addEventListener('click', () => {
      if (state.checked) return;
      state.selected = letter;
      state.answers[q.id] = letter;
      // update UI selection
      $$('.answer').forEach(a => a.classList.remove('selected'));
      btn.classList.add('selected');
      $('check-btn').disabled = false;
    });

    answersWrap.appendChild(btn);
  });
}

/* ────────── CHECK ANSWER ────────── */
function checkAnswer(){
  const q = state.questions[state.currentIdx];
  if (!q) return;
  if (!state.selected) return;

  state.checked = true;

  const isOk = state.selected === q.correcta;

  // mark UI
  $$('.answer').forEach(a => {
    const l = a.dataset.letter;
    a.classList.remove('selected');
    if (l === q.correcta) a.classList.add('correct');
    if (l === state.selected && !isOk) a.classList.add('wrong');
  });

  // feedback
  const fb = $('feedback');
  fb.className = `feedback ${isOk ? 'ok' : 'err'}`;
  fb.innerHTML = isOk
    ? `✅ Correcto.`
    : `❌ Incorrecto. <br/><span class="muted">Correcta: <b>${q.correcta})</b> ${q.opciones[q.correcta]}</span>`;

  // show explanation if exists
  if (q.explicacion && q.explicacion.trim()){
    fb.innerHTML += `<div style="margin-top:.6rem;"><span class="muted">${q.explicacion}</span></div>`;
  }

  // autocorrect: if enabled, jump next
  if (state.opts.autocorrect){
    $('check-btn').style.display = 'none';
    setTimeout(() => goNext(), 350);
  }
}

/* ────────── NAVIGATION ────────── */
function goNext(){
  if (state.currentIdx < state.questions.length - 1){
    state.currentIdx++;
    renderQuestion();
  } else {
    finishTest();
  }
}
function goPrev(){
  if (state.currentIdx > 0){
    state.currentIdx--;
    renderQuestion();
  }
}
function toggleMark(){
  const q = state.questions[state.currentIdx];
  if (!q) return;
  state.marked[q.id] = !state.marked[q.id];
  $('q-marked').style.display = state.marked[q.id] ? 'inline-flex' : 'none';
}

/* ────────── RESULTS ────────── */
function finishTest(){
  if (state.timer.interval){
    clearInterval(state.timer.interval);
    state.timer.interval = null;
  }
  if (state.timer.enabled){
    state.timer.elapsedMs = performance.now() - state.timer.startMs;
  }

  const total = state.questions.length;
  let ok = 0;
  state.questions.forEach(q => {
    const a = state.answers[q.id];
    if (a && a === q.correcta) ok++;
  });
  const pct = total ? Math.round((ok/total)*100) : 0;

  $('results-title-text').textContent = `Resultados`;
  $('results-subtitle-text').textContent = TESTS_DATA[state.currentTest].title;

  $('stat-score').textContent = `${pct}%`;
  $('stat-score-sub').textContent = `${ok}/${total} correctas`;
  $('stat-time').textContent = state.timer.enabled ? msToClock(state.timer.elapsedMs) : '—';
  $('stat-marked').textContent = Object.values(state.marked).filter(Boolean).length;

  showScreen('results-screen');
  populateReview('all');
  setActiveChip('all');
}

/* ────────── REVIEW LIST ────────── */
function setActiveChip(filter){
  $$('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter === filter));
}
function populateReview(filter){
  const container = $('review-list');
  container.innerHTML = '';

  let qs = state.questions;
  if (filter === 'ok') qs = qs.filter(q => state.answers[q.id] === q.correcta);
  else if (filter === 'err') qs = qs.filter(q => state.answers[q.id] !== q.correcta);
  else if (filter === 'marked') qs = qs.filter(q => state.marked[q.id]);

  if (qs.length === 0) {
    container.innerHTML = `<div style="text-align:center;color:var(--text3);padding:2rem;font-size:.9rem;">No hay preguntas que mostrar</div>`;
    return;
  }

  qs.forEach((q, displayIdx) => {
    const ans = state.answers[q.id];
    const isOk = ans === q.correcta;
    const isEmpty = !ans;
    const cls = isEmpty ? 'empty' : isOk ? 'ok' : 'err';
    const statusIcon = isEmpty ? '—' : isOk ? '✓' : '✗';
    const globalIdx = state.questions.indexOf(q);

    const item = document.createElement('div');
    item.className = `review-item ${cls}`;
    item.dataset.idx = displayIdx;
    item.innerHTML = `
      <div class="review-item-header">
        <span class="review-status">${statusIcon}</span>
        <span class="review-num">P${globalIdx + 1}</span>
        <span class="review-q-text">${q.enunciado}</span>
        <span class="review-chevron">${iconChevron()}</span>
      </div>
      <div class="review-item-body">
        <p class="review-full-q">${q.enunciado}</p>
        <div class="review-answers">
          ${ans
            ? `<span class="review-answer-chip ${isOk ? 'user-ok' : 'user-err'}">Tu respuesta: ${ans}) ${q.opciones[ans]}</span>`
            : `<span class="review-answer-chip empty-ans">Sin respuesta</span>`
          }
          ${!isOk || isEmpty
            ? `<span class="review-answer-chip correct-ans">Correcta: ${q.correcta}) ${q.opciones[q.correcta]}</span>`
            : ''
          }
        </div>
        <div class="review-explanation">${q.explicacion}</div>
      </div>`;

    item.querySelector('.review-item-header').addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
    container.appendChild(item);
  });
}

/* ────────── TOPIC FILTER (populate) ────────── */
function populateTopicFilter(testKey) {
  const select = $('topic-filter-select');
  const temas = [...new Set(TESTS_DATA[testKey].questions.map(q => q.tema))].sort();
  // Update during menu before start
  const menuSelect = $('topic-filter-select');
  menuSelect.innerHTML = `<option value="all">Todos los temas</option>`;
  temas.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t; opt.textContent = t;
    menuSelect.appendChild(opt);
  });
}

// Also populate on test card hover/focus for preview
$$('.test-card').forEach(card => {
  card.addEventListener('mouseenter', () => populateTopicFilter(card.dataset.test));
  card.addEventListener('focus', () => populateTopicFilter(card.dataset.test));
});
// Initial populate
if (Object.keys(TESTS_DATA).length) populateTopicFilter('test1');

/* ────────── KEYBOARD SHORTCUTS ────────── */
function bindKeyboard() {
  document.addEventListener('keydown', e => {
    const screen = document.querySelector('.screen.active');
    if (!screen || screen.id !== 'quiz-screen') return;
    if (e.target.matches('input, select, textarea')) return;

    switch (e.key) {
      case '1': case 'a': case 'A': selectIfAvail('A'); break;
      case '2': case 'b': case 'B': selectIfAvail('B'); break;
      case '3': case 'c': case 'C': selectIfAvail('C'); break;
      case '4': case 'd': case 'D': selectIfAvail('D'); break;
      case 'Enter':
        if (!$('check-btn').disabled && $('check-btn').style.display !== 'none') checkAnswer();
        else if ($('check-btn').style.display === 'none') goNext();
        break;
      case 'ArrowRight': goNext(); break;
      case 'ArrowLeft': goPrev(); break;
      case 'r': case 'R': toggleMark(); break;
    }
  });
}

function selectIfAvail(letter) {
  const q = state.questions[state.currentIdx];
  if (!q) return;
  if (state.checked) return;
  state.selected = letter;
  state.answers[q.id] = letter;

  $$('.answer').forEach(a => {
    a.classList.toggle('selected', a.dataset.letter === letter);
  });
  $('check-btn').disabled = false;
}

/* ────────── BUTTON BINDINGS ────────── */
function bindButtons(){
  $('prev-btn').addEventListener('click', goPrev);
  $('next-btn').addEventListener('click', goNext);
  $('check-btn').addEventListener('click', checkAnswer);
  $('mark-btn').addEventListener('click', toggleMark);

  $('menu-btn-quiz').addEventListener('click', () => {
    if (state.timer.interval) clearInterval(state.timer.interval);
    showScreen('menu-screen');
  });
  $('menu-btn-results').addEventListener('click', () => showScreen('menu-screen'));

  $('retry-btn').addEventListener('click', () => startTest(state.currentTest));

  // review filter chips
  $$('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      setActiveChip(chip.dataset.filter);
      populateReview(chip.dataset.filter);
    });
  });
}

/* ────────── INIT ────────── */
function init(){
  loadSettings();
  bindToggles();
  bindTopicFilter();
  bindMenuCards();
  bindButtons();
  bindKeyboard();
  showScreen('menu-screen');
}
init();
