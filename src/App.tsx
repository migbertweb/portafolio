import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProfileImage } from './components/ProfileImage';
import { FeaturedProjects } from './components/FeaturedProjects';
import { StatsBar } from './components/StatsBar';
import { CursorFollower } from './components/CursorFollower';
import { MouseGlow } from './components/MouseGlow';
import { YoutubeCarousel } from './components/YoutubeCarousel';
import { GitHubRepos } from './components/GitHubRepos';
import { useStore } from './store/useStore';
import { Github, Linkedin, Mail, Download, Code, Server, Terminal, Database } from 'lucide-react';
import cvEs from './assets/Curriculum-es.pdf';
import cvEn from './assets/Curriculum-en.pdf';
import cvPt from './assets/Curriculum-pt.pdf';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
}

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
      const sections = ['about', 'projects', 'experience', 'youtube', 'github', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 300;

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

  // Dynamic SEO meta per locale
  useEffect(() => {
    document.title = `Migbert Yanez | ${t('hero.role')}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('seo.description'));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('seo.og_description'));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Migbert Yanez | ${t('hero.role')}`);
  }, [currentLanguage, t]);

  return (
    <div>
      <Navbar />
      
      {/* ProgressBar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple origin-left z-50"
        style={{ scaleX }}
      />

      {/* Mouse effects */}
      <CursorFollower />
      <MouseGlow />

      {/* Hero / About Section */}
      <Section id="about" className="pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 leading-tight"
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
            
            {/* Freelance CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue text-sm font-mono mb-3">
                {t('contact.cta_subtitle')}
              </span>
            </motion.div>

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

      {/* Stats Bar */}
      <StatsBar />

      {/* Featured Projects Section */}
      <Section id="projects" title={t('projects.title')}>
        <FeaturedProjects />
      </Section>

      {/* Experience Section */}
      <Section id="experience" title={t('experience.title')}>
        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-neon-blue to-purple-900/0"></div>
          
          {(t('experience.jobs', { returnObjects: true }) as Job[]).map((job, index) => (
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

      {/* YouTube Videos Section */}
      <Section id="youtube" title={t('youtube.title')}>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          {t('youtube.description')}
        </p>
        <YoutubeCarousel />
      </Section>

      {/* GitHub Repos Section */}
      <Section id="github" title={t('github.title')}>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          {t('github.description')}
        </p>
        <GitHubRepos />
      </Section>

      {/* Skills Section */}
      <Section id="skills" title={t('skills.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: t('skills.categories.frontend'), icon: <Code size={40} className="text-neon-blue" />, skills: ["React", "JavaScript", "HTML5/CSS3", "Tailwind"], accent: "border-neon-blue/30 text-neon-blue bg-neon-blue/10" },
             { title: t('skills.categories.backend'), icon: <Server size={40} className="text-neon-purple" />, skills: ["PHP (Laravel)", "Python (Django)", "Node.js"], accent: "border-neon-purple/30 text-neon-purple bg-neon-purple/10" },
             { title: t('skills.categories.devops'), icon: <Terminal size={40} className="text-green-400" />, skills: ["Docker", "Kubernetes", "CI/CD", "Linux VPS"], accent: "border-green-400/30 text-green-400 bg-green-400/10" },
             { title: t('skills.categories.database'), icon: <Database size={40} className="text-yellow-400" />, skills: ["MySQL", "PostgreSQL", "Redis"], accent: "border-yellow-400/30 text-yellow-400 bg-yellow-400/10" }
           ].map((category, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-panel p-6 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow"
             >
               <div className="mb-4 p-4 rounded-full bg-white/5">
                 {category.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
               <div className="flex flex-wrap justify-center gap-2">
                 {category.skills.map(skill => (
                   <span key={skill} className={`px-3 py-1 rounded-full text-xs font-mono border ${category.accent}`}>
                     {skill}
                   </span>
                 ))}
               </div>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title={t('nav.contact')}>
         <div className="max-w-2xl mx-auto text-center">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono">
                {t('contact.available')}
              </span>
            </motion.div>

            <p className="text-xl mb-8 text-gray-400">
              {t('contact.text')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
               <a 
                  href="mailto:migbert.yanez@gmail.com?subject=Vamos%20conversar%20-%20Freelance"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-shadow flex items-center gap-2"
               >
                  <Mail size={18} />
                  {t('contact.schedule')}
               </a>
               
               <a 
                  href="https://www.upwork.com/freelancers/~01d443f2b06423fe93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-white/20 hover:border-green-400 hover:text-green-400 transition-colors flex items-center gap-2"
               >
                  <span className="text-lg font-bold">U</span>
                  {t('contact.upwork')}
               </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-8">
               <a href="https://wa.me/5547997470887" target="_blank" rel="noopener noreferrer" className="group">
                 <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:text-green-400">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                 </div>
                 <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">WhatsApp</span>
               </a>
               
               <a href="https://github.com/migbertweb" target="_blank" rel="noopener noreferrer" className="group">
                 <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-neon-blue/20 transition-all">
                    <Github size={32} className="text-white group-hover:text-neon-blue" />
                 </div>
                 <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">GitHub</span>
               </a>

               <a href="https://linkedin.com/in/migbert-yanez-cana" target="_blank" rel="noopener noreferrer" className="group">
                 <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center group-hover:bg-neon-blue/20 transition-all">
                    <Linkedin size={32} className="text-white group-hover:text-neon-blue" />
                 </div>
                 <span className="block mt-2 text-sm text-gray-400 group-hover:text-white">LinkedIn</span>
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
