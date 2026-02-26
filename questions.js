// questions.js - Banco de preguntas para los 3 tests

const TESTS_DATA = {
  test1: {
    title: "Test 1 - SOR Redes y Seguridad",
    subtitle: "Sistemas Operativos en Red",
    questions: [
      {
        id: 1, tema: "Sistemas de Archivos",
        enunciado: "¿Qué sistema de archivos utiliza por defecto Windows Server 2022 para gestionar el almacenamiento?",
        opciones: { A: "NTFS", B: "ext4", C: "APFS", D: "HFS+" },
        correcta: "A",
        explicacion: "Windows Server 2022 usa NTFS (New Technology File System) por defecto. Es el sistema de archivos estándar de Windows que soporta permisos, cifrado EFS, cuotas y journaling."
      },
      {
        id: 2, tema: "Sistemas de Archivos",
        enunciado: "¿Qué sistema de archivos (introducido en Windows Server 2012) está orientado a mayor integridad y disponibilidad de datos?",
        opciones: { A: "ReFS", B: "FAT32", C: "exFAT", D: "UFS" },
        correcta: "A",
        explicacion: "ReFS (Resilient File System) fue introducido en Windows Server 2012 con foco en integridad de datos, detección de corrupción y alta disponibilidad, especialmente para grandes volúmenes."
      },
      {
        id: 3, tema: "Administración de Discos",
        enunciado: "Tras convertir un disco básico a dinámico en Windows Server, ¿qué afirmación es correcta?",
        opciones: {
          A: "No se puede instalar un sistema operativo en un volumen de disco dinámico",
          B: "Se desactiva el cifrado BitLocker automáticamente",
          C: "El disco dinámico solo admite particiones FAT32",
          D: "El disco deja de poder usarse para datos"
        },
        correcta: "A",
        explicacion: "Los discos dinámicos no permiten instalar un SO en sus volúmenes. Se usan para datos y permiten crear volúmenes especiales como RAID, pero el arranque requiere particiones en disco básico."
      },
      {
        id: 4, tema: "Administración de Discos",
        enunciado: "En Administración de discos de Windows Server, ¿qué tipo de volumen corresponde a RAID 1?",
        opciones: {
          A: "Volumen reflejado (espejo)",
          B: "Volumen seccionado (striped)",
          C: "Volumen distribuido (spanned)",
          D: "Volumen simple"
        },
        correcta: "A",
        explicacion: "RAID 1 es el volumen reflejado (espejo): los datos se duplican en dos discos simultáneamente, ofreciendo redundancia. Si uno falla, el otro contiene una copia exacta."
      },
      {
        id: 5, tema: "Administración Remota",
        enunciado: "Para administrar un servidor remotamente desde otro equipo, ¿qué opción se activa según el material?",
        opciones: {
          A: "Escritorio remoto (Remote Desktop)",
          B: "Compartir impresoras",
          C: "Servidor DHCP",
          D: "Modo seguro"
        },
        correcta: "A",
        explicacion: "El Escritorio Remoto (RDP, puerto 3389) permite conectarse gráficamente a un servidor desde otro equipo. Es la herramienta principal de administración remota en entornos Windows Server."
      },
      {
        id: 6, tema: "Administración Remota",
        enunciado: "Para poder hacer ping al servidor (ICMP) como comprobación, ¿qué regla de entrada se suele habilitar?",
        opciones: {
          A: "Petición eco ICMPv4 (entrada)",
          B: "TCP 3389 (salida)",
          C: "UDP 53 (entrada)",
          D: "ARP (entrada)"
        },
        correcta: "A",
        explicacion: "Para que el servidor responda a ping, hay que habilitar en el Firewall de Windows la regla de entrada 'Petición eco ICMPv4'. Por defecto está bloqueada en servidores Windows."
      },
      {
        id: 7, tema: "Active Directory",
        enunciado: "En Active Directory, ¿cómo se llama el archivo principal de la base de datos del directorio?",
        opciones: { A: "ntds.dit", B: "boot.ini", C: "sysvol.db", D: "hosts" },
        correcta: "A",
        explicacion: "ntds.dit (NT Directory Services Directory Information Tree) es la base de datos principal de Active Directory. Contiene todos los objetos del dominio: usuarios, grupos, equipos, etc."
      },
      {
        id: 8, tema: "Active Directory",
        enunciado: "¿Qué carpeta compartida aparece replicada en cualquier controlador de dominio y suele contener GPO y scripts?",
        opciones: { A: "SYSVOL", B: "ProgramData", C: "System32", D: "Temp" },
        correcta: "A",
        explicacion: "SYSVOL es una carpeta compartida replicada en todos los DC del dominio. Contiene políticas de grupo (GPO), scripts de inicio de sesión y otros archivos que deben estar disponibles en todo el dominio."
      },
      {
        id: 9, tema: "Active Directory",
        enunciado: "En un DN de LDAP/Active Directory, ¿qué significa el atributo DC?",
        opciones: {
          A: "Domain Component",
          B: "Device Certificate",
          C: "Directory Container",
          D: "Domain Controller"
        },
        correcta: "A",
        explicacion: "DC en un Distinguished Name LDAP significa Domain Component (componente de dominio). Por ejemplo, DC=empresa,DC=com representa el dominio empresa.com en formato LDAP."
      },
      {
        id: 10, tema: "Administración Remota",
        enunciado: "¿Qué herramienta permite administrar roles y características de Windows Server desde un PC Windows 10?",
        opciones: {
          A: "RSAT (Remote Server Administration Tools)",
          B: "WEP",
          C: "SNMP Trap",
          D: "CHKDSK"
        },
        correcta: "A",
        explicacion: "RSAT (Remote Server Administration Tools) es un conjunto de herramientas de Microsoft que permite administrar Windows Server remotamente desde equipos cliente Windows 10/11."
      },
      {
        id: 11, tema: "Active Directory",
        enunciado: "En Active Directory, ¿qué tipo de grupo es el que se usa para asignar permisos y utilizar en ACL?",
        opciones: { A: "Seguridad", B: "Distribución", C: "Invitados", D: "Difusión" },
        correcta: "A",
        explicacion: "Los grupos de Seguridad en AD se usan para asignar permisos a recursos y en listas de control de acceso (ACL). Los grupos de Distribución solo se usan para correo electrónico."
      },
      {
        id: 12, tema: "Active Directory",
        enunciado: "En Active Directory, según el material, ¿qué ámbito de grupo se suele usar por defecto?",
        opciones: {
          A: "Global",
          B: "Local del equipo",
          C: "Local de dominio (siempre)",
          D: "Universal (siempre)"
        },
        correcta: "A",
        explicacion: "El ámbito Global es el más común. Los grupos globales pueden contener usuarios del mismo dominio y se usan para organizar usuarios con características similares."
      },
      {
        id: 13, tema: "Sistemas Operativos",
        enunciado: "¿Qué componente del sistema operativo controla el hardware y coordina la ejecución de procesos?",
        opciones: { A: "Kernel", B: "BIOS", C: "Bootloader", D: "Firmware UEFI" },
        correcta: "A",
        explicacion: "El Kernel es el núcleo del SO que gestiona directamente el hardware, la memoria, los procesos y las llamadas al sistema. Es la capa más privilegiada del software."
      },
      {
        id: 14, tema: "Seguridad Web",
        enunciado: "En seguridad web, ¿qué ataque consiste en inyectar código que se ejecuta en el navegador de la víctima?",
        opciones: {
          A: "Cross-Site Scripting (XSS)",
          B: "SQL Injection",
          C: "DDoS",
          D: "Spoofing"
        },
        correcta: "A",
        explicacion: "XSS (Cross-Site Scripting) inyecta scripts maliciosos en páginas web que se ejecutan en el navegador de otros usuarios, pudiendo robar cookies, sesiones o redirigir usuarios."
      },
      {
        id: 15, tema: "Auditoría de Seguridad",
        enunciado: "¿Cuál describe mejor una auditoría externa de seguridad?",
        opciones: {
          A: "La realiza una entidad independiente para evaluar seguridad/cumplimiento",
          B: "La realiza únicamente el administrador del sistema",
          C: "Se centra solo en copias de seguridad",
          D: "Solo revisa el hardware"
        },
        correcta: "A",
        explicacion: "Una auditoría externa la realiza una entidad independiente (terceros) para evaluar la seguridad de manera objetiva e imparcial, revisando controles, cumplimiento normativo y posibles vulnerabilidades."
      },
      {
        id: 16, tema: "Herramientas de Seguridad",
        enunciado: "¿Qué herramienta se menciona como scanner de vulnerabilidades para pruebas de vulnerabilidad?",
        opciones: { A: "Nessus", B: "Wireshark", C: "GIMP", D: "Notepad++" },
        correcta: "A",
        explicacion: "Nessus es uno de los scanners de vulnerabilidades más conocidos. Analiza sistemas en busca de vulnerabilidades conocidas, configuraciones incorrectas y posibles brechas de seguridad."
      },
      {
        id: 17, tema: "SIEM",
        enunciado: "¿Qué es un SIEM?",
        opciones: {
          A: "Sistema que recopila/correlaciona eventos y logs para detectar amenazas",
          B: "Protocolo de cifrado para Wi-Fi",
          C: "Tipo de malware que cifra archivos",
          D: "Sistema de archivos de Linux"
        },
        correcta: "A",
        explicacion: "SIEM (Security Information and Event Management) es una plataforma que centraliza la recopilación de logs, correlaciona eventos y genera alertas para detectar amenazas y responder a incidentes."
      },
      {
        id: 18, tema: "SIEM",
        enunciado: "¿Cuál de las siguientes es una herramienta SIEM mencionada en el temario?",
        opciones: { A: "Splunk", B: "PuTTY", C: "WinRAR", D: "VLC" },
        correcta: "A",
        explicacion: "Splunk es una plataforma SIEM ampliamente usada para recopilar, indexar y analizar datos de máquinas y logs en tiempo real para seguridad y operaciones de TI."
      },
      {
        id: 19, tema: "Modelo OSI",
        enunciado: "Según el modelo OSI, ¿cuántas capas existen?",
        opciones: { A: "7", B: "4", C: "5", D: "9" },
        correcta: "A",
        explicacion: "El modelo OSI (Open Systems Interconnection) tiene 7 capas: Física, Enlace, Red, Transporte, Sesión, Presentación y Aplicación. Es el marco de referencia para las comunicaciones en red."
      },
      {
        id: 20, tema: "Protocolos de Red",
        enunciado: "¿Qué pila/protocolo es la base práctica usada en Internet?",
        opciones: { A: "TCP/IP", B: "OSI", C: "NetBIOS", D: "IPX/SPX" },
        correcta: "A",
        explicacion: "TCP/IP (Transmission Control Protocol/Internet Protocol) es la suite de protocolos sobre la que se basa Internet. A diferencia de OSI (que es un modelo teórico), TCP/IP es la implementación real."
      },
      {
        id: 21, tema: "Virtualización",
        enunciado: "En Windows 10 Pro/Education/Enterprise, ¿qué cmdlet habilita Hyper-V según el material?",
        opciones: {
          A: "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All",
          B: "Install-Package HyperV",
          C: "Start-Service hyperv",
          D: "Enable-HyperV -Force"
        },
        correcta: "A",
        explicacion: "Para habilitar Hyper-V en Windows 10 se usa el cmdlet Enable-WindowsOptionalFeature con los parámetros -Online -FeatureName Microsoft-Hyper-V -All desde PowerShell con privilegios de administrador."
      },
      {
        id: 22, tema: "Codificación de Señales",
        enunciado: "¿En cuál de las siguientes tecnologías es típico el uso de la codificación Manchester?",
        opciones: {
          A: "Ethernet (IEEE 802.3)",
          B: "Wi-Fi (IEEE 802.11)",
          C: "USB",
          D: "Bluetooth"
        },
        correcta: "A",
        explicacion: "La codificación Manchester se usa en Ethernet (IEEE 802.3) de 10 Mbps. Cada bit tiene una transición en el centro: 1 = bajo→alto, 0 = alto→bajo. Facilita la sincronización de reloj."
      },
      {
        id: 23, tema: "Protocolos de Red",
        enunciado: "En ARP, ¿a qué dirección MAC se envía normalmente una petición ARP (ARP Request)?",
        opciones: {
          A: "FF:FF:FF:FF:FF:FF",
          B: "00:00:00:00:00:00",
          C: "01:00:5E:00:00:FB",
          D: "AA:BB:CC:DD:EE:FF"
        },
        correcta: "A",
        explicacion: "Las peticiones ARP se envían a la dirección MAC de broadcast FF:FF:FF:FF:FF:FF para preguntar a todos los equipos de la red local qué MAC corresponde a una IP determinada."
      },
      {
        id: 24, tema: "Seguridad",
        enunciado: "¿Qué protocolo proporciona un canal seguro sobre una red insegura usando criptografía asimétrica?",
        opciones: { A: "SSH", B: "HTTP", C: "FTP", D: "Telnet" },
        correcta: "A",
        explicacion: "SSH (Secure Shell) usa criptografía asimétrica para autenticar y establecer un canal cifrado seguro. Reemplaza a Telnet y FTP para administración remota segura."
      },
      {
        id: 25, tema: "Seguridad - Principios",
        enunciado: "En el temario de seguridad, la confidencialidad se refiere a que la información…",
        opciones: {
          A: "no es accesible/entendible por personas no autorizadas",
          B: "no puede modificarse",
          C: "siempre está disponible",
          D: "no puede ser copiada nunca"
        },
        correcta: "A",
        explicacion: "La confidencialidad es uno de los pilares de la triada CIA de seguridad. Garantiza que la información solo sea accesible para personas autorizadas. Se logra mediante cifrado, control de acceso, etc."
      },
      {
        id: 26, tema: "Seguridad - Principios",
        enunciado: "¿Qué propiedad de seguridad busca impedir que alguien niegue la autoría o envío de un mensaje?",
        opciones: { A: "No repudio", B: "Disponibilidad", C: "Compresión", D: "Trazabilidad" },
        correcta: "A",
        explicacion: "El No repudio (non-repudiation) garantiza que un actor no pueda negar haber realizado una acción, como enviar un mensaje. Se logra con firmas digitales y registros de auditoría."
      },
      {
        id: 27, tema: "Tipos de Ataques",
        enunciado: "¿Qué significa DDoS?",
        opciones: {
          A: "Denegación de servicio distribuida",
          B: "Detección de dispositivos en red",
          C: "Descarga de datos desde origen",
          D: "Desencriptado de discos"
        },
        correcta: "A",
        explicacion: "DDoS (Distributed Denial of Service) es un ataque que usa múltiples equipos (botnet) para inundar un servicio con peticiones, saturarlo y hacerlo inaccesible para usuarios legítimos."
      },
      {
        id: 28, tema: "Tipos de Ataques",
        enunciado: "¿En qué consiste el ransomware?",
        opciones: {
          A: "Secuestra/cifra información o cuentas y exige un rescate",
          B: "Duplica la velocidad de la red",
          C: "Actualiza el sistema operativo",
          D: "Bloquea anuncios en el navegador"
        },
        correcta: "A",
        explicacion: "El ransomware cifra los archivos de la víctima y exige un pago (rescate) para proporcionar la clave de descifrado. Es uno de los ataques más dañinos económicamente en la actualidad."
      },
      {
        id: 29, tema: "Ingeniería Social",
        enunciado: "¿Qué es el phishing?",
        opciones: {
          A: "Estafa para obtener credenciales usando webs/correos falsos",
          B: "Ataque físico a un CPD",
          C: "Virus que solo afecta a móviles",
          D: "Algoritmo de cifrado"
        },
        correcta: "A",
        explicacion: "El phishing usa correos, mensajes o sitios web falsos que imitan entidades legítimas para engañar a usuarios y robar credenciales, datos bancarios u otra información sensible."
      },
      {
        id: 30, tema: "Ingeniería Social",
        enunciado: "¿Qué técnica de ingeniería social consiste en dejar un USB 'atractivo' para que la víctima lo conecte?",
        opciones: { A: "Baiting", B: "Hardening", C: "Whitelisting", D: "Hashing" },
        correcta: "A",
        explicacion: "Baiting (cebo) consiste en dejar dispositivos como USB infectados en lugares donde la víctima los encuentre y conecte, ejecutando automáticamente malware al insertarlo."
      },
      {
        id: 31, tema: "Ingeniería Social",
        enunciado: "Un deepfake vishing es…",
        opciones: {
          A: "una suplantación (por voz) usando IA para engañar en llamadas",
          B: "un ataque DDoS desde bots",
          C: "un firewall mal configurado",
          D: "una copia segura de archivos"
        },
        correcta: "A",
        explicacion: "Deepfake vishing combina deepfake (síntesis de voz/audio con IA) y vishing (phishing por voz). Se usan voces falsificadas con IA para suplantar personas de confianza en llamadas telefónicas."
      },
      {
        id: 32, tema: "Codificación de Señales",
        enunciado: "En NRZ-I, ¿cómo se representa un bit 1?",
        opciones: {
          A: "Con un cambio de nivel (transición)",
          B: "Sin cambios de nivel",
          C: "Con retorno a cero a mitad de bit",
          D: "Con dos transiciones por bit"
        },
        correcta: "A",
        explicacion: "NRZ-I (Non-Return to Zero Inverted): el bit 1 provoca una transición (cambio de nivel) y el bit 0 no provoca cambio. Es diferencial, lo que ayuda a detectar inversiones de polaridad."
      },
      {
        id: 33, tema: "Codificación de Señales",
        enunciado: "¿Por qué la codificación RZ suele requerir más ancho de banda que NRZ?",
        opciones: {
          A: "Porque introduce transiciones adicionales al volver a cero",
          B: "Porque elimina todas las transiciones",
          C: "Porque usa menos niveles de voltaje",
          D: "Porque solo funciona con fibra óptica"
        },
        correcta: "A",
        explicacion: "RZ (Return to Zero) vuelve a nivel cero a mitad de cada bit. Esto introduce una transición extra por bit respecto a NRZ, requiriendo aproximadamente el doble de ancho de banda."
      },
      {
        id: 34, tema: "Codificación de Señales",
        enunciado: "Según el PDF de codificaciones, en Manchester el bit 0 se representa con transición…",
        opciones: {
          A: "de alto a bajo",
          B: "de bajo a alto",
          C: "sin transición",
          D: "solo con cambio al inicio del bit"
        },
        correcta: "A",
        explicacion: "En la codificación Manchester estándar (IEEE 802.3): el bit 0 se representa con una transición de alto a bajo en el centro del bit, y el bit 1 con una transición de bajo a alto."
      },
      {
        id: 35, tema: "Codificación de Señales",
        enunciado: "En Diferencial Manchester, el bit 0 se indica por…",
        opciones: {
          A: "una transición al inicio del bit",
          B: "ausencia de transición en el centro",
          C: "un nivel fijo todo el bit",
          D: "una transición solo al final del bit"
        },
        correcta: "A",
        explicacion: "En Manchester Diferencial: el bit 0 se indica por una transición al comienzo del intervalo de bit. El bit 1 no tiene transición al inicio. Siempre hay una transición en el centro para sincronización."
      },
      {
        id: 36, tema: "Codificación de Señales",
        enunciado: "En AMI, los bits 1 se codifican…",
        opciones: {
          A: "alternando +V y -V; los 0 van a 0V",
          B: "siempre a +V",
          C: "siempre a -V",
          D: "con retorno a cero"
        },
        correcta: "A",
        explicacion: "AMI (Alternate Mark Inversion): los bits 1 alternan entre +V y -V sucesivamente, mientras que los bits 0 se representan como 0V. Esto equilibra la señal y facilita detección de errores."
      },
      {
        id: 37, tema: "Codificación de Señales",
        enunciado: "En 4B/5B, ¿qué sobrecarga aproximada introduce frente a los datos originales?",
        opciones: {
          A: "25% más de bits",
          B: "10% menos de bits",
          C: "50% menos de bits",
          D: "No introduce sobrecarga"
        },
        correcta: "A",
        explicacion: "4B/5B convierte cada 4 bits en 5 bits (añade 1 bit extra por cada 4), introduciendo una sobrecarga del 25%. Garantiza suficientes transiciones para sincronización sin largas secuencias de ceros."
      },
      {
        id: 38, tema: "Datagramas IPv4",
        enunciado: "En un datagrama IPv4, el valor inicial 45 indica…",
        opciones: {
          A: "IPv4 e IHL=5 (cabecera de 20 bytes)",
          B: "IPv6 y cabecera de 40 bytes",
          C: "UDP y puerto 45",
          D: "TCP y puerto 45"
        },
        correcta: "A",
        explicacion: "El byte 0x45 en la cabecera IP: el nibble alto '4' indica IPv4, y el nibble bajo '5' es el IHL (Internet Header Length) en unidades de 32 bits = 5×4 = 20 bytes de cabecera estándar."
      },
      {
        id: 39, tema: "Datagramas IPv4",
        enunciado: "En el ejemplo de datagrama, TTL = 0x80 equivale a…",
        opciones: { A: "128", B: "64", C: "80", D: "255" },
        correcta: "A",
        explicacion: "0x80 en hexadecimal = 128 en decimal. El TTL (Time To Live) limita la vida de un paquete; cada router lo decrementa en 1 y descarta el paquete cuando llega a 0, evitando bucles infinitos."
      },
      {
        id: 40, tema: "TCP",
        enunciado: "En TCP, el flag SYN suele indicar…",
        opciones: {
          A: "inicio del establecimiento de conexión",
          B: "cierre inmediato de la conexión",
          C: "paquete retransmitido",
          D: "paquete con datos cifrados"
        },
        correcta: "A",
        explicacion: "El flag SYN (Synchronize) inicia el handshake de 3 pasos de TCP. El cliente envía SYN, el servidor responde SYN-ACK, y el cliente confirma con ACK. Establece números de secuencia iniciales."
      }
    ]
  },

  test2: {
    title: "Test 2 - SOR Redes y Seguridad",
    subtitle: "Sistemas Operativos en Red",
    questions: [
      {
        id: 1, tema: "Administración de Discos",
        enunciado: "En Administración de discos de Windows Server, ¿qué tipo de volumen equivale a RAID 0?",
        opciones: {
          A: "Volumen seccionado (striped)",
          B: "Volumen reflejado (espejo)",
          C: "Volumen RAID-5",
          D: "Volumen simple"
        },
        correcta: "A",
        explicacion: "RAID 0 es el volumen seccionado (striped): los datos se distribuyen en franjas entre múltiples discos para mayor rendimiento. No ofrece redundancia; si un disco falla, se pierden todos los datos."
      },
      {
        id: 2, tema: "Sistemas de Archivos",
        enunciado: "Según el material, ¿para qué tipo de uso se recomienda especialmente ReFS?",
        opciones: {
          A: "Almacenamiento con grandes volúmenes de datos y baja frecuencia de acceso",
          B: "Servidores con millones de accesos concurrentes a archivos",
          C: "Sistemas embebidos con FAT16",
          D: "Equipos sin necesidad de integridad de datos"
        },
        correcta: "A",
        explicacion: "ReFS está especialmente recomendado para almacenamiento de grandes volúmenes (archivos, backups, virtualización) donde la integridad de datos y la resiliencia son críticas pero el acceso no es masivo concurrente."
      },
      {
        id: 3, tema: "Active Directory",
        enunciado: "Al instalar el rol de Active Directory Domain Services (AD DS), ¿qué servicio suele ser necesario y puede instalarse como requisito?",
        opciones: { A: "DNS", B: "FTP", C: "SNMP", D: "NTP" },
        correcta: "A",
        explicacion: "AD DS requiere DNS para funcionar ya que usa DNS para localizar controladores de dominio, servicios y recursos. Al instalar AD DS, el asistente ofrece instalar DNS si no está ya presente."
      },
      {
        id: 4, tema: "Active Directory",
        enunciado: "Después de añadir el rol AD DS en un servidor, el siguiente paso para crear un dominio es…",
        opciones: {
          A: "Promover el servidor a Controlador de Dominio (Domain Controller)",
          B: "Cambiar el sistema de archivos a ext4",
          C: "Desactivar el firewall",
          D: "Eliminar el servicio DNS"
        },
        correcta: "A",
        explicacion: "Añadir el rol AD DS solo instala los binarios. El paso siguiente es promover el servidor a DC mediante el asistente de 'Promover este servidor a controlador de dominio', que crea o une el dominio."
      },
      {
        id: 5, tema: "Active Directory",
        enunciado: "¿Qué significa RODC en Active Directory?",
        opciones: {
          A: "Read-Only Domain Controller (controlador de dominio de solo lectura)",
          B: "Remote Office Data Center",
          C: "Routing Optimized Domain Cache",
          D: "Role of Domain Clients"
        },
        correcta: "A",
        explicacion: "RODC (Read-Only Domain Controller) es un DC que tiene una copia de solo lectura de la base de datos AD. Se usa en sucursales donde la seguridad física no está garantizada."
      },
      {
        id: 6, tema: "Active Directory",
        enunciado: "¿Para qué se utiliza el Catálogo Global (Global Catalog) en un bosque de Active Directory?",
        opciones: {
          A: "Facilita búsquedas y contiene información de objetos del bosque",
          B: "Sustituye al servidor DHCP",
          C: "Cifra todo el tráfico de red",
          D: "Reemplaza la base de datos ntds.dit"
        },
        correcta: "A",
        explicacion: "El Catálogo Global contiene una copia parcial de todos los objetos del bosque AD. Facilita búsquedas entre dominios y es necesario para el inicio de sesión en entornos multidominios."
      },
      {
        id: 7, tema: "Active Directory",
        enunciado: "Un bosque (forest) de Active Directory se define como…",
        opciones: {
          A: "un grupo de árboles que no comparten un espacio de nombres continuo",
          B: "un único equipo cliente unido al dominio",
          C: "un switch con VLANs",
          D: "una red PAN personal"
        },
        correcta: "A",
        explicacion: "Un bosque AD es la unidad más alta de organización: agrupa múltiples árboles de dominios con espacios de nombres distintos que comparten el esquema y el Catálogo Global."
      },
      {
        id: 8, tema: "Active Directory",
        enunciado: "¿Cuáles son dos tipos básicos de relaciones de confianza (trust) entre dominios?",
        opciones: {
          A: "Unidireccionales y bidireccionales",
          B: "Locales y remotas",
          C: "IPv4 e IPv6",
          D: "Analógicas y digitales"
        },
        correcta: "A",
        explicacion: "Las relaciones de confianza permiten que usuarios de un dominio accedan a recursos de otro. Pueden ser unidireccionales (A confía en B) o bidireccionales (A y B se confían mutuamente)."
      },
      {
        id: 9, tema: "Active Directory",
        enunciado: "En LDAP/AD, ¿qué significa el atributo CN?",
        opciones: {
          A: "Common Name",
          B: "Client Node",
          C: "Core Network",
          D: "Credential Number"
        },
        correcta: "A",
        explicacion: "CN (Common Name) es el nombre común del objeto en LDAP/AD. Por ejemplo, CN=Juan García,OU=Ventas,DC=empresa,DC=com identifica al usuario 'Juan García' dentro de la OU Ventas."
      },
      {
        id: 10, tema: "Active Directory",
        enunciado: "En el comando `dsadd user`, ¿qué parámetro controla la obligación de cambiar la contraseña en el primer inicio de sesión?",
        opciones: { A: "-canchpwd", B: "-ttl", C: "-dhcp", D: "-raid" },
        correcta: "A",
        explicacion: "El parámetro -canchpwd (can change password) en dsadd user controla si el usuario puede/debe cambiar la contraseña. Combinado con -mustchpwd se obliga el cambio en el primer inicio."
      },
      {
        id: 11, tema: "Administración Remota",
        enunciado: "Si quieres conectarte por Escritorio Remoto a un servidor desde otra red, el material sugiere como alternativa segura…",
        opciones: {
          A: "Montar una VPN",
          B: "Desactivar el firewall del router",
          C: "Usar HTTP sin cifrar",
          D: "Compartir la contraseña por correo"
        },
        correcta: "A",
        explicacion: "La VPN (Red Privada Virtual) crea un túnel cifrado que permite conectarse de forma segura a la red corporativa desde Internet, después de lo cual se puede usar RDP con seguridad."
      },
      {
        id: 12, tema: "Modelo OSI",
        enunciado: "En el modelo OSI, la PDU de la capa de Enlace de Datos es…",
        opciones: { A: "Trama (Frame)", B: "Segmento", C: "Paquete", D: "Bit" },
        correcta: "A",
        explicacion: "Cada capa OSI tiene su PDU: Física=Bit, Enlace=Trama(Frame), Red=Paquete, Transporte=Segmento, Sesión/Presentación/Aplicación=Mensaje o Dato."
      },
      {
        id: 13, tema: "Modelo OSI",
        enunciado: "En el modelo OSI, la PDU de la capa Física es…",
        opciones: { A: "Bit", B: "Datagrama", C: "Trama", D: "Mensaje" },
        correcta: "A",
        explicacion: "La capa Física trabaja con bits individuales: se encarga de la transmisión de señales eléctricas, ópticas o de radio. Su PDU (Protocol Data Unit) es el bit."
      },
      {
        id: 14, tema: "Tipos de Redes",
        enunciado: "En la clasificación por alcance geográfico, ¿qué significa BAN?",
        opciones: {
          A: "Body Area Network (red alrededor/dentro del cuerpo)",
          B: "Broadcast Area Network",
          C: "Backbone Access Network",
          D: "Basic Area Network"
        },
        correcta: "A",
        explicacion: "BAN (Body Area Network) es una red de muy corto alcance que conecta dispositivos en el cuerpo humano o muy cerca de él, como sensores médicos, wearables o implantes."
      },
      {
        id: 15, tema: "Acceso al Medio",
        enunciado: "¿Qué método de acceso al medio se asocia al estándar IEEE 802.3 (Ethernet) en el material?",
        opciones: { A: "CSMA/CD", B: "Token Ring", C: "CSMA/CA", D: "FDMA" },
        correcta: "A",
        explicacion: "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) es el método de acceso al medio de Ethernet. Detecta colisiones y retransmite. CSMA/CA se usa en Wi-Fi para evitar colisiones."
      },
      {
        id: 16, tema: "Acceso al Medio",
        enunciado: "¿Qué técnica de acceso múltiple divide el canal en ranuras de tiempo?",
        opciones: { A: "TDMA", B: "FDMA", C: "CDMA", D: "DSSS" },
        correcta: "A",
        explicacion: "TDMA (Time Division Multiple Access) divide el canal en ranuras de tiempo: cada usuario transmite en su ranura asignada. Se usa en GSM y otros sistemas de comunicación."
      },
      {
        id: 17, tema: "Teoría de Transmisión",
        enunciado: "¿Qué expresión corresponde al teorema de Shannon-Hartley para la capacidad de un canal?",
        opciones: {
          A: "C = B log2(1+S/N)",
          B: "C = 2B log2(M)",
          C: "A(dB)=10 log10(PotR/PotT)",
          D: "C = S·N"
        },
        correcta: "A",
        explicacion: "Shannon-Hartley: C = B × log2(1 + S/N). C es la capacidad máxima del canal (bps), B es el ancho de banda (Hz) y S/N es la relación señal/ruido. Determina el límite teórico de transmisión."
      },
      {
        id: 18, tema: "Sistemas Operativos",
        enunciado: "La shell en un sistema operativo se define mejor como…",
        opciones: {
          A: "la interfaz entre el usuario y el kernel para ejecutar comandos",
          B: "el componente físico de la placa base",
          C: "un tipo de malware",
          D: "un algoritmo de compresión"
        },
        correcta: "A",
        explicacion: "La shell es el intérprete de comandos que actúa como interfaz entre el usuario y el kernel. Puede ser CLI (bash, cmd, PowerShell) o GUI. Permite ejecutar programas y administrar el sistema."
      },
      {
        id: 19, tema: "TCP/UDP",
        enunciado: "¿Qué característica describe mejor a TCP?",
        opciones: {
          A: "Orientado a conexión (connection-oriented)",
          B: "Sin conexión y sin control de errores",
          C: "Solo funciona en la capa física",
          D: "No usa puertos"
        },
        correcta: "A",
        explicacion: "TCP es orientado a conexión: establece una conexión (3-way handshake), garantiza entrega ordenada con control de errores y flujo. UDP es el protocolo sin conexión para cuando la velocidad prima."
      },
      {
        id: 20, tema: "TCP/UDP",
        enunciado: "¿Cuál es el orden correcto del establecimiento de conexión TCP (3-way handshake)?",
        opciones: {
          A: "SYN → SYN-ACK → ACK",
          B: "ACK → SYN → FIN",
          C: "FIN → FIN-ACK → ACK",
          D: "SYN → ACK → SYN-ACK"
        },
        correcta: "A",
        explicacion: "El 3-way handshake TCP: (1) Cliente envía SYN, (2) Servidor responde SYN-ACK confirmando e iniciando su propia conexión, (3) Cliente confirma con ACK. La conexión queda establecida."
      },
      {
        id: 21, tema: "Linux - Redes",
        enunciado: "En Linux, ¿qué comando evita que NetworkManager se inicie automáticamente al arrancar?",
        opciones: {
          A: "systemctl disable network-manager",
          B: "systemctl start ssh",
          C: "nmcli con add",
          D: "ifconfig -a"
        },
        correcta: "A",
        explicacion: "systemctl disable [servicio] deshabilita el inicio automático de un servicio en el arranque. Para evitar que NetworkManager arranque: systemctl disable NetworkManager (o network-manager en Debian/Ubuntu)."
      },
      {
        id: 22, tema: "Seguridad Ofensiva",
        enunciado: "La seguridad ofensiva se caracteriza por…",
        opciones: {
          A: "simular ataques para identificar y corregir vulnerabilidades antes de que se exploten",
          B: "bloquear todo el tráfico entrante siempre",
          C: "hacer copias de seguridad automáticas",
          D: "encriptar discos sin auditoría"
        },
        correcta: "A",
        explicacion: "La seguridad ofensiva (ethical hacking, pentesting) simula ataques reales para descubrir vulnerabilidades antes que los atacantes. Complementa a la seguridad defensiva."
      },
      {
        id: 23, tema: "Modulación",
        enunciado: "En ASK (Amplitude Shift Keying), la información se codifica mediante cambios en…",
        opciones: { A: "la amplitud", B: "la frecuencia", C: "la fase", D: "el número de routers" },
        correcta: "A",
        explicacion: "ASK (Modulación por Desplazamiento de Amplitud): la información se representa variando la amplitud de la portadora. Por ejemplo, amplitud alta = 1, amplitud baja o nula = 0."
      },
      {
        id: 24, tema: "Modulación",
        enunciado: "En FSK (Frequency Shift Keying), la información se codifica mediante cambios en…",
        opciones: {
          A: "la frecuencia",
          B: "la amplitud",
          C: "la polaridad del cable",
          D: "el ancho de banda fijo"
        },
        correcta: "A",
        explicacion: "FSK (Modulación por Desplazamiento de Frecuencia): los datos se representan usando diferentes frecuencias de la portadora. Frecuencia f1 = bit 0, frecuencia f2 = bit 1 (o viceversa)."
      },
      {
        id: 25, tema: "Modulación",
        enunciado: "En PSK (Phase Shift Keying), la información se codifica mediante cambios en…",
        opciones: { A: "la fase", B: "la amplitud", C: "la frecuencia", D: "la ruta de red" },
        correcta: "A",
        explicacion: "PSK (Modulación por Desplazamiento de Fase): la información se representa modificando la fase de la portadora. BPSK usa 2 fases (0°/180°), QPSK usa 4 (0°/90°/180°/270°)."
      },
      {
        id: 26, tema: "Modulación",
        enunciado: "PAM-4 significa que se utilizan…",
        opciones: { A: "4 niveles de amplitud", B: "4 frecuencias", C: "4 fases", D: "4 cables de red" },
        correcta: "A",
        explicacion: "PAM-4 (Pulse Amplitude Modulation 4-level) usa 4 niveles de amplitud distintos para representar 2 bits por símbolo (00, 01, 10, 11). Se usa en Ethernet de 400G y superiores."
      },
      {
        id: 27, tema: "Codificación de Señales",
        enunciado: "HDB3 es una mejora de…",
        opciones: {
          A: "AMI, introduciendo violaciones para largas secuencias de ceros",
          B: "Manchester, eliminando transiciones",
          C: "NRZ-L, duplicando ancho de banda",
          D: "PAM-4, reduciendo niveles"
        },
        correcta: "A",
        explicacion: "HDB3 (High Density Bipolar 3) mejora AMI: cuando aparecen más de 3 ceros consecutivos, los sustituye por una secuencia especial con una violación intencionada para mantener la sincronización."
      },
      {
        id: 28, tema: "Codificación de Señales",
        enunciado: "8B/10B consiste en…",
        opciones: {
          A: "convertir 8 bits en 10 bits para asegurar sincronización y balance de señal",
          B: "convertir 10 bits en 8 bits para comprimir",
          C: "usar 8 niveles y 10 frecuencias",
          D: "codificar solo ceros"
        },
        correcta: "A",
        explicacion: "8B/10B convierte cada byte (8 bits) en un código de 10 bits. Garantiza que no haya más de 5 bits iguales consecutivos (sincronización) y equilibra la señal (igual número de 1s y 0s)."
      },
      {
        id: 29, tema: "Puertos y Protocolos",
        enunciado: "Si un datagrama UDP va dirigido al puerto 53, lo más probable es que sea tráfico de…",
        opciones: { A: "DNS", B: "HTTP", C: "SSH", D: "SMTP" },
        correcta: "A",
        explicacion: "El puerto 53 (UDP y TCP) es el puerto estándar de DNS (Domain Name System). UDP/53 se usa para consultas DNS normales; TCP/53 para transferencias de zona y respuestas largas."
      },
      {
        id: 30, tema: "TCP",
        enunciado: "En un encabezado TCP, un tamaño de ventana 0x2000 equivale a…",
        opciones: { A: "8192", B: "2048", C: "2000", D: "4096" },
        correcta: "A",
        explicacion: "0x2000 en hexadecimal: 2×16³ = 2×4096 = 8192. El tamaño de ventana TCP indica cuántos bytes puede recibir el receptor sin confirmación ACK (control de flujo)."
      },
      {
        id: 31, tema: "TCP",
        enunciado: "En TCP, un Data Offset = 5 indica que la cabecera mide…",
        opciones: { A: "20 bytes", B: "5 bytes", C: "32 bytes", D: "40 bytes" },
        correcta: "A",
        explicacion: "El Data Offset indica el tamaño de la cabecera TCP en unidades de 32 bits (4 bytes). Data Offset = 5 → 5 × 4 = 20 bytes. Es el tamaño mínimo de la cabecera TCP sin opciones."
      },
      {
        id: 32, tema: "Tipos de Ataques",
        enunciado: "¿Qué describe mejor el spoofing?",
        opciones: {
          A: "Suplantación de identidad (p. ej., ARP/IP/DNS spoofing)",
          B: "Cifrado de archivos con rescate",
          C: "Actualización crítica del sistema",
          D: "Compresión de tráfico"
        },
        correcta: "A",
        explicacion: "Spoofing es falsificar la identidad de una entidad: IP spoofing (falsear IP origen), ARP spoofing (enviar respuestas ARP falsas), DNS spoofing (redirigir consultas DNS a IPs maliciosas)."
      },
      {
        id: 33, tema: "Codificación de Señales",
        enunciado: "Según el material, la codificación Diferencial Manchester se asocia típicamente a…",
        opciones: {
          A: "Token Ring (IEEE 802.5)",
          B: "Ethernet (IEEE 802.3)",
          C: "Wi-Fi (IEEE 802.11)",
          D: "Bluetooth (IEEE 802.15)"
        },
        correcta: "A",
        explicacion: "La codificación Manchester Diferencial se usa en Token Ring (IEEE 802.5). Es más robusta que Manchester estándar frente a inversiones de polaridad al usar transiciones relativas."
      },
      {
        id: 34, tema: "Malware",
        enunciado: "¿Qué es un keylogger?",
        opciones: {
          A: "Un programa que registra pulsaciones/credenciales en segundo plano",
          B: "Un firewall de red",
          C: "Un tipo de cifrado simétrico",
          D: "Un protocolo de encaminamiento"
        },
        correcta: "A",
        explicacion: "Un keylogger registra en secreto todas las pulsaciones del teclado, capturando contraseñas, mensajes y datos sensibles. Puede ser software (más común) o hardware (dispositivo USB entre teclado y PC)."
      },
      {
        id: 35, tema: "Ingeniería Social",
        enunciado: "En ingeniería social, pretexting es…",
        opciones: {
          A: "crear un escenario/identidad falsa para obtener información",
          B: "usar solo fuerza bruta",
          C: "cifrar discos automáticamente",
          D: "cambiar la MAC del router"
        },
        correcta: "A",
        explicacion: "Pretexting: el atacante crea un pretexto (historia falsa, identidad ficticia) para ganarse la confianza de la víctima y obtener información o acceso. Por ejemplo, hacerse pasar por técnico de soporte."
      },
      {
        id: 36, tema: "Ingeniería Social",
        enunciado: "En ingeniería social, tailgating es…",
        opciones: {
          A: "acceder a una zona restringida siguiendo a una persona autorizada",
          B: "enviar spam masivo",
          C: "hacer un escaneo de puertos",
          D: "cambiar la contraseña del administrador"
        },
        correcta: "A",
        explicacion: "Tailgating (piggybacking): acceso físico no autorizado a una zona segura siguiendo de cerca a alguien con acceso legítimo, aprovechando la cortesía de mantener la puerta abierta."
      },
      {
        id: 37, tema: "Control de Acceso",
        enunciado: "RBAC significa…",
        opciones: {
          A: "Role-Based Access Control (control de acceso por roles)",
          B: "Router-Based Access Control",
          C: "Risk-Based Access Calculation",
          D: "Remote Backup Access Copy"
        },
        correcta: "A",
        explicacion: "RBAC (Control de Acceso Basado en Roles) asigna permisos a roles (administrador, usuario, auditor) en lugar de a usuarios individuales. Los usuarios obtienen permisos al ser asignados a un rol."
      },
      {
        id: 38, tema: "Gestión de Riesgos",
        enunciado: "Una matriz de riesgos sirve para…",
        opciones: {
          A: "priorizar riesgos según probabilidad e impacto",
          B: "medir voltajes en NRZ",
          C: "calcular la cabecera TCP",
          D: "comprimir imágenes JPEG"
        },
        correcta: "A",
        explicacion: "La matriz de riesgos (probabilidad × impacto) permite visualizar y priorizar riesgos de seguridad. Los riesgos con alta probabilidad y alto impacto requieren atención inmediata."
      },
      {
        id: 39, tema: "Malware",
        enunciado: "¿Cuál es la diferencia más característica entre un virus y un gusano (worm)?",
        opciones: {
          A: "El gusano se replica y propaga por sí mismo; el virus suele incrustarse en otros programas",
          B: "El virus siempre viaja por Wi-Fi y el gusano por cable",
          C: "El gusano solo afecta a móviles",
          D: "No hay ninguna diferencia"
        },
        correcta: "A",
        explicacion: "El gusano (worm) se autopropaga por la red sin necesidad de un archivo huésped. El virus necesita incrustarse en un programa legítimo para propagarse. Los gusanos son más peligrosos en red."
      },
      {
        id: 40, tema: "Seguridad Wi-Fi",
        enunciado: "En redes Wi-Fi, ¿cuál de estos protocolos es (en general) más seguro que WEP?",
        opciones: { A: "WPA2-PSK", B: "WEP", C: "FTP", D: "HTTP" },
        correcta: "A",
        explicacion: "WPA2-PSK usa AES (Advanced Encryption Standard) con clave de 128/256 bits, siendo mucho más seguro que WEP (que usa RC4 con claves de 40/104 bits con graves vulnerabilidades conocidas)."
      }
    ]
  },

  test3: {
    title: "Test 3 - SOR Redes y Seguridad",
    subtitle: "Sistemas Operativos en Red",
    questions: [
      {
        id: 1, tema: "Sistemas de Archivos",
        enunciado: "En NTFS, ¿qué característica permite limitar el espacio de disco que puede usar un usuario?",
        opciones: {
          A: "Cuotas de disco",
          B: "Defragmentación automática",
          C: "CSMA/CD",
          D: "PAM-4"
        },
        correcta: "A",
        explicacion: "Las cuotas de disco en NTFS permiten al administrador limitar la cantidad de espacio en disco que puede ocupar cada usuario, evitando que un usuario consuma todo el almacenamiento disponible."
      },
      {
        id: 2, tema: "Sistemas de Archivos",
        enunciado: "¿Qué característica de NTFS permite cifrar archivos/carpetas a nivel de sistema de archivos?",
        opciones: { A: "EFS (Encrypting File System)", B: "WEP", C: "DHCP", D: "ARP" },
        correcta: "A",
        explicacion: "EFS (Encrypting File System) es una característica de NTFS que permite cifrar archivos y carpetas de forma transparente. Usa criptografía de clave pública y el cifrado es por usuario."
      },
      {
        id: 3, tema: "Sistemas de Archivos",
        enunciado: "¿Cuál es un objetivo principal de ReFS según el temario?",
        opciones: {
          A: "Detectar y reducir la corrupción de datos del sistema de archivos",
          B: "Aumentar la velocidad del Wi-Fi",
          C: "Reemplazar TCP por UDP",
          D: "Eliminar la necesidad de backups"
        },
        correcta: "A",
        explicacion: "ReFS (Resilient File System) tiene como objetivo principal la integridad y resiliencia de los datos: detecta la corrupción automáticamente y, en entornos con Storage Spaces, la puede corregir."
      },
      {
        id: 4, tema: "Administración de Discos",
        enunciado: "En Windows Server, ¿qué tipo de volumen ofrece paridad distribuida y requiere al menos 3 discos?",
        opciones: {
          A: "RAID-5",
          B: "RAID-1",
          C: "RAID-0",
          D: "Volumen simple"
        },
        correcta: "A",
        explicacion: "RAID-5 distribuye los datos y la paridad entre todos los discos del conjunto (mínimo 3). Ofrece tolerancia al fallo de un disco con mejor aprovechamiento de espacio que RAID-1."
      },
      {
        id: 5, tema: "Administración de Sistemas",
        enunciado: "¿Por qué se recomienda revisar el impacto de las actualizaciones antes de instalarlas en un servidor?",
        opciones: {
          A: "Porque una actualización puede afectar al entorno y provocar fallos en la red/servicios",
          B: "Porque desinstala Active Directory",
          C: "Porque obliga a usar FAT32",
          D: "Porque elimina usuarios del dominio"
        },
        correcta: "A",
        explicacion: "Las actualizaciones pueden introducir cambios en el comportamiento del sistema, incompatibilidades con aplicaciones o servicios en producción. Se recomienda probar en entorno de pruebas antes de aplicar en producción."
      },
      {
        id: 6, tema: "Active Directory",
        enunciado: "En Active Directory, ¿qué significa DIT?",
        opciones: {
          A: "Directory Information Tree",
          B: "Data Integrity Tool",
          C: "Domain Installation Task",
          D: "Dynamic IP Table"
        },
        correcta: "A",
        explicacion: "DIT (Directory Information Tree) es la estructura jerárquica en forma de árbol que organiza los objetos en un directorio LDAP/AD. ntds.dit es el archivo que contiene este árbol de información del directorio."
      },
      {
        id: 7, tema: "Active Directory",
        enunciado: "Según el material, ¿para qué se puede usar ADSIEdit.msc en un dominio?",
        opciones: {
          A: "Modificar propiedades de AD y, por ejemplo, restringir quién puede añadir equipos al dominio",
          B: "Configurar modulación QPSK",
          C: "Eliminar la capa de enlace OSI",
          D: "Crear particiones ReFS"
        },
        correcta: "A",
        explicacion: "ADSIEdit.msc es un editor de bajo nivel para el directorio LDAP de Active Directory. Permite modificar atributos avanzados, como ms-DS-MachineAccountQuota para controlar quién puede unir equipos al dominio."
      },
      {
        id: 8, tema: "Active Directory",
        enunciado: "¿Para qué sirve principalmente una Unidad Organizativa (OU)?",
        opciones: {
          A: "Organizar objetos y delegar administración/aplicar GPO",
          B: "Asignar direcciones MAC",
          C: "Cambiar el cableado de red",
          D: "Reemplazar el DNS"
        },
        correcta: "A",
        explicacion: "Las OU (Organizational Units) organizan objetos AD (usuarios, equipos, grupos) en contenedores jerárquicos. Permiten delegar la administración a diferentes administradores y aplicar GPO específicas."
      },
      {
        id: 9, tema: "Administración Remota",
        enunciado: "En administración remota, ¿qué comando se usa para habilitar la ejecución de cmdlets remotos (RSAT/PowerShell)?",
        opciones: {
          A: "Enable-PSRemoting",
          B: "Disable-NetAdapter",
          C: "Stop-Service dhcp",
          D: "ipconfig /release"
        },
        correcta: "A",
        explicacion: "Enable-PSRemoting configura el servidor para aceptar comandos PowerShell remotos (WS-Management/WinRM). Permite usar Invoke-Command y Enter-PSSession para administración remota."
      },
      {
        id: 10, tema: "Active Directory",
        enunciado: "En el archivo de base de datos de AD, el atributo 'dn' se refiere a…",
        opciones: {
          A: "Distinguished Name (nombre distinguido) del objeto",
          B: "Domain Name del servidor",
          C: "Device Number del disco",
          D: "Digital Noise"
        },
        correcta: "A",
        explicacion: "El DN (Distinguished Name) identifica de forma única un objeto en el directorio LDAP. Ejemplo: CN=Juan,OU=Marketing,DC=empresa,DC=com. Cada componente describe la ubicación del objeto en el árbol."
      },
      {
        id: 11, tema: "Active Directory",
        enunciado: "Según Unit 6, un dominio representa…",
        opciones: {
          A: "un límite de seguridad donde se definen los usuarios",
          B: "una VLAN de capa 2",
          C: "un tipo de cableado",
          D: "un algoritmo de compresión"
        },
        correcta: "A",
        explicacion: "Un dominio AD es la unidad fundamental de organización y límite de seguridad. Contiene una base de datos de objetos (usuarios, equipos, políticas) compartida por todos los DC del dominio."
      },
      {
        id: 12, tema: "Active Directory",
        enunciado: "En un dominio, se requiere al menos un Domain Controller, pero se recomienda tener más de uno para…",
        opciones: {
          A: "redundancia/tolerancia a fallos",
          B: "evitar el uso de DNS",
          C: "reducir el ancho de banda de Manchester",
          D: "eliminar el firewall"
        },
        correcta: "A",
        explicacion: "Tener múltiples DC proporciona alta disponibilidad: si uno falla, los otros siguen respondiendo peticiones de autenticación y acceso. También distribuye la carga de trabajo en entornos grandes."
      },
      {
        id: 13, tema: "Tipos de Redes",
        enunciado: "Una red informática se define como…",
        opciones: {
          A: "un conjunto de dispositivos conectados para compartir información y recursos",
          B: "una base de datos de usuarios",
          C: "un disco dinámico",
          D: "un sistema de archivos"
        },
        correcta: "A",
        explicacion: "Una red informática es un conjunto de dispositivos (ordenadores, servidores, impresoras, etc.) interconectados mediante hardware y software para compartir información, recursos y servicios."
      },
      {
        id: 14, tema: "Modelos de Red",
        enunciado: "En un modelo servidor-cliente, ¿qué opción describe mejor la relación entre roles?",
        opciones: {
          A: "El cliente solicita servicios/recursos y el servidor responde",
          B: "Todos los nodos son iguales siempre",
          C: "No existen permisos ni autenticación",
          D: "Solo funciona con Wi-Fi"
        },
        correcta: "A",
        explicacion: "En el modelo cliente-servidor, los clientes hacen peticiones de servicios/recursos y los servidores los proporcionan. Es asimétrico: el servidor espera peticiones y el cliente las inicia."
      },
      {
        id: 15, tema: "Modelo OSI",
        enunciado: "En el modelo OSI, ¿qué capa se encarga principalmente del encaminamiento y direccionamiento IP?",
        opciones: {
          A: "Capa de Red",
          B: "Capa Física",
          C: "Capa de Presentación",
          D: "Capa de Sesión"
        },
        correcta: "A",
        explicacion: "La capa 3 (Red) del modelo OSI gestiona el direccionamiento lógico (IP) y el encaminamiento (routing) de paquetes entre diferentes redes. Los routers operan en esta capa."
      },
      {
        id: 16, tema: "Protocolos de Red",
        enunciado: "¿Para qué se usa ARP?",
        opciones: {
          A: "Resolver una IP a una dirección MAC en la red local",
          B: "Cifrar la comunicación SSH",
          C: "Asignar puertos TCP",
          D: "Actualizar el kernel"
        },
        correcta: "A",
        explicacion: "ARP (Address Resolution Protocol) resuelve direcciones IP a direcciones MAC en la misma red local (LAN). Un equipo envía un broadcast preguntando '¿Quién tiene la IP X?' y el dueño responde con su MAC."
      },
      {
        id: 17, tema: "Enrutamiento",
        enunciado: "¿Qué algoritmo se usa típicamente para calcular rutas de menor coste en enrutamiento dinámico (según el material)?",
        opciones: { A: "Dijkstra", B: "RSA", C: "AES", D: "LZW" },
        correcta: "A",
        explicacion: "El algoritmo de Dijkstra calcula el camino más corto desde un nodo a todos los demás en un grafo ponderado. Se usa en protocolos de estado de enlace como OSPF para calcular la tabla de enrutamiento."
      },
      {
        id: 18, tema: "Perturbaciones",
        enunciado: "La intermodulación es una perturbación debida a…",
        opciones: {
          A: "la mezcla de otras frecuencias en el canal",
          B: "la falta de routers en la red",
          C: "el uso de TCP en vez de UDP",
          D: "la compresión JPEG"
        },
        correcta: "A",
        explicacion: "La intermodulación ocurre cuando señales de diferentes frecuencias se mezclan en un medio no lineal, generando frecuencias espurias (suma y diferencia de frecuencias) que interfieren con la señal original."
      },
      {
        id: 19, tema: "Linux",
        enunciado: "Bash es…",
        opciones: {
          A: "un lenguaje de scripting/CLI típico en Unix/Linux para automatizar tareas",
          B: "un estándar IEEE de Wi-Fi",
          C: "un tipo de malware",
          D: "un protocolo de capa física"
        },
        correcta: "A",
        explicacion: "Bash (Bourne Again SHell) es el intérprete de comandos y lenguaje de scripting más usado en sistemas Unix/Linux. Permite automatizar tareas mediante scripts, gestionar el sistema y ejecutar programas."
      },
      {
        id: 20, tema: "Tipos de Ataques",
        enunciado: "Un ataque 0-Day es…",
        opciones: {
          A: "un ataque que explota una vulnerabilidad desconocida o sin parche",
          B: "un ataque que solo dura 24 horas",
          C: "un tipo de backup",
          D: "un antivirus"
        },
        correcta: "A",
        explicacion: "Un ataque Zero-Day (0-day) explota una vulnerabilidad que aún no es conocida públicamente ni tiene parche disponible. Es especialmente peligroso porque los sistemas no tienen defensa frente a él."
      },
      {
        id: 21, tema: "Codificación de Señales",
        enunciado: "Una desventaja clásica de la codificación Manchester es que…",
        opciones: {
          A: "requiere aproximadamente el doble de ancho de banda que NRZ",
          B: "no tiene transiciones nunca",
          C: "solo funciona con señales analógicas",
          D: "impide la sincronización"
        },
        correcta: "A",
        explicacion: "Manchester tiene una transición por cada bit (en el centro), lo que duplica la tasa de transiciones respecto a NRZ. Esto requiere aproximadamente el doble de ancho de banda para la misma tasa de bits."
      },
      {
        id: 22, tema: "Codificación de Señales",
        enunciado: "La codificación Diferencial Manchester es más robusta porque…",
        opciones: {
          A: "tolera mejor inversiones de polaridad",
          B: "no requiere reloj",
          C: "no usa transiciones centrales",
          D: "elimina el ruido térmico"
        },
        correcta: "A",
        explicacion: "Manchester Diferencial usa la presencia/ausencia de transición al inicio del bit (no el nivel absoluto) para codificar datos. Esto la hace robusta frente a inversiones de polaridad del cable."
      },
      {
        id: 23, tema: "Codificación de Señales",
        enunciado: "En NRZ-L, los bits se representan mediante…",
        opciones: {
          A: "niveles de voltaje constantes (0 y 1 en niveles diferentes)",
          B: "una transición fija a mitad de bit",
          C: "alternancia +V/-V en cada 1",
          D: "4 bits convertidos en 5 bits"
        },
        correcta: "A",
        explicacion: "NRZ-L (Non-Return to Zero Level): el nivel de voltaje permanece constante durante cada bit. Nivel alto = 1 (o 0, según convención), nivel bajo = 0. Simple pero problemático con largas secuencias iguales."
      },
      {
        id: 24, tema: "Codificación de Señales",
        enunciado: "Una secuencia larga de ceros es problemática en NRZ-L porque…",
        opciones: {
          A: "no hay transiciones y el receptor pierde sincronización",
          B: "consume el doble de ancho de banda",
          C: "provoca paridad distribuida",
          D: "activa el modo DHCP"
        },
        correcta: "A",
        explicacion: "En NRZ-L, una larga secuencia de ceros produce un nivel constante sin transiciones. El receptor necesita transiciones para sincronizar su reloj con el transmisor; sin ellas, puede perder la sincronización."
      },
      {
        id: 25, tema: "Codificación de Señales",
        enunciado: "Dada la señal NRZ-L: ↑ ↑ ↓ ↑ ↑ ↓ (asumiendo ↑=1 y ↓=0), la secuencia de bits es…",
        opciones: { A: "110110", B: "111000", C: "001101", D: "101011" },
        correcta: "A",
        explicacion: "Con ↑=1 y ↓=0: ↑↑↓↑↑↓ = 1,1,0,1,1,0 = 110110. En NRZ-L cada símbolo corresponde directamente a un nivel de voltaje constante, por lo que la lectura es directa."
      },
      {
        id: 26, tema: "Codificación de Señales",
        enunciado: "Según el ejercicio del temario, la codificación Manchester de 10101 es…",
        opciones: {
          A: "↑↓  ↓↑  ↑↓  ↓↑  ↑↓",
          B: "↓↑  ↓↑  ↑↓  ↑↓  ↓↑",
          C: "↑↑  ↓↓  ↑↑  ↓↓  ↑↑",
          D: "→→  ↑↓  →→  ↑↓  →→"
        },
        correcta: "A",
        explicacion: "Manchester: bit 1 = transición bajo→alto (↑↓ en primera mitad alto → segunda mitad bajo... depende convención). Según el temario: 1=↑↓, 0=↓↑. Para 10101: ↑↓ ↓↑ ↑↓ ↓↑ ↑↓."
      },
      {
        id: 27, tema: "Datagramas IPv4",
        enunciado: "¿Qué campo del encabezado IPv4 limita la vida del paquete y evita bucles infinitos?",
        opciones: { A: "TTL", B: "IHL", C: "MAC", D: "MTU" },
        correcta: "A",
        explicacion: "TTL (Time To Live): cada router decrementa este campo en 1 al reenviar el paquete. Cuando llega a 0, el router descarta el paquete y envía un ICMP Time Exceeded al origen, evitando bucles infinitos."
      },
      {
        id: 28, tema: "Datagramas IPv4",
        enunciado: "En un datagrama con campo 'Total Length' = 0x0028, la longitud total es…",
        opciones: { A: "40 bytes", B: "28 bytes", C: "64 bytes", D: "20 bytes" },
        correcta: "A",
        explicacion: "0x0028 en hexadecimal: 2×16 + 8 = 32 + 8 = 40 bytes. El campo Total Length indica el tamaño completo del datagrama IP (cabecera + datos) en bytes."
      },
      {
        id: 29, tema: "Datagramas IPv4",
        enunciado: "El valor hexadecimal 0a00 0005 corresponde a la IP…",
        opciones: {
          A: "10.0.0.5",
          B: "0.10.0.5",
          C: "10.0.0.50",
          D: "192.168.0.5"
        },
        correcta: "A",
        explicacion: "0x0a = 10, 0x00 = 0, 0x00 = 0, 0x05 = 5. Por tanto 0x0a000005 = 10.0.0.5. Las direcciones IPv4 en el encabezado se representan como 4 octetos hexadecimales consecutivos."
      },
      {
        id: 30, tema: "Puertos y Protocolos",
        enunciado: "En el ejemplo del temario, el puerto 1f90 (hex) corresponde a…",
        opciones: { A: "8080", B: "80", C: "53", D: "443" },
        correcta: "A",
        explicacion: "0x1f90 en decimal: 1×16³ + 15×16² + 9×16 + 0 = 4096 + 3840 + 144 + 0 = 8080. El puerto 8080 es frecuentemente usado como alternativa al puerto 80 para servidores HTTP proxy/de desarrollo."
      },
      {
        id: 31, tema: "TCP",
        enunciado: "Un segmento TCP con flag SYN y número de ACK = 0 suele indicar…",
        opciones: {
          A: "inicio del establecimiento de conexión",
          B: "cierre de conexión (FIN)",
          C: "paquete con datos de aplicación",
          D: "ataque de ransomware"
        },
        correcta: "A",
        explicacion: "El primer segmento del 3-way handshake TCP tiene SYN=1 y ACK=0 (no hay nada que confirmar aún). El cliente envía este SYN para iniciar la conexión con un número de secuencia aleatorio."
      },
      {
        id: 32, tema: "Autenticación",
        enunciado: "MFA significa…",
        opciones: {
          A: "Autenticación multifactor",
          B: "Máxima frecuencia de acceso",
          C: "Matriz de fallos y ataques",
          D: "Monitorización de ficheros de AD"
        },
        correcta: "A",
        explicacion: "MFA (Multi-Factor Authentication) requiere dos o más factores de autenticación: algo que sabes (contraseña), algo que tienes (token/móvil) y/o algo que eres (biometría). Aumenta significativamente la seguridad."
      },
      {
        id: 33, tema: "Copias de Seguridad",
        enunciado: "La estrategia de copias de seguridad 3-2-1 consiste en…",
        opciones: {
          A: "3 copias, 2 soportes distintos, 1 copia fuera de línea o fuera de la sede",
          B: "3 discos dinámicos, 2 RAID, 1 servidor",
          C: "3 contraseñas, 2 usuarios, 1 administrador",
          D: "3 VLAN, 2 switches, 1 router"
        },
        correcta: "A",
        explicacion: "La regla 3-2-1 de backups: mantener 3 copias de los datos, en 2 tipos diferentes de medios/soportes, con al menos 1 copia offsite (fuera de las instalaciones). Protege contra múltiples escenarios de fallo."
      },
      {
        id: 34, tema: "Ingeniería Social",
        enunciado: "Un deepfake se refiere a…",
        opciones: {
          A: "contenido (audio/vídeo/imagen) generado o manipulado con IA para suplantar identidad",
          B: "un tipo de compresión sin pérdidas",
          C: "una topología en anillo",
          D: "un protocolo de cifrado Wi-Fi"
        },
        correcta: "A",
        explicacion: "Los deepfakes usan IA (principalmente redes generativas adversariales/GAN) para crear vídeos, imágenes o audios hiperrealistas que muestran a personas diciendo o haciendo cosas que nunca ocurrieron."
      },
      {
        id: 35, tema: "OSINT",
        enunciado: "OSINT significa…",
        opciones: {
          A: "Open Source Intelligence (inteligencia de fuentes abiertas)",
          B: "Operating System Internal Network Tools",
          C: "Optical Signal Noise Interference Test",
          D: "Open Secure Internet Node Transfer"
        },
        correcta: "A",
        explicacion: "OSINT es la recopilación y análisis de información de fuentes públicamente disponibles (redes sociales, webs, registros públicos, etc.) para inteligencia. Se usa tanto en ciberseguridad ofensiva como defensiva."
      },
      {
        id: 36, tema: "Seguridad Ofensiva",
        enunciado: "Un ejercicio de red teaming consiste en…",
        opciones: {
          A: "simular ataques realistas para evaluar defensas y respuesta",
          B: "instalar parches de Windows",
          C: "configurar NRZ-I",
          D: "crear una LAN doméstica"
        },
        correcta: "A",
        explicacion: "Red Teaming es un ejercicio donde un equipo ofensivo (red team) simula ataques reales de adversarios sofisticados para probar las defensas y la capacidad de respuesta del equipo defensor (blue team)."
      },
      {
        id: 37, tema: "Informes de Seguridad",
        enunciado: "Un informe ejecutivo de seguridad suele estar orientado a…",
        opciones: {
          A: "dirección/gestión y resumen de impacto/riesgos",
          B: "solo a configurar firewall",
          C: "solo a explicar codificación Manchester",
          D: "solo a listar puertos TCP"
        },
        correcta: "A",
        explicacion: "El informe ejecutivo resume los hallazgos de seguridad en términos de impacto de negocio y riesgos, orientado a directivos y responsables. No entra en detalles técnicos profundos como haría un informe técnico."
      },
      {
        id: 38, tema: "Arquitectura de Red",
        enunciado: "La segmentación de red ayuda principalmente a…",
        opciones: {
          A: "evitar movimientos laterales y contener una intrusión",
          B: "aumentar el ancho de banda de RZ",
          C: "evitar el uso de DNS",
          D: "hacer que ARP deje de existir"
        },
        correcta: "A",
        explicacion: "La segmentación de red (VLANs, subredes, DMZ) limita la propagación de un ataque. Si un segmento se compromete, el atacante no puede moverse fácilmente a otros segmentos (movimiento lateral)."
      },
      {
        id: 39, tema: "SIEM",
        enunciado: "¿Cuál de los siguientes componentes pertenece al stack ELK?",
        opciones: { A: "Kibana", B: "Nessus", C: "BitLocker", D: "Token Ring" },
        correcta: "A",
        explicacion: "ELK Stack: Elasticsearch (motor de búsqueda/análisis), Logstash (recopilación/procesado de logs) y Kibana (visualización de datos en dashboards). Es una plataforma popular para análisis de logs y SIEM."
      },
      {
        id: 40, tema: "SIEM",
        enunciado: "En un SIEM, la correlación de eventos sirve para…",
        opciones: {
          A: "detectar patrones/ataques combinando logs de varias fuentes",
          B: "cambiar el sistema de archivos a ReFS",
          C: "codificar bits en AMI",
          D: "reiniciar un DC automáticamente"
        },
        correcta: "A",
        explicacion: "La correlación de eventos en un SIEM analiza logs de múltiples fuentes (firewall, IDS, servidores, endpoints) buscando patrones que indiquen un ataque, como múltiples fallos de login seguidos de acceso exitoso."
      }
    ]
  }
};

// Validation
(function validateTests() {
  const required = ['id','tema','enunciado','opciones','correcta','explicacion'];
  const validAnswers = ['A','B','C','D'];
  Object.entries(TESTS_DATA).forEach(([testKey, test]) => {
    test.questions.forEach((q, idx) => {
      required.forEach(field => {
        if (q[field] === undefined || q[field] === null) {
          console.error(`[${testKey}] Q${idx+1} (id=${q.id}): Missing field '${field}'`);
        }
      });
      if (!validAnswers.includes(q.correcta)) {
        console.error(`[${testKey}] Q${idx+1} (id=${q.id}): Invalid 'correcta' value: '${q.correcta}'`);
      }
      const opts = q.opciones || {};
      validAnswers.forEach(opt => {
        if (!opts[opt]) {
          console.error(`[${testKey}] Q${idx+1} (id=${q.id}): Missing option '${opt}'`);
        }
      });
    });
    console.log(`✓ ${testKey}: ${test.questions.length} questions validated`);
  });
})();
