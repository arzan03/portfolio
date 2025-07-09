'use client';
import EnhancedGlobe3D from './EnhancedGlobe3D';
import Terminal from './Terminal';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-24 pb-16">
      {/* Enhanced floating orbs for more immersive feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Sheikh Arzan Ashraf
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-4 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          DevOps Engineer & Cloud Architect
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Building secure, scalable, and cloud-native systems with cutting-edge technologies
        </motion.p>

        <motion.div
          className="mb-16 w-full max-w-[99vw] mx-auto px-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Enhanced Globe and Terminal Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24 2xl:gap-32">
            {/* Enhanced Globe Section */}
            <motion.div 
              className="flex flex-col items-center lg:items-start space-y-6 flex-1 min-w-0 lg:-ml-16 xl:-ml-24 2xl:-ml-32"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="text-center lg:text-left w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-3">
                  Tech Ecosystem
                </h3>
                <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto lg:mx-0">
                  Orchestrating cloud-native solutions with modern DevOps tools
                </p>
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <div className="w-full max-w-lg lg:max-w-xl">
                  <EnhancedGlobe3D />
                </div>
              </div>
            </motion.div>
            
            {/* Terminal Section */}
            <motion.div 
              className="flex flex-col items-center lg:items-end space-y-6 flex-1 min-w-0 lg:-mr-16 xl:-mr-24 2xl:-mr-32"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-center lg:text-right w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-3">
                  Live Development
                </h3>
                <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto lg:ml-auto lg:mr-0">
                  Real-time deployment pipeline and system orchestration
                </p>
              </div>
              <div className="w-full flex justify-center lg:justify-end">
                <Terminal />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="mailto:arzanashraf03@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-cyan-400/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300">
          <span className="text-sm mb-2">Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
