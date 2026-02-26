// questions.js — Preguntas reales de examen extraídas de TEST_1.docx

const TESTS_DATA = {

  // ══════════════════════════════════════════════════════════
  //  TEST 1 – BASE DE CONOCIMIENTO (Redes + Seguridad + SOR)
  // ══════════════════════════════════════════════════════════
  test1: {
    title: "Test 1 — Base de Conocimiento",
    subtitle: "Redes + Seguridad + Sistemas Operativos en Red",
    questions: [
      // ── PARTE A – REDES (UD04) ──
      {
        id: 1, tema: "Redes – Modelo OSI",
        enunciado: "En el modelo OSI, la capa responsable del control de congestión y enrutamiento es:",
        opciones: { A: "Transporte", B: "Enlace", C: "Red", D: "Sesión" },
        correcta: "C",
        explicacion: "La capa 3 (Red) gestiona el enrutamiento de paquetes entre redes distintas y el control de congestión. Los routers operan en esta capa usando protocolos como IP, OSPF o BGP."
      },
      {
        id: 2, tema: "Redes – TCP/IP vs OSI",
        enunciado: "¿Cuál fue la principal razón por la que TCP/IP ganó frente a OSI?",
        opciones: { A: "Era más teórico", B: "Era más complejo", C: "Era práctico y ya estaba implementado", D: "Era más seguro" },
        correcta: "C",
        explicacion: "TCP/IP triunfó sobre OSI porque ya estaba implementado y funcionando en redes reales (ARPANET). OSI era un modelo teórico muy bien definido pero llegó tarde al mercado."
      },
      {
        id: 3, tema: "Redes – Estándares IEEE",
        enunciado: "IEEE 802.3 define:",
        opciones: { A: "Wi-Fi", B: "Ethernet", C: "Bluetooth", D: "WiMAX" },
        correcta: "B",
        explicacion: "IEEE 802.3 es el estándar que define Ethernet. IEEE 802.11 es Wi-Fi, IEEE 802.15 es Bluetooth/WPAN y IEEE 802.16 es WiMAX."
      },
      {
        id: 4, tema: "Redes – Modelo OSI",
        enunciado: "La dirección MAC opera en la capa:",
        opciones: { A: "Aplicación", B: "Transporte", C: "Enlace de datos", D: "Red" },
        correcta: "C",
        explicacion: "Las direcciones MAC (Media Access Control) son direcciones físicas que operan en la capa 2 (Enlace de datos). Los switches trabajan con MACs para reenviar tramas dentro de una misma red."
      },
      {
        id: 5, tema: "Redes – IPv4",
        enunciado: "En IPv4, el datagrama incluye:",
        opciones: { A: "Solo dirección MAC", B: "Cabecera y datos", C: "Solo payload", D: "Certificados digitales" },
        correcta: "B",
        explicacion: "Un datagrama IPv4 se compone de cabecera (con direcciones IP, TTL, protocolo, etc.) y datos (payload con el contenido de las capas superiores)."
      },
      {
        id: 6, tema: "Redes – Codificación",
        enunciado: "La codificación Manchester se caracteriza por:",
        opciones: { A: "Ausencia de transición", B: "Transición en cada bit", C: "Solo valores positivos", D: "Paridad integrada" },
        correcta: "B",
        explicacion: "Manchester garantiza una transición en el centro de cada intervalo de bit: alto→bajo para el 0 y bajo→alto para el 1 (o viceversa). Esto facilita la sincronización de reloj."
      },
      {
        id: 7, tema: "Redes – Codificación",
        enunciado: "NRZ-I representa el bit 1 mediante:",
        opciones: { A: "Nivel bajo constante", B: "Transición de señal", C: "Ausencia de señal", D: "Frecuencia alta" },
        correcta: "B",
        explicacion: "NRZ-I (Non-Return to Zero Inverted): el bit 1 se representa con una transición (cambio de nivel) respecto al estado anterior. El bit 0 no produce ninguna transición."
      },
      {
        id: 8, tema: "Redes – Tipos de Red",
        enunciado: "Una red clasificada como WAN se caracteriza por:",
        opciones: { A: "Alcance local", B: "Conexión personal", C: "Gran escala geográfica", D: "Red dentro de campus" },
        correcta: "C",
        explicacion: "WAN (Wide Area Network) es una red de gran escala geográfica que puede conectar ciudades, países o continentes. Internet es el ejemplo más grande de WAN."
      },
      {
        id: 9, tema: "Redes – Estándares IEEE",
        enunciado: "IEEE 802.11 corresponde a:",
        opciones: { A: "Ethernet", B: "Wi-Fi", C: "Token Ring", D: "ARPANET" },
        correcta: "B",
        explicacion: "IEEE 802.11 es el estándar que define las redes inalámbricas Wi-Fi. Sus variantes (802.11a/b/g/n/ac/ax) definen distintas velocidades y frecuencias de operación."
      },
      {
        id: 10, tema: "Redes – Modelo OSI",
        enunciado: "En el modelo OSI, la compresión y cifrado pertenecen a la capa:",
        opciones: { A: "Aplicación", B: "Presentación", C: "Transporte", D: "Física" },
        correcta: "B",
        explicacion: "La capa 6 (Presentación) se encarga del cifrado/descifrado, compresión y conversión de formatos de datos, actuando como traductor entre la aplicación y la red."
      },
      // ── PARTE B – SEGURIDAD (UD05) ──
      {
        id: 11, tema: "Seguridad – Ataques",
        enunciado: "Un ataque que intercepta comunicación entre dos partes es:",
        opciones: { A: "XSS", B: "MITM", C: "DDoS", D: "Rootkit" },
        correcta: "B",
        explicacion: "MITM (Man-in-the-Middle) es un ataque donde el atacante se interpone entre dos partes que se comunican, pudiendo interceptar, leer o modificar el tráfico sin que las víctimas lo sepan."
      },
      {
        id: 12, tema: "Seguridad – Ingeniería Social",
        enunciado: "El phishing se basa principalmente en:",
        opciones: { A: "Fuerza bruta", B: "Ingeniería social", C: "Exploit kernel", D: "Cifrado débil" },
        correcta: "B",
        explicacion: "El phishing es una técnica de ingeniería social que engaña a las víctimas haciéndose pasar por entidades legítimas para robar credenciales u otra información sensible."
      },
      {
        id: 13, tema: "Seguridad – Ataques",
        enunciado: "Un ataque 0-Day explota:",
        opciones: { A: "Vulnerabilidades ya parcheadas", B: "Fallos no conocidos o no parcheados", C: "Errores físicos", D: "DNS mal configurado" },
        correcta: "B",
        explicacion: "Un ataque Zero-Day explota vulnerabilidades que aún no son conocidas públicamente o no tienen parche disponible. Son especialmente peligrosos porque no hay defensa preparada."
      },
      {
        id: 14, tema: "Seguridad – Principios CIA",
        enunciado: "La confidencialidad garantiza:",
        opciones: { A: "Acceso libre", B: "No alteración", C: "No acceso no autorizado", D: "No pérdida eléctrica" },
        correcta: "C",
        explicacion: "La confidencialidad (uno de los pilares de la triada CIA) garantiza que la información solo sea accesible a personas autorizadas. Se implementa mediante cifrado y control de acceso."
      },
      {
        id: 15, tema: "Seguridad – Herramientas",
        enunciado: "Un SIEM se utiliza para:",
        opciones: { A: "Cifrar discos", B: "Monitorizar y correlacionar eventos", C: "Crear usuarios", D: "Hacer RAID" },
        correcta: "B",
        explicacion: "SIEM (Security Information and Event Management) recopila logs de múltiples fuentes, los correlaciona y genera alertas para detectar amenazas y responder a incidentes de seguridad."
      },
      {
        id: 16, tema: "Seguridad – Ataques",
        enunciado: "Un ataque DDoS busca:",
        opciones: { A: "Robar contraseñas", B: "Saturar recursos", C: "Modificar DNS", D: "Cifrar archivos" },
        correcta: "B",
        explicacion: "DDoS (Distributed Denial of Service) usa múltiples equipos para enviar tráfico masivo y saturar los recursos de un servidor o red, haciéndolo inaccesible para usuarios legítimos."
      },
      {
        id: 17, tema: "Seguridad – Malware",
        enunciado: "Un rootkit tiene como objetivo:",
        opciones: { A: "Instalar antivirus", B: "Ocultar presencia maliciosa", C: "Configurar firewall", D: "Mejorar rendimiento" },
        correcta: "B",
        explicacion: "Un rootkit se infiltra en el núcleo del sistema operativo para ocultar la presencia de malware. Manipula llamadas al sistema para que el software de seguridad no detecte la amenaza."
      },
      {
        id: 18, tema: "Seguridad – Forense",
        enunciado: "El análisis forense incluye:",
        opciones: { A: "Eliminación de logs", B: "Preservación de evidencia", C: "Instalación de malware", D: "Cambio de BIOS" },
        correcta: "B",
        explicacion: "El análisis forense digital tiene como principio fundamental la preservación de la evidencia en su estado original, asegurando la cadena de custodia para posibles procesos legales."
      },
      {
        id: 19, tema: "Seguridad – Control de Acceso",
        enunciado: "RBAC significa:",
        opciones: { A: "Root Based Access Control", B: "Role-Based Access Control", C: "Remote Backup Active Control", D: "Random Binary Access Check" },
        correcta: "B",
        explicacion: "RBAC (Role-Based Access Control) es un modelo de control de acceso que asigna permisos a roles (administrador, usuario, auditor) en lugar de a usuarios individuales, simplificando la gestión."
      },
      {
        id: 20, tema: "Seguridad – Principios CIA",
        enunciado: "La integridad se pierde cuando:",
        opciones: { A: "Se modifica información", B: "Se cifra correctamente", C: "Se autentica con MFA", D: "Se usa VPN" },
        correcta: "A",
        explicacion: "La integridad garantiza que la información no haya sido alterada de forma no autorizada. Se pierde cuando alguien modifica los datos sin permiso. Se protege con hashes y firmas digitales."
      },
      // ── PARTE C – SISTEMAS OPERATIVOS EN RED (UD06) ──
      {
        id: 21, tema: "SOR – Active Directory",
        enunciado: "Un Controlador de Dominio almacena:",
        opciones: { A: "Solo DNS", B: "Copia de la base AD", C: "Solo DHCP", D: "Solo usuarios locales" },
        correcta: "B",
        explicacion: "El DC almacena y mantiene una copia de la base de datos de Active Directory (ntds.dit), que contiene todos los objetos del dominio: usuarios, grupos, equipos y políticas."
      },
      {
        id: 22, tema: "SOR – Instalación AD",
        enunciado: "Para promover un servidor a DC es necesario instalar:",
        opciones: { A: "IIS", B: "AD DS", C: "FTP", D: "RAID" },
        correcta: "B",
        explicacion: "El rol AD DS (Active Directory Domain Services) es el que hay que instalar antes de promover el servidor a DC. Se añade desde Server Manager y luego se ejecuta el asistente de promoción."
      },
      {
        id: 23, tema: "SOR – Estructura AD",
        enunciado: "Un bosque puede contener:",
        opciones: { A: "Un solo dominio", B: "Varios dominios", C: "Solo RODC", D: "Solo OU" },
        correcta: "B",
        explicacion: "Un bosque de AD puede contener varios dominios organizados en árboles. El mínimo es el dominio raíz pero puede crecer añadiendo dominios hijos y árboles adicionales."
      },
      {
        id: 24, tema: "SOR – Unidades Organizativas",
        enunciado: "Una OU permite:",
        opciones: { A: "Crear bosques", B: "Agrupar objetos y aplicar GPO", C: "Eliminar dominio", D: "Sustituir DC" },
        correcta: "B",
        explicacion: "Las OUs son contenedores jerárquicos que agrupan objetos AD (usuarios, equipos, grupos) y permiten aplicar GPO específicas y delegar la administración."
      },
      {
        id: 25, tema: "SOR – RSAT",
        enunciado: "RSAT permite:",
        opciones: { A: "Instalar imágenes PXE", B: "Administrar roles desde cliente Windows", C: "Configurar BIOS", D: "Hacer RAID" },
        correcta: "B",
        explicacion: "RSAT (Remote Server Administration Tools) es un conjunto de herramientas de Microsoft que permite administrar roles y características de Windows Server desde un equipo cliente Windows 10/11."
      },
      {
        id: 26, tema: "SOR – WDS",
        enunciado: "WDS permite:",
        opciones: { A: "Instalación remota por PXE", B: "Configurar RAID", C: "Crear OU", D: "Instalar antivirus" },
        correcta: "A",
        explicacion: "WDS (Windows Deployment Services) permite desplegar imágenes del sistema operativo en equipos cliente de forma remota a través de arranque PXE, sin necesidad de medios físicos."
      },
      {
        id: 27, tema: "SOR – Unión al Dominio",
        enunciado: "Para unir un PC al dominio se requiere:",
        opciones: { A: "DNS funcional", B: "Bluetooth", C: "USB booteable", D: "Solo IP pública" },
        correcta: "A",
        explicacion: "Para unir un equipo al dominio es imprescindible que el DNS esté correctamente configurado en el cliente, ya que necesita resolver el nombre del dominio para localizar el DC."
      },
      {
        id: 28, tema: "SOR – RAID",
        enunciado: "RAID5 utiliza:",
        opciones: { A: "Espejo", B: "Paridad distribuida", C: "Solo copia simple", D: "Cifrado AES" },
        correcta: "B",
        explicacion: "RAID5 distribuye tanto los datos como la información de paridad entre todos los discos del conjunto (mínimo 3). La paridad permite reconstruir datos si falla un disco."
      },
      {
        id: 29, tema: "SOR – PowerShell",
        enunciado: "En PowerShell, los cmdlets suelen comenzar por:",
        opciones: { A: "Exec-", B: "Get-/Set-/New-", C: "Run-", D: "Addonly-" },
        correcta: "B",
        explicacion: "Los cmdlets de PowerShell siguen la convención Verbo-Sustantivo. Los verbos más comunes son Get- (obtener información), Set- (modificar), New- (crear) y Remove- (eliminar)."
      },
      {
        id: 30, tema: "SOR – PowerShell",
        enunciado: "New-ADGroup crea:",
        opciones: { A: "OU", B: "Usuario", C: "Grupo", D: "Dominio" },
        correcta: "C",
        explicacion: "New-ADGroup es el cmdlet de PowerShell que crea grupos en Active Directory. Requiere parámetros como -Name, -Path, -GroupCategory y -GroupScope."
      },
      {
        id: 31, tema: "SOR – PowerShell",
        enunciado: "Enable-PSRemoting permite:",
        opciones: { A: "Habilitar DHCP", B: "Permitir administración remota PowerShell", C: "Instalar RSAT", D: "Configurar RAID" },
        correcta: "B",
        explicacion: "Enable-PSRemoting configura WinRM en el servidor para aceptar comandos PowerShell remotos, habilitando cmdlets como Invoke-Command y Enter-PSSession desde otros equipos."
      },
      {
        id: 32, tema: "SOR – RODC",
        enunciado: "Un RODC es:",
        opciones: { A: "Editable", B: "Solo lectura", C: "DNS secundario", D: "Servidor DHCP" },
        correcta: "B",
        explicacion: "RODC (Read-Only Domain Controller) almacena una copia de solo lectura de la base AD. Ideal para sedes remotas donde no se puede garantizar la seguridad física del servidor."
      },
      {
        id: 33, tema: "SOR – Nivel Funcional",
        enunciado: "El nivel funcional del dominio define:",
        opciones: { A: "Tamaño del disco", B: "Características habilitadas", C: "Número de usuarios", D: "Tipo de RAID" },
        correcta: "B",
        explicacion: "El nivel funcional del dominio determina qué características de AD están disponibles según la versión mínima de Windows Server de todos los DCs del dominio."
      },
      {
        id: 34, tema: "SOR – Sistema de Archivos",
        enunciado: "ReFS es:",
        opciones: { A: "Protocolo red", B: "Sistema de archivos", C: "Servicio dominio", D: "Herramienta RSAT" },
        correcta: "B",
        explicacion: "ReFS (Resilient File System) es el sistema de archivos de Microsoft orientado a mayor integridad y resiliencia. Es una alternativa a NTFS en Windows Server para grandes volúmenes."
      },
      {
        id: 35, tema: "SOR – LDAP",
        enunciado: "En LDAP, CN significa:",
        opciones: { A: "Control Node", B: "Common Name", C: "Central Network", D: "Core Name" },
        correcta: "B",
        explicacion: "CN (Common Name) es el atributo LDAP que identifica el nombre común de un objeto. Por ejemplo, CN=Juan García es el nombre del usuario dentro de su ruta Distinguished Name completa."
      },
      {
        id: 36, tema: "SOR – Autenticación",
        enunciado: "La autenticación en dominio es:",
        opciones: { A: "Local", B: "Centralizada", C: "Manual", D: "Peer-to-peer" },
        correcta: "B",
        explicacion: "La autenticación en dominio es centralizada: todas las credenciales se verifican contra la base de datos de AD en el DC, independientemente del equipo donde inicie sesión el usuario."
      },
      {
        id: 37, tema: "SOR – Estructura AD",
        enunciado: "Un dominio representa:",
        opciones: { A: "Red física", B: "Límite de seguridad", C: "Router", D: "VLAN" },
        correcta: "B",
        explicacion: "Un dominio AD es fundamentalmente un límite de seguridad lógico: define el alcance de las políticas, permisos y la base de datos de objetos compartida por todos los DCs del dominio."
      },
      {
        id: 38, tema: "SOR – DHCP",
        enunciado: "DHCP en dominio debe:",
        opciones: { A: "Estar autorizado en AD", B: "Ser local", C: "Estar desactivado", D: "Ser manual" },
        correcta: "A",
        explicacion: "En entornos de dominio AD, el servidor DHCP debe estar autorizado explícitamente en Active Directory para poder conceder direcciones IP. Esto evita servidores DHCP no autorizados."
      },
      {
        id: 39, tema: "SOR – Replicación AD",
        enunciado: "La replicación AD garantiza:",
        opciones: { A: "Igual IP", B: "Igual base en DCs", C: "Igual BIOS", D: "Igual RAM" },
        correcta: "B",
        explicacion: "La replicación multimaestro de AD garantiza que todos los DCs del dominio tengan una copia idéntica y sincronizada de la base de datos, asegurando consistencia y disponibilidad."
      },
      {
        id: 40, tema: "SOR – WDS",
        enunciado: "La instalación remota requiere:",
        opciones: { A: "PXE habilitado", B: "Solo USB", C: "Bluetooth", D: "Solo ISO local" },
        correcta: "A",
        explicacion: "Para la instalación remota con WDS, los equipos cliente deben tener habilitado el arranque PXE (Preboot Execution Environment) en su BIOS/UEFI para recibir la imagen del SO por red."
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  TEST 2 – NIVEL AVANZADO (Casos prácticos)
  // ══════════════════════════════════════════════════════════
  test2: {
    title: "Test 2 — Nivel Avanzado",
    subtitle: "Casos prácticos · Redes + Seguridad + SOR",
    questions: [
      {
        id: 1, tema: "Redes – Modelo OSI",
        enunciado: "Un paquete viaja desde un cliente a un servidor web. ¿En qué capa OSI se realiza el enrutamiento?",
        opciones: { A: "Enlace", B: "Red", C: "Transporte", D: "Aplicación" },
        correcta: "B",
        explicacion: "El enrutamiento (decidir por qué camino viaja el paquete entre redes) es función de la capa 3 (Red). Los routers analizan las direcciones IP y consultan sus tablas de enrutamiento."
      },
      {
        id: 2, tema: "Redes – Modelo OSI",
        enunciado: "Si un switch trabaja con direcciones MAC, opera en la capa:",
        opciones: { A: "Física", B: "Enlace", C: "Red", D: "Transporte" },
        correcta: "B",
        explicacion: "Los switches trabajan con direcciones MAC para reenviar tramas dentro de la misma red local, operando en la capa 2 (Enlace de datos). Los routers operan en la capa 3 (Red)."
      },
      {
        id: 3, tema: "Redes – Tipos de Red",
        enunciado: "Una red MAN se caracteriza por:",
        opciones: { A: "Conectar dispositivos personales", B: "Conectar edificios dentro de una ciudad", C: "Conectar solo una casa", D: "Conectar solo un campus" },
        correcta: "B",
        explicacion: "MAN (Metropolitan Area Network) es una red de área metropolitana que conecta múltiples edificios u organizaciones dentro de una ciudad, mayor que una LAN pero menor que una WAN."
      },
      {
        id: 4, tema: "Redes – TCP/IP vs OSI",
        enunciado: "En el modelo TCP/IP, la capa 'Internet' equivale aproximadamente a la capa OSI:",
        opciones: { A: "Transporte", B: "Aplicación", C: "Red", D: "Física" },
        correcta: "C",
        explicacion: "La capa Internet del modelo TCP/IP (que maneja IP, ICMP, ARP) equivale a la capa 3 (Red) del modelo OSI. Ambas se encargan del direccionamiento y enrutamiento entre redes."
      },
      {
        id: 5, tema: "Redes – Modelo OSI",
        enunciado: "La función 'Keep Link Without Error' pertenece a:",
        opciones: { A: "Capa Física", B: "Capa Enlace", C: "Capa Red", D: "Capa Transporte" },
        correcta: "B",
        explicacion: "La capa 2 (Enlace de datos) se encarga de la detección y corrección de errores en el enlace, garantizando una transmisión fiable en el trayecto punto a punto entre nodos directamente conectados."
      },
      {
        id: 6, tema: "Redes – Modelo OSI",
        enunciado: "Si un cable Ethernet está mal crimpado, el fallo afecta principalmente a:",
        opciones: { A: "Capa Aplicación", B: "Capa Transporte", C: "Capa Física", D: "Capa Sesión" },
        correcta: "C",
        explicacion: "Un cable mal crimpado es un problema físico (eléctrico/mecánico) que afecta a la capa 1 (Física), responsable de la transmisión de bits a través del medio físico."
      },
      {
        id: 7, tema: "Redes – Codificación",
        enunciado: "En Manchester diferencial, la sincronización se garantiza porque:",
        opciones: { A: "No hay transiciones", B: "Hay transición en cada periodo", C: "Usa paridad", D: "Usa compresión" },
        correcta: "B",
        explicacion: "Manchester Diferencial garantiza siempre una transición en el centro de cada intervalo de bit, lo que asegura sincronización continua entre transmisor y receptor."
      },
      {
        id: 8, tema: "Redes – Topologías",
        enunciado: "Una topología en estrella depende críticamente de:",
        opciones: { A: "Cable coaxial", B: "Nodo central", C: "Token Bus", D: "Router externo" },
        correcta: "B",
        explicacion: "En la topología en estrella, todos los dispositivos se conectan a un nodo central (switch o hub). Si el nodo central falla, toda la red queda inoperativa."
      },
      {
        id: 9, tema: "Redes – Estándares IEEE",
        enunciado: "IEEE 802.15 está asociado a:",
        opciones: { A: "WiMAX", B: "Ethernet", C: "Bluetooth", D: "ARP" },
        correcta: "C",
        explicacion: "IEEE 802.15 define las redes WPAN (Wireless Personal Area Network), cuyo principal exponente es Bluetooth. Cubre comunicaciones de corto alcance para dispositivos personales."
      },
      {
        id: 10, tema: "Redes – IPv4",
        enunciado: "Un datagrama IPv4 contiene información de:",
        opciones: { A: "Dirección origen y destino", B: "Dirección MAC física", C: "Solo puerto", D: "Certificados TLS" },
        correcta: "A",
        explicacion: "La cabecera IPv4 incluye la dirección IP de origen y destino (entre otros campos como TTL, protocolo, longitud, etc.). Las MACs son de capa 2 y no viajan en la cabecera IP."
      },
      {
        id: 11, tema: "Seguridad – Ataques",
        enunciado: "Una empresa sufre saturación del servidor por múltiples equipos externos. Es un caso de:",
        opciones: { A: "MITM", B: "DDoS", C: "XSS", D: "Rootkit" },
        correcta: "B",
        explicacion: "DDoS (Distributed Denial of Service): múltiples equipos (botnet) lanzan peticiones masivas para saturar el servidor. La clave es que el ataque viene de muchas fuentes distribuidas simultáneamente."
      },
      {
        id: 12, tema: "Seguridad – Ingeniería Social",
        enunciado: "Un empleado recibe un correo falso del 'director' pidiendo credenciales. Es:",
        opciones: { A: "Fuerza bruta", B: "Spear Phishing", C: "SQL Injection", D: "Botnet" },
        correcta: "B",
        explicacion: "Spear Phishing es un phishing dirigido a una persona u organización específica, haciéndose pasar por alguien de confianza (como el director). Es más sofisticado que el phishing genérico."
      },
      {
        id: 13, tema: "Seguridad – Ataques",
        enunciado: "Un atacante intercepta tráfico para modificar datos antes de que lleguen al servidor. Es:",
        opciones: { A: "MITM", B: "Worm", C: "Ransomware", D: "ARP legítimo" },
        correcta: "A",
        explicacion: "MITM (Man-in-the-Middle): el atacante se interpone entre cliente y servidor, interceptando y potencialmente modificando el tráfico antes de reenviarlo al destino legítimo."
      },
      {
        id: 14, tema: "Seguridad – Herramientas",
        enunciado: "Un SIEM ayuda a:",
        opciones: { A: "Instalar antivirus", B: "Correlacionar eventos y detectar anomalías", C: "Crear RAID", D: "Configurar DHCP" },
        correcta: "B",
        explicacion: "SIEM centraliza logs de múltiples fuentes (firewalls, IDS, servidores), los correlaciona y detecta patrones anómalos que podrían indicar un ataque, generando alertas para el equipo de seguridad."
      },
      {
        id: 15, tema: "Seguridad – Autenticación",
        enunciado: "La autenticación multifactor combina:",
        opciones: { A: "Usuario + contraseña", B: "Algo que sabes + algo que tienes o eres", C: "Dos contraseñas", D: "DNS + DHCP" },
        correcta: "B",
        explicacion: "MFA (Multi-Factor Authentication) combina dos o más factores de distinta categoría: algo que sabes (contraseña/PIN), algo que tienes (token/móvil) y/o algo que eres (huella, rostro)."
      },
      {
        id: 16, tema: "Seguridad – Malware",
        enunciado: "Un keylogger tiene como objetivo:",
        opciones: { A: "Cifrar datos", B: "Capturar pulsaciones de teclado", C: "Generar paridad RAID", D: "Configurar firewall" },
        correcta: "B",
        explicacion: "Un keylogger registra en segundo plano todas las pulsaciones del teclado para capturar contraseñas, números de tarjeta y otra información sensible introducida por el usuario."
      },
      {
        id: 17, tema: "Seguridad – Principios CIA",
        enunciado: "La integridad se protege mediante:",
        opciones: { A: "Hash", B: "IP pública", C: "Topología estrella", D: "PXE" },
        correcta: "A",
        explicacion: "La integridad de los datos se protege mediante funciones hash (MD5, SHA-256, etc.) y firmas digitales. Si los datos se alteran, el hash resultante será diferente al original, detectando la manipulación."
      },
      {
        id: 18, tema: "Seguridad – Ataques",
        enunciado: "Un ataque Zero-Day es especialmente peligroso porque:",
        opciones: { A: "Ya existe parche", B: "No existe solución aún", C: "Solo afecta Linux", D: "Solo afecta DNS" },
        correcta: "B",
        explicacion: "Un Zero-Day explota una vulnerabilidad desconocida para el fabricante o para la que no existe parche. Al no haber defensa disponible, los sistemas afectados están completamente expuestos."
      },
      {
        id: 19, tema: "Seguridad – Control de Acceso",
        enunciado: "RBAC mejora seguridad porque:",
        opciones: { A: "Permite acceso total", B: "Asigna permisos según rol", C: "Elimina usuarios", D: "Desactiva logs" },
        correcta: "B",
        explicacion: "RBAC asigna permisos a roles predefinidos (administrador, usuario estándar, auditor) y los usuarios obtienen solo los permisos del rol que tienen asignado, aplicando el principio de mínimo privilegio."
      },
      {
        id: 20, tema: "Seguridad – Malware",
        enunciado: "Un rootkit es peligroso porque:",
        opciones: { A: "Mejora rendimiento", B: "Se oculta profundamente en el sistema", C: "Solo afecta redes WiFi", D: "Solo roba cookies" },
        correcta: "B",
        explicacion: "Un rootkit se instala a nivel de kernel u arranque, ocultándose de los antivirus y herramientas del sistema. Puede ocultar procesos, archivos y conexiones de red maliciosas."
      },
      {
        id: 21, tema: "SOR – Promoción DC",
        enunciado: "Promover un servidor implica:",
        opciones: { A: "Convertirlo en cliente", B: "Instalar AD DS y convertirlo en DC", C: "Activar RAID", D: "Instalar RSAT" },
        correcta: "B",
        explicacion: "Promover un servidor significa ejecutar el asistente de AD DS que instala y configura Active Directory, convirtiendo el servidor en un Domain Controller del dominio especificado."
      },
      {
        id: 22, tema: "SOR – DNS y Dominio",
        enunciado: "Si el DNS del cliente apunta mal, no podrá:",
        opciones: { A: "Navegar", B: "Resolver el DC y unirse al dominio", C: "Usar Bluetooth", D: "Usar teclado" },
        correcta: "B",
        explicacion: "El cliente necesita DNS para localizar el DC mediante registros SRV. Si el DNS está mal configurado, no puede resolver el nombre del dominio y el proceso de unión y autenticación falla."
      },
      {
        id: 23, tema: "SOR – RODC",
        enunciado: "Un RODC es recomendable en:",
        opciones: { A: "Sede principal", B: "Sede remota con menor seguridad física", C: "Laboratorio doméstico", D: "Router doméstico" },
        correcta: "B",
        explicacion: "El RODC está diseñado para sedes remotas donde la seguridad física del servidor es inferior. Al ser de solo lectura, si el servidor es robado o comprometido, el impacto en AD es mínimo."
      },
      {
        id: 24, tema: "SOR – RSAT",
        enunciado: "RSAT permite:",
        opciones: { A: "Gestionar AD desde Windows cliente", B: "Crear RAID", C: "Instalar imágenes PXE", D: "Reemplazar DC" },
        correcta: "A",
        explicacion: "RSAT (Remote Server Administration Tools) instala en el cliente Windows las mismas herramientas de administración que existen en el servidor, permitiendo gestionar AD, DNS, DHCP y más remotamente."
      },
      {
        id: 25, tema: "SOR – WDS",
        enunciado: "WDS requiere obligatoriamente:",
        opciones: { A: "Solo DHCP", B: "AD, DHCP y DNS", C: "Solo DNS", D: "Solo BIOS" },
        correcta: "B",
        explicacion: "WDS requiere que en la red existan tres servicios: Active Directory (autenticación), DHCP (asignar IP durante arranque PXE) y DNS (resolución de nombres). Los tres son obligatorios."
      },
      {
        id: 26, tema: "SOR – RAID",
        enunciado: "Un RAID5 puede sobrevivir a:",
        opciones: { A: "Fallo de todos los discos", B: "Fallo de un disco", C: "Fallo de CPU", D: "Fallo de red" },
        correcta: "B",
        explicacion: "RAID5 tolera el fallo de un disco gracias a la paridad distribuida. Con los datos y la paridad de los discos restantes se puede reconstruir completamente el disco fallido."
      },
      {
        id: 27, tema: "SOR – PowerShell",
        enunciado: "PowerShell remoting se habilita con:",
        opciones: { A: "Enable-PSRemoting", B: "Start-Domain", C: "Set-RAID", D: "Add-Client" },
        correcta: "A",
        explicacion: "Enable-PSRemoting configura WinRM (Windows Remote Management) en el servidor para aceptar conexiones remotas de PowerShell, habilitando la administración remota mediante cmdlets."
      },
      {
        id: 28, tema: "SOR – LDAP",
        enunciado: "En LDAP, OU representa:",
        opciones: { A: "Usuario", B: "Unidad organizativa", C: "Controlador físico", D: "Dominio completo" },
        correcta: "B",
        explicacion: "OU (Organizational Unit) es un atributo LDAP que identifica las unidades organizativas en la jerarquía de AD. Aparece en el Distinguished Name, por ejemplo: OU=Marketing,DC=empresa,DC=com."
      },
      {
        id: 29, tema: "SOR – Estructura AD",
        enunciado: "Un bosque define:",
        opciones: { A: "Un único usuario", B: "Conjunto de dominios", C: "Un RAID", D: "Un SIEM" },
        correcta: "B",
        explicacion: "El bosque (forest) es la unidad organizativa más alta en AD y define el conjunto de todos los dominios y árboles que comparten el mismo esquema y catálogo global."
      },
      {
        id: 30, tema: "SOR – Replicación AD",
        enunciado: "La replicación AD garantiza:",
        opciones: { A: "Mismo BIOS", B: "Copia sincronizada entre DCs", C: "Mismo disco", D: "Mismo antivirus" },
        correcta: "B",
        explicacion: "La replicación AD sincroniza automáticamente los cambios entre todos los DCs del dominio, garantizando que todos tengan una copia idéntica y actualizada de la base de datos."
      },
      {
        id: 31, tema: "SOR – PowerShell",
        enunciado: "New-ADUser crea:",
        opciones: { A: "OU", B: "Grupo", C: "Usuario", D: "Dominio" },
        correcta: "C",
        explicacion: "New-ADUser es el cmdlet de PowerShell para crear cuentas de usuario en Active Directory. Requiere al menos -Name y -Path, y admite parámetros como -AccountPassword, -Enabled, etc."
      },
      {
        id: 32, tema: "SOR – Autenticación",
        enunciado: "La autenticación en dominio es:",
        opciones: { A: "Distribuida", B: "Centralizada en DC", C: "Manual", D: "Local" },
        correcta: "B",
        explicacion: "Toda autenticación en el dominio pasa por el DC. El DC verifica las credenciales del usuario contra la base de datos AD y emite el token de autenticación (ticket Kerberos)."
      },
      {
        id: 33, tema: "SOR – Estructura AD",
        enunciado: "Un dominio representa:",
        opciones: { A: "Límite de seguridad", B: "Topología física", C: "VLAN", D: "Firewall" },
        correcta: "A",
        explicacion: "Un dominio AD es un límite de seguridad lógico: las políticas de grupo, los permisos y la base de datos de objetos están circunscritos al dominio. Es la unidad básica de administración de AD."
      },
      {
        id: 34, tema: "SOR – Administración Remota",
        enunciado: "Para administración remota se habilita:",
        opciones: { A: "Escritorio remoto", B: "RAID", C: "DHCP", D: "Token Ring" },
        correcta: "A",
        explicacion: "Para administrar un servidor Windows remotamente con interfaz gráfica se habilita el Escritorio remoto (RDP, puerto 3389) desde las Propiedades del sistema del servidor."
      },
      {
        id: 35, tema: "SOR – Nivel Funcional",
        enunciado: "El nivel funcional determina:",
        opciones: { A: "Capacidad RAM", B: "Funciones disponibles en dominio/bosque", C: "IP", D: "RAID" },
        correcta: "B",
        explicacion: "El nivel funcional controla qué características avanzadas de AD están disponibles. Un nivel funcional más alto (versión más reciente de Windows Server) habilita más funcionalidades."
      },
      {
        id: 36, tema: "SOR – Sistema de Archivos",
        enunciado: "ReFS mejora:",
        opciones: { A: "Seguridad y tolerancia en sistema de archivos", B: "WiFi", C: "DHCP", D: "LDAP" },
        correcta: "A",
        explicacion: "ReFS (Resilient File System) mejora la integridad de datos y la tolerancia a fallos del sistema de archivos. Detecta y en algunos casos corrige automáticamente la corrupción de datos."
      },
      {
        id: 37, tema: "SOR – DHCP",
        enunciado: "DHCP en dominio debe:",
        opciones: { A: "Ser autorizado", B: "Ser manual", C: "Ser externo siempre", D: "Ser opcional" },
        correcta: "A",
        explicacion: "En un dominio AD, el servidor DHCP debe ser autorizado explícitamente en Active Directory. Sin esta autorización, el servidor DHCP no concede direcciones IP a los clientes."
      },
      {
        id: 38, tema: "SOR – WDS",
        enunciado: "Instalación remota requiere:",
        opciones: { A: "PXE habilitado en cliente", B: "USB", C: "ISO local", D: "Bluetooth" },
        correcta: "A",
        explicacion: "La instalación remota mediante WDS requiere que el equipo cliente tenga habilitado el arranque PXE en su BIOS/UEFI, lo que le permite recibir una imagen de arranque desde el servidor WDS."
      },
      {
        id: 39, tema: "SOR – RAID",
        enunciado: "En RAID5, la paridad sirve para:",
        opciones: { A: "Acelerar red", B: "Reconstruir datos ante fallo", C: "Autenticación", D: "DNS" },
        correcta: "B",
        explicacion: "La paridad en RAID5 es información de recuperación distribuida entre todos los discos. Si falla un disco, los datos se reconstruyen matemáticamente usando los datos y la paridad de los discos restantes."
      },
      {
        id: 40, tema: "SOR – Active Directory",
        enunciado: "La estructura lógica de AD es independiente de:",
        opciones: { A: "Usuarios", B: "Topología física de red", C: "DNS", D: "GPO" },
        correcta: "B",
        explicacion: "Una ventaja clave de AD es que la estructura lógica (dominios, OUs, grupos) es completamente independiente de la topología física de la red (cables, switches, ubicación geográfica)."
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  TEST 3 – NIVEL EXAMEN FINAL (Mixto y técnico)
  // ══════════════════════════════════════════════════════════
  test3: {
    title: "Test 3 — Nivel Examen Final",
    subtitle: "Mixto y técnico · Redes + Seguridad + SOR",
    questions: [
      {
        id: 1, tema: "SOR – DNS y Dominio",
        enunciado: "Un cliente puede hacer ping al DC pero no puede unirse al dominio. El problema más probable es:",
        opciones: { A: "Firewall físico", B: "DNS mal configurado", C: "Cable defectuoso", D: "RAID mal creado" },
        correcta: "B",
        explicacion: "Si hay ping (ICMP funciona), la conectividad física y de red es correcta. El problema es que el cliente no puede resolver el nombre del dominio DNS para localizar el DC y completar la unión."
      },
      {
        id: 2, tema: "Seguridad – Ataques",
        enunciado: "En un ataque MITM, el atacante:",
        opciones: { A: "Satura el servidor", B: "Se posiciona entre cliente y servidor", C: "Borra discos", D: "Cambia BIOS" },
        correcta: "B",
        explicacion: "MITM (Man-in-the-Middle): el atacante se interpone en la comunicación entre dos partes, pudiendo escuchar, interceptar y modificar el tráfico sin que las víctimas lo detecten."
      },
      {
        id: 3, tema: "Redes – Modelo OSI",
        enunciado: "En el modelo OSI, TCP pertenece a:",
        opciones: { A: "Transporte", B: "Red", C: "Enlace", D: "Aplicación" },
        correcta: "A",
        explicacion: "TCP (Transmission Control Protocol) opera en la capa 4 (Transporte) del modelo OSI. Se encarga de la comunicación extremo a extremo, control de flujo, control de errores y garantía de entrega."
      },
      {
        id: 4, tema: "Redes – Estándares IEEE",
        enunciado: "IEEE 802.11 opera principalmente en:",
        opciones: { A: "LAN cableada", B: "Redes inalámbricas", C: "Token Ring", D: "RAID" },
        correcta: "B",
        explicacion: "IEEE 802.11 es el estándar para redes Wi-Fi (Wireless LAN). Sus variantes (a/b/g/n/ac/ax) definen distintas velocidades y bandas de frecuencia para redes inalámbricas."
      },
      {
        id: 5, tema: "SOR – RAID",
        enunciado: "Un RAID5 mejora disponibilidad pero penaliza:",
        opciones: { A: "Lectura", B: "Escritura", C: "Autenticación", D: "DNS" },
        correcta: "B",
        explicacion: "RAID5 tiene buen rendimiento de lectura pero penaliza las escrituras porque cada operación de escritura requiere leer los datos actuales, calcular la nueva paridad y escribir ambos."
      },
      {
        id: 6, tema: "Seguridad – Malware",
        enunciado: "Un rootkit es especialmente difícil de detectar porque:",
        opciones: { A: "Usa DHCP", B: "Se integra profundamente en el sistema", C: "Usa Bluetooth", D: "Usa RSAT" },
        correcta: "B",
        explicacion: "Los rootkits operan a nivel de kernel o incluso de arranque (bootkit), modificando las llamadas al sistema para ocultar su presencia ante el sistema operativo y los antivirus convencionales."
      },
      {
        id: 7, tema: "SOR – Estructura AD",
        enunciado: "Un bosque puede contener varios dominios relacionados jerárquicamente en:",
        opciones: { A: "Árbol", B: "VLAN", C: "Token Ring", D: "RAID" },
        correcta: "A",
        explicacion: "En AD, un árbol es un conjunto de dominios que comparten el mismo espacio de nombres DNS y están relacionados jerárquicamente. Un bosque puede contener uno o varios árboles."
      },
      {
        id: 8, tema: "SOR – PowerShell",
        enunciado: "PowerShell permite automatizar administración de dominio mediante:",
        opciones: { A: "Scripts", B: "RAID", C: "PXE", D: "DHCP" },
        correcta: "A",
        explicacion: "PowerShell permite crear scripts (.ps1) que automatizan tareas repetitivas de administración de AD, como crear cuentas masivas, aplicar configuraciones o generar informes."
      },
      {
        id: 9, tema: "SOR – Unidades Organizativas",
        enunciado: "Una OU permite delegar:",
        opciones: { A: "BIOS", B: "Administración específica", C: "RAID", D: "MAC" },
        correcta: "B",
        explicacion: "La delegación de administración en OUs permite asignar a un usuario o grupo el control administrativo de una OU específica sin darle privilegios de administrador de todo el dominio."
      },
      {
        id: 10, tema: "Seguridad – Principios CIA",
        enunciado: "Un ataque DDoS afecta principalmente a:",
        opciones: { A: "Confidencialidad", B: "Disponibilidad", C: "Integridad", D: "Autenticación" },
        correcta: "B",
        explicacion: "DDoS ataca la disponibilidad del servicio: su objetivo es dejar el servicio inaccesible para los usuarios legítimos saturando los recursos del servidor o la red."
      },
      {
        id: 11, tema: "Redes – Codificación",
        enunciado: "AMI (Alternate Mark Inversion) codifica los unos con:",
        opciones: { A: "Nivel constante alto", B: "Alternancia entre +V y -V", C: "Retorno a cero siempre", D: "Solo nivel bajo" },
        correcta: "B",
        explicacion: "AMI codifica los bits 1 alternando entre voltaje positivo (+V) y negativo (-V) sucesivamente, mientras que los 0 se representan como 0V. Esto equilibra la señal y facilita la detección de errores."
      },
      {
        id: 12, tema: "Redes – IPv4",
        enunciado: "El campo TTL en un datagrama IPv4 sirve para:",
        opciones: { A: "Cifrar el paquete", B: "Evitar bucles infinitos de enrutamiento", C: "Autenticar el emisor", D: "Comprimir la cabecera" },
        correcta: "B",
        explicacion: "TTL (Time To Live): cada router decrementa este campo en 1. Cuando llega a 0, el paquete se descarta y se envía un ICMP Time Exceeded al origen, evitando que paquetes circulen infinitamente."
      },
      {
        id: 13, tema: "Seguridad – Ataques",
        enunciado: "El ransomware afecta principalmente a:",
        opciones: { A: "Disponibilidad de hardware", B: "Confidencialidad e integridad de datos", C: "Velocidad de red", D: "Configuración DNS" },
        correcta: "B",
        explicacion: "El ransomware cifra los archivos de la víctima (afecta a la confidencialidad e integridad). Los datos quedan ilegibles y exige un rescate para restaurarlos."
      },
      {
        id: 14, tema: "SOR – Active Directory",
        enunciado: "El archivo ntds.dit contiene:",
        opciones: { A: "La base de datos de Active Directory", B: "Configuración de red", C: "Los logs del firewall", D: "Las imágenes WDS" },
        correcta: "A",
        explicacion: "ntds.dit (NT Directory Services Directory Information Tree) es el archivo de base de datos principal de Active Directory. Contiene todos los objetos del dominio: usuarios, grupos, equipos, políticas, etc."
      },
      {
        id: 15, tema: "Redes – Protocolos",
        enunciado: "¿Qué protocolo de capa de aplicación resuelve nombres de dominio a IPs?",
        opciones: { A: "DHCP", B: "DNS", C: "ARP", D: "SMTP" },
        correcta: "B",
        explicacion: "DNS (Domain Name System) opera en la capa de aplicación y resuelve nombres de dominio legibles (www.ejemplo.com) a direcciones IP numéricas que los routers pueden enrutar."
      },
      {
        id: 16, tema: "Seguridad – Ingeniería Social",
        enunciado: "El baiting consiste en:",
        opciones: { A: "Saturar con peticiones", B: "Dejar un USB infectado para que la víctima lo conecte", C: "Inyectar SQL", D: "Escanear puertos" },
        correcta: "B",
        explicacion: "Baiting (cebo) es una técnica de ingeniería social que consiste en dejar un dispositivo (típicamente un USB) infectado en un lugar visible para que la víctima lo conecte, ejecutando el malware."
      },
      {
        id: 17, tema: "SOR – Grupos AD",
        enunciado: "¿Qué tipo de grupo de AD puede usarse en ACLs para asignar permisos a recursos?",
        opciones: { A: "Distribución", B: "Seguridad", C: "Universal solo", D: "Local solo" },
        correcta: "B",
        explicacion: "Solo los grupos de tipo Seguridad pueden añadirse a las ACL (Access Control Lists) para conceder o denegar permisos sobre recursos. Los grupos de Distribución sirven únicamente para correo."
      },
      {
        id: 18, tema: "Redes – Topologías",
        enunciado: "En una topología en bus, un fallo del cable principal produce:",
        opciones: { A: "Solo afecta al equipo más cercano", B: "La red completa deja de funcionar", C: "Solo afecta al nodo central", D: "No produce ningún efecto" },
        correcta: "B",
        explicacion: "En topología bus, todos los equipos comparten el mismo cable troncal. Si este cable se rompe o falla, la red completa queda inoperativa ya que no existe ruta alternativa."
      },
      {
        id: 19, tema: "SOR – PowerShell",
        enunciado: "El orden correcto para crear objetos en AD con PowerShell es:",
        opciones: { A: "Usuarios → Grupos → OU", B: "OU → Grupos → Usuarios", C: "Grupos → Usuarios → OU", D: "DC → OU → Todo" },
        correcta: "B",
        explicacion: "El orden correcto es OU primero (los contenedores deben existir antes), luego Grupos (que se ubicarán en las OUs) y finalmente Usuarios (que se añadirán a las OUs y grupos existentes)."
      },
      {
        id: 20, tema: "Seguridad – Herramientas",
        enunciado: "Nessus es principalmente un:",
        opciones: { A: "Antivirus", B: "Escáner de vulnerabilidades", C: "Firewall", D: "SIEM" },
        correcta: "B",
        explicacion: "Nessus es uno de los escáneres de vulnerabilidades más populares. Analiza sistemas y redes en busca de vulnerabilidades conocidas, configuraciones incorrectas y posibles brechas de seguridad."
      },
      {
        id: 21, tema: "SOR – WDS",
        enunciado: "WDS debe instalarse en una partición diferente al SO porque:",
        opciones: { A: "Solo funciona en NTFS", B: "Evita conflictos y garantiza funcionamiento correcto del servicio", C: "ReFS lo requiere", D: "El DC lo exige" },
        correcta: "B",
        explicacion: "Es un requisito crítico de WDS: instalarlo en una partición o unidad diferente a la del SO evita conflictos en el arranque PXE y garantiza que el servicio funcione correctamente."
      },
      {
        id: 22, tema: "Redes – Protocolos",
        enunciado: "ARP sirve para:",
        opciones: { A: "Asignar IP automáticamente", B: "Resolver una IP a su dirección MAC", C: "Enrutar entre redes", D: "Cifrar tráfico" },
        correcta: "B",
        explicacion: "ARP (Address Resolution Protocol) resuelve direcciones IP a direcciones MAC dentro de una red local. Envía un broadcast preguntando '¿Quién tiene la IP X?' y el propietario responde con su MAC."
      },
      {
        id: 23, tema: "Seguridad – Principios CIA",
        enunciado: "El no repudio en seguridad garantiza:",
        opciones: { A: "Que nadie pueda acceder", B: "Que nadie pueda negar haber realizado una acción", C: "Que los datos no se modifiquen", D: "Que el sistema esté disponible" },
        correcta: "B",
        explicacion: "El no repudio garantiza que un usuario no pueda negar haber realizado una acción (enviar un mensaje, firmar un documento). Se implementa con firmas digitales y registros de auditoría."
      },
      {
        id: 24, tema: "SOR – RAID",
        enunciado: "RAID0 (striping) ofrece:",
        opciones: { A: "Tolerancia a fallos", B: "Mayor rendimiento sin tolerancia a fallos", C: "Paridad distribuida", D: "Espejo completo" },
        correcta: "B",
        explicacion: "RAID0 distribuye los datos entre discos (striping) para máximo rendimiento en lectura/escritura, pero no ofrece ninguna tolerancia a fallos. Si falla un disco, se pierden todos los datos."
      },
      {
        id: 25, tema: "Redes – Modelo OSI",
        enunciado: "¿Qué capa OSI es responsable del establecimiento, gestión y cierre de sesiones?",
        opciones: { A: "Presentación", B: "Sesión", C: "Transporte", D: "Aplicación" },
        correcta: "B",
        explicacion: "La capa 5 (Sesión) gestiona el establecimiento, mantenimiento y terminación de sesiones de comunicación entre aplicaciones en diferentes equipos."
      },
      {
        id: 26, tema: "SOR – Active Directory",
        enunciado: "La carpeta SYSVOL en un DC contiene:",
        opciones: { A: "La base de datos ntds.dit", B: "GPO y scripts replicados entre DCs", C: "Las imágenes WDS", D: "Los logs de eventos" },
        correcta: "B",
        explicacion: "SYSVOL es una carpeta compartida y replicada entre todos los DCs del dominio. Contiene las políticas de grupo (GPO), scripts de inicio de sesión y otros archivos que deben estar disponibles en todo el dominio."
      },
      {
        id: 27, tema: "Seguridad – Ataques",
        enunciado: "SQL Injection es un ataque que:",
        opciones: { A: "Satura el servidor con peticiones", B: "Inyecta código SQL malicioso en campos de entrada", C: "Intercepta tráfico de red", D: "Cifra archivos del servidor" },
        correcta: "B",
        explicacion: "SQL Injection inserta sentencias SQL maliciosas en campos de entrada de una aplicación web para manipular la base de datos, pudiendo extraer datos, modificarlos o eliminarlos."
      },
      {
        id: 28, tema: "Redes – Codificación",
        enunciado: "4B/5B introduce una sobrecarga del 25% porque:",
        opciones: { A: "Añade 4 bits extra por cada byte", B: "Convierte cada 4 bits en 5 bits", C: "Duplica la señal", D: "Triplica las transiciones" },
        correcta: "B",
        explicacion: "4B/5B convierte cada grupo de 4 bits en un código de 5 bits, añadiendo 1 bit extra por cada 4 (25% de sobrecarga). Garantiza suficientes transiciones para sincronización evitando largas secuencias de ceros."
      },
      {
        id: 29, tema: "SOR – Nivel Funcional",
        enunciado: "Para elevar el nivel funcional del dominio, todos los DCs deben ejecutar:",
        opciones: { A: "La versión mínima requerida o superior", B: "La misma versión exacta", C: "Solo Windows Server 2008", D: "Solo versiones Core" },
        correcta: "A",
        explicacion: "Para elevar el nivel funcional, todos los DCs del dominio deben estar ejecutando una versión de Windows Server igual o superior al nivel funcional que se quiere establecer."
      },
      {
        id: 30, tema: "Seguridad – Control de Acceso",
        enunciado: "El principio de mínimo privilegio establece que:",
        opciones: { A: "Los administradores tienen acceso total siempre", B: "Los usuarios solo deben tener los permisos estrictamente necesarios", C: "Todos los usuarios tienen los mismos permisos", D: "El acceso se otorga por defecto" },
        correcta: "B",
        explicacion: "El principio de mínimo privilegio (least privilege) establece que cada usuario o proceso debe tener únicamente los permisos imprescindibles para realizar su función y nada más."
      },
      {
        id: 31, tema: "SOR – PowerShell",
        enunciado: "Para crear un usuario en AD con PowerShell se usa:",
        opciones: { A: "New-ADGroup", B: "New-ADOrganizationalUnit", C: "New-ADUser", D: "Get-ADUser" },
        correcta: "C",
        explicacion: "New-ADUser es el cmdlet para crear cuentas de usuario en Active Directory. Permite especificar todos los atributos del usuario como nombre, contraseña, OU de destino, etc."
      },
      {
        id: 32, tema: "Redes – Protocolos",
        enunciado: "SSH proporciona:",
        opciones: { A: "Transmisión sin cifrado", B: "Acceso remoto cifrado y seguro", C: "Solo transferencia de archivos", D: "Resolución DNS" },
        correcta: "B",
        explicacion: "SSH (Secure Shell) proporciona acceso remoto seguro mediante cifrado asimétrico y simétrico. Es el reemplazo seguro de Telnet, que transmitía todo en texto plano."
      },
      {
        id: 33, tema: "SOR – Administración Remota",
        enunciado: "Para conectarse por Escritorio Remoto desde otra red de forma segura, se recomienda:",
        opciones: { A: "Abrir el puerto 3389 directamente en Internet", B: "Usar una VPN primero", C: "Desactivar el firewall", D: "Usar HTTP" },
        correcta: "B",
        explicacion: "Exponer RDP directamente a Internet es un grave riesgo de seguridad. La práctica recomendada es usar una VPN para crear un túnel cifrado y luego conectarse por RDP dentro de ese túnel seguro."
      },
      {
        id: 34, tema: "Seguridad – Malware",
        enunciado: "Un gusano (worm) se diferencia de un virus en que:",
        opciones: { A: "Solo afecta a Windows", B: "Se replica automáticamente por la red sin necesitar un archivo huésped", C: "Necesita que el usuario lo ejecute manualmente", D: "Solo cifra archivos" },
        correcta: "B",
        explicacion: "Un gusano se autoreplica y propaga por la red de forma autónoma, sin necesitar un archivo huésped. Un virus necesita incrustarse en un programa legítimo para propagarse."
      },
      {
        id: 35, tema: "SOR – Active Directory",
        enunciado: "El Catálogo Global en AD sirve para:",
        opciones: { A: "Almacenar solo los DCs", B: "Facilitar búsquedas en todo el bosque", C: "Gestionar RAID", D: "Configurar DNS" },
        correcta: "B",
        explicacion: "El Catálogo Global contiene una copia parcial de todos los objetos del bosque AD. Facilita búsquedas entre dominios y es necesario para el inicio de sesión en entornos multidominios."
      },
      {
        id: 36, tema: "Redes – IPv4",
        enunciado: "El valor hexadecimal 0x45 al inicio de un datagrama IPv4 indica:",
        opciones: { A: "IPv6 con cabecera extendida", B: "IPv4 con cabecera estándar de 20 bytes (IHL=5)", C: "UDP en puerto 45", D: "TTL máximo" },
        correcta: "B",
        explicacion: "0x45: el nibble '4' indica IPv4 y el nibble '5' es el IHL (Internet Header Length) = 5 × 4 bytes = 20 bytes, que es el tamaño mínimo/estándar de la cabecera IPv4 sin opciones."
      },
      {
        id: 37, tema: "SOR – RAID",
        enunciado: "RAID1 (mirroring) proporciona:",
        opciones: { A: "Mayor velocidad sin redundancia", B: "Copia exacta en dos discos (tolerancia a fallo)", C: "Paridad distribuida en 3 discos", D: "Compresión de datos" },
        correcta: "B",
        explicacion: "RAID1 duplica exactamente los datos en dos discos simultáneamente. Si uno falla, el otro contiene una copia completa. Ofrece buena tolerancia a fallos pero usa el 50% del espacio total."
      },
      {
        id: 38, tema: "Seguridad – Ingeniería Social",
        enunciado: "El tailgating es:",
        opciones: { A: "Un ataque de red", B: "Acceder a zona restringida siguiendo a alguien autorizado", C: "Un tipo de phishing", D: "Un escaneo de puertos" },
        correcta: "B",
        explicacion: "Tailgating (piggybacking) es una técnica de ingeniería social de seguridad física: el atacante accede a una zona restringida aprovechando que alguien autorizado mantiene la puerta abierta."
      },
      {
        id: 39, tema: "SOR – Autenticación",
        enunciado: "Kerberos es el protocolo de autenticación principal en AD porque:",
        opciones: { A: "Solo usa contraseñas", B: "Usa tickets temporales evitando transmitir contraseñas por la red", C: "Funciona sin DC", D: "Solo funciona en redes WiFi" },
        correcta: "B",
        explicacion: "Kerberos autentica usando tickets temporales (TGT y tickets de servicio). Las contraseñas nunca viajan por la red; en su lugar se usa criptografía de clave compartida para verificar la identidad."
      },
      {
        id: 40, tema: "Redes – Modelo OSI",
        enunciado: "HTTP, FTP y SMTP son protocolos de la capa:",
        opciones: { A: "Transporte", B: "Red", C: "Aplicación", D: "Sesión" },
        correcta: "C",
        explicacion: "HTTP (web), FTP (transferencia de archivos) y SMTP (correo) son protocolos de la capa 7 (Aplicación) del modelo OSI. Son los protocolos con los que interactúan directamente las aplicaciones del usuario."
      }
    ]
  }
};

// ── Validación automática al cargar ──
(function validateTests() {
  const required = ['id', 'tema', 'enunciado', 'opciones', 'correcta', 'explicacion'];
  const valid = ['A', 'B', 'C', 'D'];
  Object.entries(TESTS_DATA).forEach(([key, test]) => {
    test.questions.forEach((q, i) => {
      required.forEach(f => {
        if (q[f] === undefined || q[f] === null)
          console.error(`[${key}] Q${i + 1} id=${q.id}: falta campo '${f}'`);
      });
      if (!valid.includes(q.correcta))
        console.error(`[${key}] Q${i + 1} id=${q.id}: 'correcta' inválida: '${q.correcta}'`);
      valid.forEach(l => {
        if (!q.opciones?.[l])
          console.error(`[${key}] Q${i + 1} id=${q.id}: falta opción '${l}'`);
      });
    });
    console.log(`✓ ${key} (${test.title}): ${test.questions.length} preguntas validadas`);
  });
})();
