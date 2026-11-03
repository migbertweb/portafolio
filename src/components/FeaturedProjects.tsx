import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';

const projectColors = [
  'from-neon-blue to-cyan-400',
  'from-neon-purple to-pink-400',
  'from-green-400 to-emerald-500',
];

interface Project {
  title: string;
  impact: string;
  impact_label: string;
  description: string;
  stack: string;
  results: string;
  url: string;
  code?: string;
}

export const FeaturedProjects = () => {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as Project[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6 max-w-6xl mx-auto">
      {items.map((project, index) => {
        const isFeatured = index === 0;
        const CardContent = (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-panel p-6 md:p-7 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all group relative overflow-hidden h-full flex flex-col"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${projectColors[index % projectColors.length]}`} />

            {/* Impact metric (scanned first) */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className={`font-black leading-none bg-clip-text text-transparent bg-gradient-to-r ${projectColors[index % projectColors.length]} ${
                isFeatured ? 'text-6xl' : 'text-4xl'
              }`}>
                {project.impact}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[var(--color-text-muted)] font-mono">
                {project.impact_label}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors leading-tight">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

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

            <div className="bg-neon-blue/5 border border-neon-blue/10 rounded-lg p-3 mb-4">
              <p className="text-xs text-neon-blue font-semibold uppercase tracking-wider mb-1">
                {t('projects.results_label')}
              </p>
              <p className="text-sm text-gray-300">{project.results}</p>
            </div>

            <div className="mt-auto flex items-center gap-5 text-sm font-medium">
              <span className="flex items-center gap-2 text-neon-blue group/link">
                <span>{t('projects.view_project')}</span>
                <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </span>
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                  {t('projects.code')}
                </a>
              )}
            </div>
          </motion.div>
        );

        if (project.url) {
          return (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block cursor-pointer ${isFeatured ? 'md:col-span-2' : ''}`}
            >
              {CardContent}
            </a>
          );
        }

        return <div key={index}>{CardContent}</div>;
      })}
    </div>
  );
};
