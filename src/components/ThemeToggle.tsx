
import React from 'react';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useStore();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={20} />;
      case 'dark': return <Moon size={20} />;
      case 'system': return <Laptop size={20} />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-neon-blue relative group"
      aria-label={`Switch theme (current: ${theme})`}
    >
      <motion.div
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {getIcon()}
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </span>
    </button>
  );
};
