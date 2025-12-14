import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { LanguageSelector } from './LanguageSelector';

import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { activeSection } = useStore();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center glass-panel m-4 rounded-2xl border-white/5"
    >
      <div className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent font-black text-2xl tracking-tighter">
        MIGBERT<span className="text-[var(--color-text)]">.DEV</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium tracking-wide transition-all hover:text-neon-blue ${
              activeSection === item.id ? 'text-neon-blue' : 'text-[var(--color-text-muted)]'
            }`}
          >
            {t(item.labelKey)}
          </button>
        ))}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <LanguageSelector />
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-[var(--color-text)] hover:text-neon-blue transition-colors"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 glass-panel flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-medium p-2 text-left ${
                activeSection === item.id ? 'text-neon-blue' : 'text-[var(--color-text-muted)]'
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
