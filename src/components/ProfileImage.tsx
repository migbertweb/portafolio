import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import profileImg from '../assets/0275d3bd-eb18-49a9-acae-9bbcf1b2170d~1.jpg';

export const ProfileImage: React.FC = () => {
  return (
    <motion.div 
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2 
      }}
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
    >
      <div className="absolute inset-0 rounded-full border-4 border-neon-blue/30 animate-[pulse-glow_3s_infinite]" />
      <div className="absolute inset-4 rounded-full border-2 border-neon-purple/50 animate-[spin_10s_linear_infinite]" />
      
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden shadow-2xl shadow-neon-blue/20">
        <img 
          src={profileImg} 
          alt="Migbert Yanez" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Orbiting Icon */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 p-3 rounded-full border border-neon-blue shadow-lg shadow-neon-blue/50">
          <Code2 size={24} className="text-neon-blue" />
        </div>
      </motion.div>
    </motion.div>
  );
};
