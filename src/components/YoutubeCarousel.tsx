import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const videos = [
  {
    videoId: 'YfAfGtO5eTg',
    title: 'Meu primeiro vídeo! Arch Linux, ThinkPad e liberdade para criar',
    description: 'Bem-vindos ao canal Migbert on Linux! Uma introdução ao mundo do software livre.',
    thumbnail: 'https://i.ytimg.com/vi/YfAfGtO5eTg/maxresdefault.jpg',
  },
  {
    videoId: '5sXarl1YzeA',
    title: 'curso de Dokploy #tutorial #docker',
    description: 'Playlist de mi curso de Dokploy - despliegue de aplicaciones con Docker.',
    thumbnail: 'https://i.ytimg.com/vi/5sXarl1YzeA/maxresdefault.jpg',
  },
  {
    videoId: '7MPlXn-J3L0',
    title: 'Hetzner: La nube sin cuentos — barato, fiable y perfecto para Kubernetes',
    description: 'Proveedor cloud barato y fiable, perfecto para practicar Kubernetes.',
    thumbnail: 'https://i.ytimg.com/vi/7MPlXn-J3L0/maxresdefault.jpg',
  },
  {
    videoId: '9lZk-Kv2UhI',
    title: 'Kitty + Zsh personalizados: rapidez y productividad en Linux',
    description: 'Configuración de Kitty y Zsh en Arch Linux con Zinit.',
    thumbnail: 'https://i.ytimg.com/vi/9lZk-Kv2UhI/maxresdefault.jpg',
  },
  {
    videoId: 'fYAS4yvL8P8',
    title: 'Conky en Linux | Personaliza tu Escritorio como un Pro',
    description: 'La herramienta más versátil para monitorear tu sistema Linux.',
    thumbnail: 'https://i.ytimg.com/vi/fYAS4yvL8P8/maxresdefault.jpg',
  },
  {
    videoId: 'YUzbVWrnyS0',
    title: '¡Mi primer video! Arch Linux, ThinkPad y libertad para crear',
    description: 'Introducción al mundo del software libre y open source.',
    thumbnail: 'https://i.ytimg.com/vi/YUzbVWrnyS0/maxresdefault.jpg',
  },
];

export const YoutubeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div 
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative group cursor-pointer">
              <a 
                href={`https://www.youtube.com/watch?v=${videos[currentIndex].videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={videos[currentIndex].thumbnail}
                    alt={videos[currentIndex].title}
                    className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-neon-blue/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(0,243,255,0.5)]">
                      <Play size={40} className="text-white ml-2" fill="white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                      {videos[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                      {videos[currentIndex].description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-neon-blue">
                      <span className="text-sm font-mono">Ver en YouTube</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-neon-blue/20 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
          aria-label="Previous video"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-neon-blue/20 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
          aria-label="Next video"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-neon-blue w-8 shadow-[0_0_10px_#00f3ff]' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <a 
          href="https://www.youtube.com/@MigbertonLinux"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors"
        >
          <span className="font-mono text-sm">Visitar canal @MigbertonLinux</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};
