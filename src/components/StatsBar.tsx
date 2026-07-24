import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const statIcons = ['📅', '🚀', '⚡', '⭐'];

export const StatsBar = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t('stats.years'), label: t('stats.label_years') },
    { value: t('stats.projects'), label: t('stats.label_projects') },
    { value: t('stats.technologies'), label: t('stats.label_technologies') },
    { value: t('stats.clients'), label: t('stats.label_clients') },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="glass-panel p-6 text-center hover:bg-white/5 transition-all"
        >
          <div className="text-3xl mb-2">{statIcons[index]}</div>
          <div className="text-2xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
            {stat.value}
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};
