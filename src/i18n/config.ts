import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define the resources type
const resources = {
  es: {
    translation: {
      nav: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        contact: 'Contacto',
      },
      hero: {
        role: 'Desarrollador Full Stack',
        description: 'Especializado en crear aplicaciones web escalables con PHP/Laravel, Python/Django y React.',
        download_cv: 'Descargar CV',
        contact_me: 'Contactar',
      },
      about: {
        title: 'Sobre mí',
        content: 'Desarrollador Full Stack con formación en Ciencias de la Computación y más de 5 años de experiencia en el ciclo completo de desarrollo de software. Trabajo en entornos DevOps utilizando Docker, Kubernetes y pipelines de CI/CD. Mi experiencia en el sector industrial ha fortalecido mi adaptabilidad y resolución práctica de problemas.',
      },
      experience: {
        title: 'Experiencia Profesional',
        jobs: [
          {
            role: 'Analista Desarrollador Jr.',
            company: 'TODoca, C.A. – Caracas, VE',
            period: 'Ene 2018 – May 2020',
            description: 'Integración de APIs de terceros (pagos, autenticación). Migración exitosa de servidores físicos a VPS Linux, mejorando rendimiento y confiabilidad. Mantenimiento, soporte técnico y corrección de bugs.',
          },
          {
            role: 'Analista Integral de Proyectos',
            company: 'CVG Alcasa – Puerto Ordaz, VE',
            period: 'May 2012 – Nov 2018',
            description: 'Levantamiento de requisitos, definición de procesos y ejecución de proyectos corporativos. Análisis de viabilidad técnica y gestión de recursos.',
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
        footer: '© 2025 Migbert Yanez. Construido con React y Tailwind.'
      }
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        role: 'Full Stack Developer',
        description: 'Specialized in creating scalable web applications with PHP/Laravel, Python/Django and React.',
        download_cv: 'Download CV',
        contact_me: 'Contact Me',
      },
      about: {
        title: 'About Me',
        content: 'Full Stack Developer with a Computer Science degree and over 5 years of experience in the full software development lifecycle. I work in DevOps environments using Docker, Kubernetes, and CI/CD pipelines. My background in the industrial sector has strengthened my adaptability and practical problem-solving skills.',
      },
      experience: {
        title: 'Professional Experience',
        jobs: [
          {
            role: 'Jr. Analyst Developer',
            company: 'TODoca, C.A. – Caracas, VE',
            period: 'Jan 2018 – May 2020',
            description: 'Integration of third-party APIs (payments, auth). Successful migration from physical servers to Linux VPS, improving performance and reliability. Maintenance, technical support, and bug fixing.',
          },
          {
            role: 'Integral Project Analyst',
            company: 'CVG Alcasa – Puerto Ordaz, VE',
            period: 'May 2012 – Nov 2018',
            description: 'Requirements gathering, process definition, and execution of corporate projects. Technical feasibility analysis and resource management.',
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
        footer: '© 2025 Migbert Yanez. Built with React & Tailwind.'
      }
    },
  },
  pt: {
    translation: {
      nav: {
        about: 'Sobre',
        experience: 'Experiência',
        skills: 'Habilidades',
        contact: 'Contato',
      },
      hero: {
        role: 'Desenvolvedor Full Stack',
        description: 'Especializado em criar aplicações web escaláveis com PHP/Laravel, Python/Django e React.',
        download_cv: 'Baixar CV',
        contact_me: 'Contatar',
      },
      about: {
        title: 'Sobre Mim',
        content: 'Desenvolvedor Full Stack com formação em Ciência da Computação e mais de 5 anos de experiência no ciclo completo de desenvolvimento de software. Atuo em ambientes DevOps utilizando Docker, Kubernetes e pipelines de CI/CD. Minha passagem pelo setor industrial fortaleceu minha adaptabilidade e resolução prática de problemas.',
      },
      experience: {
        title: 'Experiência Profissional',
        jobs: [
          {
            role: 'Analista Desenvolvedor Jr.',
            company: 'TODoca, C.A. – Caracas, VE',
            period: 'Jan 2018 – Mai 2020',
            description: 'Integração de APIs de terceiros para serviços de pagamento e autenticação. Migração bem-sucedida de servidor físico para infraestrutura VPS com Linux. Execução de suporte técnico e manutenção corretiva.',
          },
          {
            role: 'Analista Integral de Projetos',
            company: 'CVG Alcasa – Puerto Ordaz, VE',
            period: 'Mai 2012 – Nov 2018',
            description: 'Atuação no levantamento de requisitos, definição de processos e execução de projetos corporativos. Realização de análises de viabilidade técnica e para alocação de recursos.',
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
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Default to Portuguese
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
