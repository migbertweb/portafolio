const es = {
  translation: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      youtube: 'Videos',
      github: 'GitHub',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      role: 'Desarrollador Full Stack',
      description: 'Especializado en crear aplicaciones web escalables, dashboards en tiempo real, sistemas de automatización y soluciones IoT con Python, JavaScript, PHP y React.',
      download_cv: 'Descargar CV',
      contact_me: 'Contactar',
    },
    about: {
      title: 'Sobre mí',
      content: 'Desarrollador Full Stack formado en Ciencias de la Computación con más de 5 años de experiencia en el ciclo completo de desarrollo de software. Especializado en la construcción de aplicaciones web escalables, dashboards en tiempo real, sistemas de automatización y soluciones IoT. Combino fundamentos técnicos sólidos (Python, JavaScript, PHP) con prácticas DevOps (Docker, CI/CD, administración Linux) y experiencia en sistemas embebidos (ESP32). Enfocado en crear software confiable que resuelve problemas reales de negocio.',
    },
    experience: {
      title: 'Experiencia Profesional',
      jobs: [
        {
          role: 'Freelancer',
          company: 'Migbertweb Desarrollo – Joinville, SC',
          period: '2024 – Presente',
          description: 'Desarrollo Full Stack de aplicaciones web, dashboards en tiempo real y soluciones IoT. Creación de sistemas de gestión (WorkApp), automatización de procesos e infraestructura DevOps con Docker y CI/CD. Deploy automatizado con Dokploy. Gestión de proyectos freelance con entrega continua y comunicación directa con clientes.',
        },
        {
          role: 'Analista Desarrollador Jr.',
          company: 'TODoca, C.A. – Caracas, VE',
          period: 'Ene 2018 – May 2020',
          description: 'Migración exitosa de servidor físico a infraestructura VPS Linux — mejora de ~40% en confiabilidad del sistema y reducción de costos de mantenimiento. Integración de APIs de terceros (pagos, autenticación). Soporte técnico, corrección de bugs y garantía de alta disponibilidad de la plataforma. Mantenimiento y optimización de código legado con implementación de nuevas funcionalidades.',
        },
        {
          role: 'Analista Integral de Proyectos',
          company: 'CVG Alcasa – Puerto Ordaz, VE',
          period: 'May 2012 – Nov 2018',
          description: 'Levantamiento de requisitos, definición de procesos y ejecución de proyectos corporativos. Análisis de viabilidad técnica y gestión de recursos. Acompañamiento de cronogramas y soporte en gestión integrada de proyectos.',
        },
        {
          role: 'Auxiliar de Produção I',
          company: 'FRANKLIN ELECTRIC – Araquari, SC',
          period: '02/2025 – 04/2026',
          description: 'Actuación en los sectores de moldeo, preparación de arena y acabado. Operación de equipos para movimiento de cargas.',
        },
        {
          role: 'Esmerilhador',
          company: 'TUPY S/A – Joinville, SC',
          period: '02/2023 – 03/2025',
          description: 'Actuación en el sector de calidad/acabado, realizando verificación y acabado de piezas. Esta experiencia reforzó competencias de resolución práctica de problemas y adaptabilidad en entorno dinámico.',
        }
      ]
    },
    youtube: {
      title: 'Mis Videos',
      description: 'Contenido sobre Linux, Docker, Kubernetes y más en mi canal @MigbertonLinux',
    },
    github: {
      title: 'Repositorios Destacados',
      description: 'Algunos de mis proyectos más importantes en GitHub',
    },
    projects: {
      title: 'Proyectos Destacados',
      view_project: 'Ver Proyecto',
      items: [
        {
          title: 'WorkApp — Gestión de Proyectos Freelance',
          description: 'Plataforma completa con kanban, gestión de clientes, presupuestos, facturas en PDF, analytics y upload drag-and-drop. 18 PRs mergeados, arquitectura limpia, diseño responsivo.',
          stack: 'Express.js, React, SQLite, JWT, jsPDF',
          results: '18 PRs mergeados, diseño responsivo (768px+)',
        },
        {
          title: 'DeskMate — Monitoreo IoT Ambiental',
          description: 'Sistema de monitoreo ambiental con firmware ESP32 (ESP-IDF + FreeRTOS), display ST7789, anillo LED WS2812B y dashboard web en tiempo real con WebSocket y MQTT.',
          stack: 'ESP32-C3, Python, React, WebSocket, MQTT',
          results: 'Comunicación bidireccional, firmware optimizado para bajo consumo',
        },
        {
          title: 'Automatización DevOps con Docker + CI/CD',
          description: 'Pipelines CI/CD para múltiples aplicaciones web con tests automatizados, build de containers y deploys zero-downtime. Infraestructura como código con Docker Compose.',
          stack: 'Docker, GitHub Actions, Linux, VPS, Dokploy',
          results: 'Deploys sin downtime, entornos reproducibles',
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
          database: 'Base de Datos'
      }
    },
    contact: {
      text: 'Estoy siempre abierto a nuevos desafíos y oportunidades. ¡Hablemos!',
      available: '📌 Disponible para proyectos freelance — 20-30h/semana',
      schedule: 'Agendar Conversación',
      upwork: 'Disponible en Upwork',
      footer: '© 2025 Migbert Yanez. Construido con React y Tailwind.',
      cta_title: 'Transforma tu idea en software funcionando',
      cta_subtitle: 'Disponible para proyectos freelance'
    }
  },
};

export default es;
