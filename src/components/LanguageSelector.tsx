import React from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useStore();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/10 transition-colors cursor-pointer"
      >
        <Globe size={18} className="text-neon-blue" />
        <span className="uppercase font-bold text-sm tracking-widest">{currentLanguage}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-2 w-40 glass-panel overflow-hidden flex flex-col"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                currentLanguage === lang.code ? 'bg-white/5 text-neon-blue' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
