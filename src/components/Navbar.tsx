'use client';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white">
            SA
          </div>
          <div>
            <span className="text-lg font-bold text-white">Sheikh Arzan Ashraf</span>
            <p className="text-sm text-slate-400 hidden md:block">DevOps Engineer</p>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="https://linkedin.com/in/arzan03"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-slate-800/50 hover:bg-blue-600/20 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <FaLinkedin className="text-slate-400 group-hover:text-blue-400 text-lg transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/arzan03"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="p-2 rounded-full bg-slate-800/50 hover:bg-gray-600/20 border border-slate-700/50 hover:border-gray-500/50 transition-all duration-300 group"
          >
            <FaGithub className="text-slate-400 group-hover:text-gray-300 text-lg transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
