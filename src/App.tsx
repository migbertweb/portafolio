import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProfileImage } from './components/ProfileImage';
import { useStore } from './store/useStore';
import { Github, Linkedin, Mail, Download, Code, Server, Terminal, Database } from 'lucide-react';
import cvEs from './assets/Curriculum-es.pdf';
import cvEn from './assets/Curriculum-en.pdf';
import cvPt from './assets/Curriculum-pt.pdf';

function App() {
  const { t } = useTranslation();
  const { setActiveSection, currentLanguage } = useStore();

  const cvs = {
    es: cvEs,
    en: cvEn,
    pt: cvPt
  };

  const currentCv = cvs[currentLanguage as keyof typeof cvs] || cvs.en;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Intersection Observer to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  // Handle Theme Logic
  const { theme } = useStore();
  
  useEffect(() => {
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Remove previous classes if any, though we use data-theme now
    
    if (theme === 'system') {
      root.setAttribute('data-theme', systemTheme);
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = document.documentElement;
      root.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <div>
      <Navbar />
      
      {/* ProgressBar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero / About Section */}
      <Section id="about" className="pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6"
            >
              Migbert Yanez
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-neon-blue mb-6 font-mono"
            >
              {t('hero.role')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg leading-relaxed mb-8 max-w-lg"
            >
              {t('about.content')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-shadow"
              >
                {t('hero.contact_me')}
              </button>
              
              <a 
                href={currentCv}
                download={`Curriculum-Migbert-Yanez-${currentLanguage}.pdf`}
                className="px-8 py-3 rounded-full border border-white/20 hover:border-neon-blue hover:text-neon-blue transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                {t('hero.download_cv')}
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <ProfileImage />
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title={t('experience.title')}>
        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-neon-blue to-purple-900/0"></div>
          
          {(t('experience.jobs', { returnObjects: true }) as any[]).map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`md:w-1/2 ml-12 md:ml-0 relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
            >
              <div className={`absolute top-6 w-6 h-6 rounded-full shadow-[0_0_10px_#00f3ff] hidden md:block ${
                index % 2 === 0 
                  ? '-right-3 bg-neon-blue' 
                  : '-left-3 bg-neon-purple shadow-[0_0_10px_#bc13fe]'
              }`}></div>
              
              <div className={`glass-panel p-8 hover:bg-white/5 transition-colors ${index % 2 !== 0 ? 'border-neon-purple/20' : ''}`}>
                <span className={`${index % 2 === 0 ? 'text-neon-blue' : 'text-neon-purple'} font-mono text-sm`}>
                  {job.period}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{job.role}</h3>
                <h4 className="text-gray-400 mb-4">{job.company}</h4>
                <p className="text-sm">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title={t('skills.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Frontend", icon: <Code size={40} className="text-neon-blue" />, skills: ["React", "JavaScript", "HTML5/CSS3", "Tailwind"] },
             { title: "Backend", icon: <Server size={40} className="text-neon-purple" />, skills: ["PHP (Laravel)", "Python (Django)", "Node.js"] },
             { title: "DevOps", icon: <Terminal size={40} className="text-green-400" />, skills: ["Docker", "Kubernetes", "CI/CD", "Linux VPS"] },
             { title: "Database", icon: <Database size={40} className="text-yellow-400" />, skills: ["MySQL", "PostgreSQL", "Redis"] }
           ].map((category, index) => (
             <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass-panel p-6 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow"
             >
               <div className="mb-4 p-4 rounded-full bg-white/5">
                 {category.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
               <ul className="space-y-2">
                 {category.skills.map(skill => (
                   <li key={skill} className="text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm inline-block m-1">{skill}</li>
                 ))}
               </ul>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title={t('nav.contact')}>
         <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl mb-12 text-gray-400">
              {t('contact.text')}
            </p>
            
            <div className="flex justify-center gap-8">
               <a href="mailto:migbert.yanez@gmail.com" className="group">
                 <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-neon-blue/20 transition-all">
                    <Mail size={32} className="text-white group-hover:text-neon-blue" />
                 </div>
                 <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">Email</span>
               </a>
               
               <a href="https://linkedin.com/in/migbert-yanez-cana" target="_blank" rel="noopener noreferrer" className="group">
                 <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-neon-blue/20 transition-all">
                    <Linkedin size={32} className="text-white group-hover:text-neon-blue" />
                 </div>
                 <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">LinkedIn</span>
               </a>
               
               <a href="https://github.com/migbertweb" target="_blank" rel="noopener noreferrer" className="group">
                 <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-neon-blue/20 transition-all">
                    <Github size={32} className="text-white group-hover:text-neon-blue" />
                 </div>
                 <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">GitHub</span>
               </a>
            </div>
         </div>
         
         <footer className="mt-20 text-center text-gray-500 text-sm">
            <p>{t('contact.footer')}</p>
         </footer>
      </Section>
    </div>
  );
}

export default App;
