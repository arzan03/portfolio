'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands = [
  {
    command: 'echo "Hi, I\'m Sheikh Arzan Ashraf – DevOps | Cloud | Linux Enthusiast"',
    result: 'Hi, I\'m Sheikh Arzan Ashraf – DevOps | Cloud | Linux Enthusiast',
    type: 'text'
  },
  {
    command: 'ls -la skills/',
    result: [
      'drwxr-xr-x  12 arzan  staff   384 Jul  9 2025 .',
      'drwxr-xr-x   8 arzan  staff   256 Jul  9 2025 ..',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Docker',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Kubernetes',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 AWS',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 GCP',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Terraform',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Go',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Python',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Linux',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Git',
      '-rw-r--r--   1 arzan  staff    64 Jul  9 2025 Jenkins'
    ],
    type: 'list'
  },
  {
    command: 'cat about.md',
    result: `# Sheikh Arzan Ashraf
## DevOps Engineer & Cloud Architect

🚀 Passionate about building scalable and resilient systems
🔧 Expert in containerization and orchestration
☁️  Cloud infrastructure automation specialist
📈 Performance optimization and monitoring enthusiast

### Current Focus:
- Kubernetes orchestration
- Infrastructure as Code
- CI/CD pipeline optimization
- Cloud-native architectures`,
    type: 'markdown'
  },
  {
    command: 'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"',
    result: [
      'NAMES                STATUS              PORTS',
      'portfolio-app        Up 2 hours          0.0.0.0:3000->3000/tcp',
      'redis-cache          Up 2 hours          0.0.0.0:6379->6379/tcp',
      'monitoring-stack     Up 2 hours          0.0.0.0:9090->9090/tcp'
    ],
    type: 'table'
  },
  {
    command: 'kubectl get pods -n production',
    result: [
      'NAME                              READY   STATUS    RESTARTS   AGE',
      'web-deployment-7d4b8c9f6d-2xkj8   1/1     Running   0          2d',
      'api-deployment-8f5a7b2c3e-9plm4   1/1     Running   0          2d',
      'db-deployment-6c9d2e4f7a-5qwn2    1/1     Running   0          5d'
    ],
    type: 'table'
  }
];

const Terminal = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const typeCommand = () => {
      setIsTyping(true);
      setShowResult(false);
      setCurrentText('');
      
      const command = commands[currentCommandIndex].command;
      let charIndex = 0;
      
      const typeChar = () => {
        if (charIndex <= command.length) {
          setCurrentText(command.slice(0, charIndex));
          charIndex++;
          timeoutId = setTimeout(typeChar, 50 + Math.random() * 30);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setShowResult(true);
            setTimeout(() => {
              setCurrentCommandIndex((prev: number) => (prev + 1) % commands.length);
            }, 3000);
          }, 500);
        }
      };
      
      typeChar();
    };

    typeCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommandIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev: boolean) => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);

  const renderResult = () => {
    const current = commands[currentCommandIndex];
    
    switch (current.type) {
      case 'text':
        return (
          <motion.div 
            className="text-cyan-300 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {current.result}
          </motion.div>
        );
      
      case 'list':
        return (
          <motion.div 
            className="mt-2 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Array.isArray(current.result) && current.result.map((item, index) => (
              <motion.div
                key={index}
                className="text-gray-300 text-xs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        );
      
      case 'markdown':
        return (
          <motion.div 
            className="mt-2 text-gray-300 whitespace-pre-line text-xs leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {current.result}
          </motion.div>
        );
      
      case 'table':
        return (
          <motion.div 
            className="mt-2 space-y-1 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Array.isArray(current.result) && current.result.map((row, index) => (
              <motion.div
                key={index}
                className={`text-xs ${index === 0 ? 'text-yellow-400 font-bold' : 'text-gray-300'}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {row}
              </motion.div>
            ))}
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div 
      ref={terminalRef}
      className="w-full max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal header */}
      <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <motion.div 
            className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div 
            className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div 
            className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        <div className="mx-auto text-gray-400 text-sm font-mono flex items-center gap-2">
          <span className="text-cyan-400">~/portfolio</span>
          <span className="text-green-400 text-xs">●</span>
          <span className="text-xs">online</span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto">
        {/* Command line */}
        <div className="flex items-start">
          <span className="text-purple-400 mr-2 flex-shrink-0">sheikh-arzan@devops:~$</span>
          <div className="flex-1">
            <span className="text-green-400">{currentText}</span>
            {(isTyping || !showResult) && (
              <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                █
              </span>
            )}
          </div>
        </div>

        {/* Command result */}
        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              key={currentCommandIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              {renderResult()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional info */}
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-between items-center">
            <span>Interactive DevOps Terminal</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Live Session
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Terminal;
