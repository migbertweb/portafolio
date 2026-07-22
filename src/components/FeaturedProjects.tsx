import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Code, Cpu, Terminal } from 'lucide-react';

const projectIcons = [Code, Cpu, Terminal];

const projectColors = [
  'from-neon-blue to-cyan-400',
  'from-neon-purple to-pink-400',
  'from-green-400 to-emerald-500',
];

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as {
    title: string;
    description: string;
    stack: string;
    results: string;
  }[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {items.map((project, index) => {
        const Icon = projectIcons[index];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-panel p-6 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all group relative overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${projectColors[index]}`}
            />

            {/* Icon */}
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors w-fit mb-4">
              <Icon size={28} className="text-neon-blue" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-blue transition-colors leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.split(', ').map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Results */}
            <div className="bg-neon-blue/5 border border-neon-blue/10 rounded-lg p-3 mb-4">
              <p className="text-xs text-neon-blue font-semibold uppercase tracking-wider mb-1">
                Resultados
              </p>
              <p className="text-sm text-gray-300">{project.results}</p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-neon-blue text-sm font-medium group/link">
              <span>{t('projects.view_project')}</span>
              <ExternalLink
                size={14}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
