import React from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const FlagBR = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-auto rounded-sm shadow-sm">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#009c3b" d="M0 0h640v480H0z"/>
      <path fill="#ffdf00" d="M320 40L40 240l280 200 280-200Z"/>
      <circle cx="320" cy="240" r="85" fill="#002776"/>
      <path fill="#fff" d="M239.5 258.4c41.3 35.5 119.5 11.5 156.4-15 4-2.8-5.3 11-13 16.5-35.4 25.4-106.3 31.7-143.4-1.5z"/>
    </g>
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-auto rounded-sm shadow-sm">
    <path fill="#c60b1e" d="M0 0h640v120H0zm0 360h640v120H0z"/>
    <path fill="#ffc400" d="M0 120h640v240H0z"/>
    <g transform="scale(0.8) translate(70, 70)">
      <path fill="#c60b1e" d="M125 150h120v200H125z"/>
      <path fill="#ffc400" d="M185 150v200m-60-100h120" stroke="#fff" strokeWidth="2"/>
    </g>
  </svg>
);

const FlagUS = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-auto rounded-sm shadow-sm">
    <path fill="#bd3d44" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="M0 36.9h640v37H0zm0 73.8h640v37H0zm0 73.9h640v37H0zm0 73.8h640v37H0zm0 73.9h640v37H0zm0 73.8h640v37H0z"/>
    <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
    <g fill="#fff">
        <circle cx="32" cy="24" r="5"/><circle cx="96" cy="24" r="5"/><circle cx="160" cy="24" r="5"/><circle cx="224" cy="24" r="5"/>
        <circle cx="64" cy="48" r="5"/><circle cx="128" cy="48" r="5"/><circle cx="192" cy="48" r="5"/>
        <circle cx="32" cy="72" r="5"/><circle cx="96" cy="72" r="5"/><circle cx="160" cy="72" r="5"/><circle cx="224" cy="72" r="5"/>
        <circle cx="64" cy="96" r="5"/><circle cx="128" cy="96" r="5"/><circle cx="192" cy="96" r="5"/>
    </g>
  </svg>
);

const languages = [
  { code: 'pt', label: 'Português', flag: <FlagBR /> },
  { code: 'es', label: 'Español', flag: <FlagES /> },
  { code: 'en', label: 'English', flag: <FlagUS /> },
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
