const en = {
  translation: {
    nav: {
      about: 'About',
      experience: 'Experience',
      youtube: 'Videos',
      github: 'GitHub',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      role: 'Full Stack Developer',
      description: 'Specialized in scalable web apps, real-time dashboards, automation systems, and IoT solutions using Python, JavaScript, PHP, and React.',
      download_cv: 'Download CV',
      contact_me: 'Contact Me',
    },
    about: {
      title: 'About Me',
      content: 'Full Stack Developer with a Computer Science degree and over 5 years of experience in the full software development lifecycle. Specialized in building scalable web applications, real-time dashboards, automation systems, and IoT solutions. I combine solid technical fundamentals (Python, JavaScript, PHP) with DevOps practices (Docker, CI/CD, Linux administration) and embedded systems experience (ESP32). Focused on creating reliable software that solves real business problems.',
    },
    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          role: 'Freelancer',
          company: 'Migbertweb Development – Joinville, SC',
          period: '2024 – Present',
          description: 'Full Stack development of web applications, real-time dashboards, and IoT solutions. Created management systems (WorkApp), process automation, and DevOps infrastructure with Docker and CI/CD. Automated deployment with Dokploy. Freelance project management with continuous delivery and direct client communication.',
        },
        {
          role: 'Jr. Analyst Developer',
          company: 'TODoca, C.A. – Caracas, VE',
          period: 'Jan 2018 – May 2020',
          description: 'Successful migration from physical servers to Linux VPS infrastructure — ~40% improvement in system reliability and reduced maintenance costs. Third-party API integration (payments, auth). Technical support, bug fixing, and high-availability platform maintenance. Legacy code optimization and new feature implementation.',
        },
        {
          role: 'Integral Project Analyst',
          company: 'CVG Alcasa – Puerto Ordaz, VE',
          period: 'May 2012 – Nov 2018',
          description: 'Requirements gathering, process definition, and execution of corporate projects. Technical feasibility analysis and resource management. Schedule tracking and support in integrated project management.',
        },
        {
          role: 'Production Assistant I',
          company: 'FRANKLIN ELECTRIC – Araquari, SC',
          period: '02/2025 – 04/2026',
          description: 'Worked in molding, sand preparation, and finishing sectors. Operated equipment for load movement.',
        },
        {
          role: 'Grinder Operator',
          company: 'TUPY S/A – Joinville, SC',
          period: '02/2023 – 03/2025',
          description: 'Worked in quality/finishing sector, performing piece verification and finishing. This experience strengthened practical problem-solving skills and adaptability in dynamic environments.',
        }
      ]
    },
    youtube: {
      title: 'My Videos',
      description: 'Content about Linux, Docker, Kubernetes and more on my channel @MigbertonLinux',
    },
    github: {
      title: 'Featured Repositories',
      description: 'Some of my most important projects on GitHub',
    },
    projects: {
      title: 'Featured Projects',
      view_project: 'View Project',
      items: [
        {
          title: 'WorkApp — Freelance Project Management',
          description: 'Complete platform with kanban, client management, budgets, PDF invoices, analytics, and drag-and-drop uploads. 18 merged PRs, clean architecture, responsive design.',
          stack: 'Express.js, React, SQLite, JWT, jsPDF',
          results: '18 merged PRs, responsive design (768px+)',
        },
        {
          title: 'DeskMate — Environmental IoT Monitor',
          description: 'Environmental monitoring system with ESP32 firmware (ESP-IDF + FreeRTOS), ST7789 display, WS2812B LED ring, and real-time web dashboard via WebSocket and MQTT.',
          stack: 'ESP32-C3, Python, React, WebSocket, MQTT',
          results: 'Bidirectional communication, low-power firmware',
        },
        {
          title: 'DevOps Automation with Docker + CI/CD',
          description: 'CI/CD pipelines for multiple web applications with automated tests, container builds, and zero-downtime deployments. Infrastructure as code with Docker Compose.',
          stack: 'Docker, GitHub Actions, Linux, VPS, Dokploy',
          results: 'Zero-downtime deployments, reproducible environments',
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
          database: 'Database'
      }
    },
    contact: {
      text: 'I am always open to new challenges and opportunities. Let\'s talk!',
      available: '📌 Available for freelance projects — 20-30h/week',
      schedule: 'Schedule a Call',
      upwork: 'Available on Upwork',
      footer: '© 2025 Migbert Yanez. Built with React & Tailwind.',
      cta_title: 'Turn your idea into working software',
      cta_subtitle: 'Available for freelance projects'
    }
  },
};

export default en;
