import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code, Terminal, Boxes, Cpu } from 'lucide-react';

const repositories = [
  {
    name: 'test_backend_python_dokploy',
    description: 'Backend en Python desplegado con Dokploy',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 0,
    forks: 0,
    url: 'https://github.com/migbertweb/test_backend_python_dokploy',
    icon: Terminal,
  },
  {
    name: 'test_frontend_react_dokploy',
    description: 'Frontend en React desplegado con Dokploy',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 0,
    forks: 0,
    url: 'https://github.com/migbertweb/test_frontend_react_dokploy',
    icon: Boxes,
  },
  {
    name: 'mi-cluster-k3s-hetzner',
    description: 'Mi Cluster K3S con Terraform en Hetzner',
    language: 'HCL',
    languageColor: '#ff6e9f',
    stars: 0,
    forks: 0,
    url: 'https://github.com/migbertweb/mi-cluster-k3s-hetzner',
    icon: Code,
  },
  {
    name: 'ghaction-k8s-ksops',
    description: 'Instala y configura herramientas esenciales para Kubernetes + SOPS',
    language: 'Shell',
    languageColor: '#89e051',
    stars: 0,
    forks: 0,
    url: 'https://github.com/migbertweb/ghaction-k8s-ksops',
    icon: Terminal,
  },
  {
    name: 'django_crud_react',
    description: 'CRUD con API Django como Backend y Frontend en React',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 1,
    forks: 0,
    url: 'https://github.com/migbertweb/django_crud_react',
    icon: Github,
  },
  {
    name: 'DHT11_Oled_Display',
    description: 'Proyecto IoT con sensor DHT11 y display OLED',
    language: 'C',
    languageColor: '#555555',
    stars: 0,
    forks: 0,
    url: 'https://github.com/migbertweb/DHT11_Oled_Display',
    icon: Cpu,
  },
];

export const GitHubRepos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {repositories.map((repo, index) => (
        <motion.a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="glass-panel p-6 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all group block"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-neon-blue/10 transition-colors">
              <repo.icon size={28} className="text-neon-blue" />
            </div>
            <ExternalLink size={20} className="text-gray-500 group-hover:text-neon-blue transition-colors" />
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors line-clamp-1">
            {repo.name}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
            {repo.description}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <span 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: repo.languageColor }}
            />
            <span className="text-xs text-gray-400 font-mono">{repo.language}</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star size={14} className={repo.stars > 0 ? 'text-yellow-400' : 'text-gray-600'} />
              <span className={repo.stars > 0 ? 'text-yellow-400' : 'text-gray-600'}>
                {repo.stars}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={14} className={repo.forks > 0 ? 'text-neon-purple' : 'text-gray-600'} />
              <span className={repo.forks > 0 ? 'text-neon-purple' : 'text-gray-600'}>
                {repo.forks}
              </span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
