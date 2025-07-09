'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands = [
  {
    command: 'whoami',
    result: 'Sheikh Arzan Ashraf',
    delay: 1200
  },
  {
    command: 'pwd',
    result: '/Users/arzan03/portfolio',
    delay: 900
  },
  {
    command: 'ls -la',
    result: `total 48
drwxr-xr-x  8 arzan03 portfolio   256 Jul  9 12:34 .
drwxr-xr-x  5 arzan03 portfolio   160 Jul  9 12:30 ..
-rw-r--r--  1 arzan03 portfolio   234 Jul  9 12:32 .gitignore
-rw-r--r--  1 arzan03 portfolio  1024 Jul  9 12:34 README.md
drwxr-xr-x  4 arzan03 portfolio   128 Jul  9 12:33 docker/
drwxr-xr-x  6 arzan03 portfolio   192 Jul  9 12:33 kubernetes/
-rw-r--r--  1 arzan03 portfolio   512 Jul  9 12:34 main.tf
drwxr-xr-x  3 arzan03 portfolio    96 Jul  9 12:33 src/`,
    delay: 1800
  },
  {
    command: 'docker ps',
    result: `CONTAINER ID   IMAGE           COMMAND                  CREATED       STATUS       PORTS                    NAMES
a1b2c3d4e5f6   nginx:alpine    "/docker-entrypoint.…"   2 hours ago   Up 2 hours   0.0.0.0:80->80/tcp      portfolio-web
f6e5d4c3b2a1   redis:latest    "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:6379->6379/tcp  portfolio-cache`,
    delay: 1500
  },
  {
    command: 'kubectl get pods',
    result: `NAME                         READY   STATUS    RESTARTS   AGE
web-deployment-7d4b8c9f6d   1/1     Running   0          2d
api-deployment-8f5a7b2c3e   1/1     Running   0          2d
db-deployment-6c9d2e4f7a    1/1     Running   0          5d`,
    delay: 1300
  },
  {
    command: 'cat ~/.aws/config',
    result: `[default]
region = us-west-2
output = json

[profile production]
region = us-east-1
role_arn = arn:aws:iam::123456789012:role/DevOpsRole`,
    delay: 1000
  },
  {
    command: 'terraform --version',
    result: `Terraform v1.5.0
on darwin_arm64`,
    delay: 800
  },
  {
    command: 'echo "Welcome to my DevOps workspace! 🚀"',
    result: 'Welcome to my DevOps workspace! 🚀',
    delay: 1100
  }
];

export default function Terminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<Array<{cmd: string, result: string}>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const executeCommand = () => {
      setIsTyping(true);
      setShowResult(false);
      setTypedCommand('');
      
      const currentCmd = commands[currentCommandIndex];
      let charIndex = 0;
      
      // Type the command character by character
      const typeChar = () => {
        if (charIndex < currentCmd.command.length) {
          setTypedCommand(currentCmd.command.slice(0, charIndex + 1));
          charIndex++;
          // Much slower, more realistic typing speed with natural variations
          timeoutId = setTimeout(typeChar, 120 + Math.random() * 80);
        } else {
          setIsTyping(false);
          // Show result after command is typed with a brief pause
          setTimeout(() => {
            setShowResult(true);
            setCommandHistory(prev => [...prev, {cmd: currentCmd.command, result: currentCmd.result}]);
            // Wait longer before moving to next command
            setTimeout(() => {
              setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
            }, currentCmd.delay);
          }, 300);
        }
      };
      
      typeChar();
    };

    executeCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommandIndex]);

  // Realistic cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [showResult, commandHistory]);

  return (
    <div className="flex justify-center">
      {/* Terminal Window - 70x22 resolution */}
      <div className="bg-black rounded-lg shadow-2xl border border-gray-800 overflow-hidden font-mono">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700 relative">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-300 text-sm absolute left-1/2 transform -translate-x-1/2">Terminal — arzan03@portfolio</div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Content - 70 columns x 22 rows */}
        <div 
          ref={terminalRef}
          className="p-3 overflow-y-auto bg-black text-green-400"
          style={{ 
            fontFamily: 'Monaco, "Cascadia Code", "SF Mono", Consolas, monospace',
            fontSize: '14px',
            lineHeight: '1.2',
            width: '70ch', // 70 character width (narrower)
            height: '22em', // 22 line height
            minWidth: '70ch',
            minHeight: '22em'
          }}
        >
          {/* Welcome message */}
          <div className="text-gray-400 mb-4">
            Last login: Wed Jul  9 12:30:15 on ttys001<br/>
            arzan03@portfolio:~$ 
          </div>

          {/* Command History */}
          {commandHistory.slice(-3).map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex">
                <span className="text-blue-400">arzan03@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-green-400">~</span>
                <span className="text-white">$ </span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="text-gray-300 whitespace-pre-line mt-1 ml-0">
                {item.result}
              </div>
            </div>
          ))}

          {/* Current Command Line */}
          <div className="flex">
            <span className="text-blue-400">arzan03@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-green-400">~</span>
            <span className="text-white">$ </span>
            <span className="text-white">{typedCommand}</span>
            {(isTyping || !showResult) && (
              <span className={`text-white ml-0 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                ▋
              </span>
            )}
          </div>

          {/* Current Result */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 whitespace-pre-line mt-1"
              >
                {commands[currentCommandIndex].result}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active cursor when not typing */}
          {!isTyping && showResult && (
            <div className="flex mt-2">
              <span className="text-blue-400">arzan03@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-green-400">~</span>
              <span className="text-white">$ </span>
              <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                ▋
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}