import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface OtherJob {
  role: string;
  company: string;
  period: string;
  note: string;
}

export const OtherExperience = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const items = t('experience.other', { returnObjects: true }) as OtherJob[];

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full glass-panel px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
          {t('experience.other_title')}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-neon-blue transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              <p className="text-sm text-gray-500 px-2">{t('experience.other_intro')}</p>
              {items.map((job, i) => (
                <div key={i} className="glass-panel p-5 border-white/5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">{job.role}</h4>
                    <span className="text-xs font-mono text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
