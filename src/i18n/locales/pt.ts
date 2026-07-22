const pt = {
  translation: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      youtube: 'Vídeos',
      github: 'GitHub',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    hero: {
      role: 'Desenvolvedor Full Stack',
      description: 'Especializado em criar aplicações web escaláveis, dashboards em tempo real, sistemas de automação e soluções IoT com Python, JavaScript, PHP e React.',
      download_cv: 'Baixar CV',
      contact_me: 'Contatar',
    },
    about: {
      title: 'Sobre Mim',
      content: 'Desenvolvedor Full Stack formado em Ciência da Computação com mais de 5 anos de experiência no ciclo completo de desenvolvimento de software. Especializado na construção de aplicações web escaláveis, dashboards em tempo real, sistemas de automação e soluções IoT. Combino fundamentos técnicos sólidos (Python, JavaScript, PHP) com práticas DevOps (Docker, CI/CD, administração Linux) e experiência em sistemas embarcados (ESP32). Focado em criar software confiável que resolve problemas reais de negócio.',
    },
    experience: {
      title: 'Experiência Profissional',
      jobs: [
        {
          role: 'Freelancer',
          company: 'Migbertweb Desenvolvimento – Joinville, SC',
          period: '2024 – Presente',
          description: 'Desenvolvimento Full Stack de aplicações web, dashboards em tempo real e soluções IoT. Criação de sistemas de gestão (WorkApp), automação de processos e infraestrutura DevOps com Docker e CI/CD. Deploy automatizado com Dokploy. Gestão de projetos freelance com entrega contínua e comunicação direta com clientes.',
        },
        {
          role: 'Analista Desenvolvedor Jr.',
          company: 'TODoca, C.A. – Caracas, VE',
          period: 'Jan 2018 – Mai 2020',
          description: 'Migração bem-sucedida de servidor físico para infraestrutura VPS Linux — melhoria de ~40% na confiabilidade do sistema e redução de custos de manutenção. Integração de APIs de terceiros (pagamento, autenticação). Suporte técnico, correção de bugs e garantia de alta disponibilidade da plataforma. Manutenção e otimização de código legado com implementação de novas funcionalidades.',
        },
        {
          role: 'Analista Integral de Projetos',
          company: 'CVG Alcasa – Puerto Ordaz, VE',
          period: 'Mai 2012 – Nov 2018',
          description: 'Atuação no levantamento de requisitos, definição de processos e execução de projetos corporativos. Realização de análises de viabilidade técnica e para alocação de recursos. Acompanhamento de cronogramas e suporte na gestão integrada de projetos.',
        },
        {
          role: 'Auxiliar de Produção I',
          company: 'FRANKLIN ELECTRIC – Araquari, SC',
          period: '02/2025 – 04/2026',
          description: 'Atuação nos setores de moldagem, preparação de areia e acabamento. Operação de equipamentos para movimentação de cargas.',
        },
        {
          role: 'Esmerilhador',
          company: 'TUPY S/A – Joinville, SC',
          period: '02/2023 – 03/2025',
          description: 'Atuação no setor de qualidade/acabamento, realizando verificação e acabamento de peças. Esta experiência reforçou competências de resolução prática de problemas e adaptabilidade em ambiente dinâmico.',
        }
      ]
    },
    youtube: {
      title: 'Meus Vídeos',
      description: 'Conteúdo sobre Linux, Docker, Kubernetes e mais no meu canal @MigbertonLinux',
    },
    github: {
      title: 'Repositórios em Destaque',
      description: 'Alguns dos meus projetos mais importantes no GitHub',
    },
    projects: {
      title: 'Projetos em Destaque',
      view_project: 'Ver Projeto',
      items: [
        {
          title: 'WorkApp — Gestão de Projetos Freelance',
          description: 'Plataforma completa com kanban, gestão de clientes, orçamentos, faturas em PDF, analytics e upload drag-and-drop. 18 PRs mergeados, arquitetura limpa, design responsivo.',
          stack: 'Express.js, React, SQLite, JWT, jsPDF',
          results: '18 PRs mergeados, design responsivo (768px+)',
        },
        {
          title: 'DeskMate — Monitoramento IoT Ambiental',
          description: 'Sistema de monitoramento ambiental com firmware ESP32 (ESP-IDF + FreeRTOS), display ST7789, anel LED WS2812B e dashboard web em tempo real com WebSocket e MQTT.',
          stack: 'ESP32-C3, Python, React, WebSocket, MQTT',
          results: 'Comunicação bidirecional, firmware otimizado para baixo consumo',
        },
        {
          title: 'Automação DevOps com Docker + CI/CD',
          description: 'Pipelines CI/CD para múltiplas aplicações web com testes automatizados, build de containers e deploys zero-downtime. Infraestrutura como código com Docker Compose.',
          stack: 'Docker, GitHub Actions, Linux, VPS, Dokploy',
          results: 'Deploys sem downtime, ambientes reproduzíveis',
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
          database: 'Banco de Dados'
      }
    },
    contact: {
      text: 'Estou sempre aberto a novos desafios e oportunidades. Vamos conversar!',
      footer: '© 2025 Migbert Yanez. Construído com React e Tailwind.'
    }
  },
};

export default pt;
