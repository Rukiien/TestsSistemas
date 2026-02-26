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
  answers: {},          // { qId: 'A'|'B'|'C'|'D'|null }
  checked: {},          // { qId: true } — already verified
  marked: {},           // { qId: true } — flagged for review
  shuffled: false,
  timerOn: false,
  seconds: 0,
  timerInterval: null,
  filterTema: 'all',
  autocorrect: false,   // autocorrect = check on option select
};

/* ────────── DOM REFS ────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ────────── INIT ────────── */
document.addEventListener('DOMContentLoaded', () => {
  showScreen('menu-screen');
  bindMenuEvents();
  bindKeyboard();
  loadFromStorage();
});

/* ────────── SCREENS ────────── */
function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

/* ────────── MENU ────────── */
function bindMenuEvents() {
  // Test cards
  $$('.test-card').forEach(card => {
    card.addEventListener('click', () => startTest(card.dataset.test));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') startTest(card.dataset.test); });
  });

  // Toggles
  $('toggle-shuffle').addEventListener('click', () => toggleOption('shuffle'));
  $('toggle-timer').addEventListener('click', () => toggleOption('timer'));
  $('toggle-autocorrect').addEventListener('click', () => toggleOption('autocorrect'));

  // Topic filter
  $('topic-filter-select').addEventListener('change', e => {
    state.filterTema = e.target.value;
  });
}

function toggleOption(opt) {
  if (opt === 'shuffle') {
    state.shuffled = !state.shuffled;
    $('toggle-shuffle').querySelector('.toggle').classList.toggle('on', state.shuffled);
  } else if (opt === 'timer') {
    state.timerOn = !state.timerOn;
    $('toggle-timer').querySelector('.toggle').classList.toggle('on', state.timerOn);
  } else if (opt === 'autocorrect') {
    state.autocorrect = !state.autocorrect;
    $('toggle-autocorrect').querySelector('.toggle').classList.toggle('on', state.autocorrect);
  }
}

/* ────────── START TEST ────────── */
function startTest(testKey) {
  const testData = TESTS_DATA[testKey];
  if (!testData) return;

  // Check for saved state
  const saved = loadSavedState(testKey);
  if (saved) {
    showModal(
      'Continuar test',
      `Tienes un test en progreso (${countAnswered(saved.answers)} respuestas guardadas). ¿Deseas continuar?`,
      [
        { label: 'Continuar', cls: 'btn-primary', action: () => restoreState(saved) },
        { label: 'Nuevo test', cls: 'btn-secondary', action: () => initNewTest(testKey) },
        { label: 'Cancelar', cls: 'btn-ghost', action: null }
      ]
    );
    return;
  }
  initNewTest(testKey);
}

function initNewTest(testKey) {
  const testData = TESTS_DATA[testKey];
  state.currentTest = testKey;
  state.answers = {};
  state.checked = {};
  state.marked = {};
  state.currentIdx = 0;
  state.seconds = 0;

  let qs = [...testData.questions];

  // Filter by tema
  if (state.filterTema !== 'all') {
    qs = qs.filter(q => q.tema === state.filterTema);
    if (qs.length === 0) { toast('No hay preguntas para ese tema'); return; }
  }

  // Shuffle
  if (state.shuffled) qs = shuffle(qs);

  state.questions = qs;

  // Populate topic filter
  populateTopicFilter(testKey);

  showScreen('quiz-screen');
  $('quiz-test-title').textContent = testData.title;

  startTimer();
  renderQuestion();
  renderNavDots();
  saveToStorage();
}

function restoreState(saved) {
  Object.assign(state, {
    currentTest: saved.currentTest,
    questions: saved.questions,
    currentIdx: saved.currentIdx,
    answers: saved.answers,
    checked: saved.checked,
    marked: saved.marked,
    seconds: saved.seconds,
    shuffled: saved.shuffled,
    timerOn: saved.timerOn,
    autocorrect: saved.autocorrect,
  });
  showScreen('quiz-screen');
  startTimer();
  renderQuestion();
  renderNavDots();
}

/* ────────── TIMER ────────── */
function startTimer() {
  clearInterval(state.timerInterval);
  if (!state.timerOn) {
    $('quiz-timer').classList.add('hidden');
    return;
  }
  $('quiz-timer').classList.remove('hidden');
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.seconds++;
    updateTimerDisplay();
    if (state.seconds % 10 === 0) saveToStorage();
  }, 1000);
}

function stopTimer() { clearInterval(state.timerInterval); state.timerInterval = null; }

function updateTimerDisplay() {
  const m = Math.floor(state.seconds / 60).toString().padStart(2, '0');
  const s = (state.seconds % 60).toString().padStart(2, '0');
  $('timer-display').textContent = `${m}:${s}`;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/* ────────── RENDER QUESTION ────────── */
function renderQuestion() {
  const q = state.questions[state.currentIdx];
  if (!q) return;

  const total = state.questions.length;
  const idx = state.currentIdx;
  const answered = countAnswered(state.answers);
  const pct = Math.round((idx + 1) / total * 100);

  // Progress
  $('progress-fill').style.width = pct + '%';
  $('q-current').textContent = idx + 1;
  $('q-total').textContent = total;

  // Question meta
  $('q-badge').textContent = `P${idx + 1}`;
  $('q-tema').textContent = q.tema;
  $('q-text').textContent = q.enunciado;

  // Bookmark
  const bmk = $('bookmark-btn');
  bmk.classList.toggle('marked', !!state.marked[q.id]);

  // Options
  const list = $('options-list');
  list.innerHTML = '';
  const isChecked = !!state.checked[q.id];
  const userAns = state.answers[q.id];

  ['A', 'B', 'C', 'D'].forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.letter = letter;
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${q.opciones[letter]}</span>
    `;
    if (isChecked) {
      btn.disabled = true;
      if (letter === q.correcta) btn.classList.add('correct-reveal');
      if (letter === userAns && userAns !== q.correcta) btn.classList.add('incorrect');
      if (letter === userAns && userAns === q.correcta) btn.classList.add('correct');
    } else {
      if (letter === userAns) btn.classList.add('selected');
      btn.addEventListener('click', () => selectOption(letter));
    }
    list.appendChild(btn);
  });

  // Feedback
  renderFeedback(q, isChecked, userAns);

  // Check button
  const checkBtn = $('check-btn');
  if (isChecked) {
    checkBtn.style.display = 'none';
  } else {
    checkBtn.style.display = '';
    checkBtn.disabled = !userAns;
  }

  // Navigation buttons
  $('prev-btn').disabled = idx === 0;
  $('next-btn').textContent = idx === total - 1 ? 'Finalizar' : 'Siguiente';

  // Nav dots
  updateNavDots();
}

function renderFeedback(q, isChecked, userAns) {
  const box = $('feedback-box');
  if (!isChecked) { box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  if (userAns === q.correcta) {
    box.className = 'feedback-box ok';
    box.innerHTML = `
      <div class="feedback-icon">${iconCheck()}</div>
      <div class="feedback-content">
        <div class="feedback-title">¡Correcto!</div>
        <div class="feedback-text">${q.explicacion}</div>
      </div>`;
  } else if (!userAns) {
    box.className = 'feedback-box err';
    box.innerHTML = `
      <div class="feedback-icon">${iconX()}</div>
      <div class="feedback-content">
        <div class="feedback-title">Sin respuesta</div>
        <div class="feedback-text">La respuesta correcta era <strong>${q.correcta}) ${q.opciones[q.correcta]}</strong>. ${q.explicacion}</div>
      </div>`;
  } else {
    box.className = 'feedback-box err';
    box.innerHTML = `
      <div class="feedback-icon">${iconX()}</div>
      <div class="feedback-content">
        <div class="feedback-title">Incorrecto</div>
        <div class="feedback-text">La respuesta correcta era <strong>${q.correcta}) ${q.opciones[q.correcta]}</strong>. ${q.explicacion}</div>
      </div>`;
  }
}

/* ────────── OPTION SELECT ────────── */
function selectOption(letter) {
  const q = state.questions[state.currentIdx];
  if (state.checked[q.id]) return;
  state.answers[q.id] = letter;

  // Update UI
  $$('.option-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.letter === letter) btn.classList.add('selected');
  });
  $('check-btn').disabled = false;
  updateNavDots();
  saveToStorage();

  // Autocorrect
  if (state.autocorrect) checkAnswer();
}

/* ────────── CHECK ANSWER ────────── */
function checkAnswer() {
  const q = state.questions[state.currentIdx];
  if (state.checked[q.id]) return;
  state.checked[q.id] = true;
  // Mark as blank if no answer
  if (!state.answers[q.id]) state.answers[q.id] = null;
  renderQuestion();
  saveToStorage();
}

/* ────────── NAVIGATION ────────── */
function goNext() {
  const total = state.questions.length;
  if (state.currentIdx < total - 1) {
    state.currentIdx++;
    renderQuestion();
    scrollToTop();
  } else {
    confirmFinish();
  }
}

function goPrev() {
  if (state.currentIdx > 0) {
    state.currentIdx--;
    renderQuestion();
    scrollToTop();
  }
}

function goToQuestion(idx) {
  state.currentIdx = idx;
  renderQuestion();
  scrollToTop();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMark() {
  const q = state.questions[state.currentIdx];
  state.marked[q.id] = !state.marked[q.id];
  $('bookmark-btn').classList.toggle('marked', !!state.marked[q.id]);
  updateNavDots();
  toast(state.marked[q.id] ? '🔖 Marcada para revisar' : 'Marca eliminada');
  saveToStorage();
}

/* ────────── NAV DOTS ────────── */
function renderNavDots() {
  const wrap = $('nav-dots');
  wrap.innerHTML = '';
  state.questions.forEach((q, idx) => {
    const dot = document.createElement('button');
    dot.className = 'nav-dot';
    dot.title = `Pregunta ${idx + 1}`;
    dot.textContent = idx + 1;
    dot.dataset.idx = idx;
    dot.addEventListener('click', () => goToQuestion(idx));
    wrap.appendChild(dot);
  });
  updateNavDots();
}

function updateNavDots() {
  $$('.nav-dot').forEach((dot, idx) => {
    const q = state.questions[idx];
    if (!q) return;
    dot.className = 'nav-dot';
    if (idx === state.currentIdx) dot.classList.add('current');
    else if (state.checked[q.id]) {
      const ans = state.answers[q.id];
      dot.classList.add(ans === q.correcta ? 'correct' : 'incorrect');
    } else if (state.answers[q.id]) dot.classList.add('answered');
    if (state.marked[q.id]) dot.classList.add('marked');
  });
}

/* ────────── FINISH ────────── */
function confirmFinish() {
  const unchecked = state.questions.filter(q => !state.checked[q.id]).length;
  const msg = unchecked > 0
    ? `Tienes ${unchecked} pregunta${unchecked > 1 ? 's' : ''} sin comprobar. ¿Deseas finalizarlo igualmente?`
    : '¿Deseas ver los resultados finales?';
  showModal('Finalizar test', msg, [
    { label: 'Ver resultados', cls: 'btn-primary', action: showResults },
    { label: 'Seguir respondiendo', cls: 'btn-ghost', action: null }
  ]);
}

/* ────────── RESULTS ────────── */
function showResults() {
  stopTimer();
  clearSavedState(state.currentTest);

  // Force check all unchecked (mark blank)
  state.questions.forEach(q => {
    if (!state.checked[q.id]) {
      state.checked[q.id] = true;
      if (!state.answers[q.id]) state.answers[q.id] = null;
    }
  });

  const total = state.questions.length;
  let correct = 0, incorrect = 0, blank = 0;
  state.questions.forEach(q => {
    const ans = state.answers[q.id];
    if (!ans) blank++;
    else if (ans === q.correcta) correct++;
    else incorrect++;
  });

  const pct = Math.round(correct / total * 100);
  const nota = (correct / total * 10).toFixed(2);

  // Emoji
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '📚' : '💪';

  $('results-emoji').textContent = emoji;
  $('results-title-text').textContent = pct >= 70 ? '¡Buen trabajo!' : 'Sigue practicando';
  $('results-subtitle-text').textContent = TESTS_DATA[state.currentTest].title;

  // Score circle
  const circle = $('score-circle');
  circle.style.setProperty('--pct', pct);
  $('score-pct-val').textContent = pct + '%';

  // Stats
  $('stat-nota').textContent = nota;
  $('stat-correct').textContent = correct;
  $('stat-incorrect').textContent = incorrect;
  $('stat-blank').textContent = blank;
  $('stat-time').textContent = formatTime(state.seconds);

  // Build review
  buildReview();

  showScreen('results-screen');
}

/* ── Review ── */
let reviewFilter = 'all';

function buildReview(filter) {
  filter = filter || reviewFilter;
  reviewFilter = filter;

  $$('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) btn.classList.add('active');
  });

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
  if (!q || state.checked[q.id]) return;
  selectOption(letter);
}

/* ────────── MODAL ────────── */
function showModal(title, msg, actions) {
  const overlay = $('modal-overlay');
  $('modal-title').textContent = title;
  $('modal-msg').textContent = msg;
  const actionsDiv = $('modal-actions');
  actionsDiv.innerHTML = '';
  actions.forEach(a => {
    const btn = document.createElement('button');
    btn.className = `btn ${a.cls}`;
    btn.textContent = a.label;
    btn.addEventListener('click', () => {
      overlay.classList.add('hidden');
      if (a.action) a.action();
    });
    actionsDiv.appendChild(btn);
  });
  overlay.classList.remove('hidden');
}

/* ────────── TOAST ────────── */
function toast(msg, dur = 2200) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

/* ────────── LOCAL STORAGE ────────── */
const LS_KEY = 'quizapp_state';

function saveToStorage() {
  const save = {
    currentTest: state.currentTest,
    questions: state.questions,
    currentIdx: state.currentIdx,
    answers: state.answers,
    checked: state.checked,
    marked: state.marked,
    seconds: state.seconds,
    shuffled: state.shuffled,
    timerOn: state.timerOn,
    autocorrect: state.autocorrect,
  };
  try {
    localStorage.setItem(`${LS_KEY}_${state.currentTest}`, JSON.stringify(save));
  } catch(e) {}
}

function loadSavedState(testKey) {
  try {
    const raw = localStorage.getItem(`${LS_KEY}_${testKey}`);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data.questions || data.questions.length === 0) return null;
    return data;
  } catch(e) { return null; }
}

function clearSavedState(testKey) {
  try { localStorage.removeItem(`${LS_KEY}_${testKey}`); } catch(e) {}
}

function loadFromStorage() {
  // Restore toggle states from prefs
  try {
    const prefs = JSON.parse(localStorage.getItem(`${LS_KEY}_prefs`) || '{}');
    if (prefs.shuffled) { state.shuffled = true; $('toggle-shuffle').querySelector('.toggle').classList.add('on'); }
    if (prefs.timerOn) { state.timerOn = true; $('toggle-timer').querySelector('.toggle').classList.add('on'); }
    if (prefs.autocorrect) { state.autocorrect = true; $('toggle-autocorrect').querySelector('.toggle').classList.add('on'); }
  } catch(e) {}
}

function savePrefs() {
  try {
    localStorage.setItem(`${LS_KEY}_prefs`, JSON.stringify({
      shuffled: state.shuffled, timerOn: state.timerOn, autocorrect: state.autocorrect
    }));
  } catch(e) {}
}

/* ────────── HELPERS ────────── */
function countAnswered(answers) {
  return Object.values(answers).filter(v => v !== null && v !== undefined).length;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── SVG Icons ── */
function iconCheck() {
  return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 10 8 14 16 6"/></svg>`;
}
function iconX() {
  return `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>`;
}
function iconChevron() {
  return `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 4 10 8 6 12"/></svg>`;
}

/* ────────── EVENT BINDINGS (Quiz Screen) ────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Check button
  $('check-btn').addEventListener('click', checkAnswer);

  // Prev/Next
  $('prev-btn').addEventListener('click', goPrev);
  $('next-btn').addEventListener('click', () => {
    const q = state.questions[state.currentIdx];
    if (!state.checked[q.id] && !state.autocorrect) {
      // remind to check
      if (state.answers[q.id]) {
        toast('Pulsa "Comprobar" para verificar tu respuesta');
      }
      goNext();
    } else {
      goNext();
    }
  });

  // Mark button
  $('bookmark-btn').addEventListener('click', toggleMark);

  // Summary button
  $('summary-btn').addEventListener('click', confirmFinish);

  // Restart button (quiz screen)
  $('restart-quiz-btn').addEventListener('click', () => {
    showModal('Reiniciar test', '¿Seguro que deseas reiniciar este test? Perderás tu progreso actual.', [
      { label: 'Reiniciar', cls: 'btn-danger', action: () => initNewTest(state.currentTest) },
      { label: 'Cancelar', cls: 'btn-ghost', action: null }
    ]);
  });

  // Back to menu (quiz screen)
  $('menu-btn-quiz').addEventListener('click', () => {
    showModal('Volver al menú', 'Tu progreso se guardará. ¿Deseas salir?', [
      { label: 'Salir', cls: 'btn-primary', action: () => { stopTimer(); showScreen('menu-screen'); saveToStorage(); }},
      { label: 'Cancelar', cls: 'btn-ghost', action: null }
    ]);
  });

  // Results buttons
  $('results-restart-btn').addEventListener('click', () => {
    showModal('Reiniciar test', '¿Deseas volver a hacer este test?', [
      { label: 'Sí, reiniciar', cls: 'btn-primary', action: () => initNewTest(state.currentTest) },
      { label: 'Cancelar', cls: 'btn-ghost', action: null }
    ]);
  });
  $('results-menu-btn').addEventListener('click', () => {
    showScreen('menu-screen');
  });

  // Review filters
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => buildReview(btn.dataset.filter));
  });

  // Modal close on overlay click
  $('modal-overlay').addEventListener('click', e => {
    if (e.target === $('modal-overlay')) $('modal-overlay').classList.add('hidden');
  });

  // Save prefs on toggle
  ['toggle-shuffle','toggle-timer','toggle-autocorrect'].forEach(id => {
    $(id).addEventListener('click', () => setTimeout(savePrefs, 50));
  });
});
