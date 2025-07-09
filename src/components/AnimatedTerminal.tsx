'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
	{ cmd: "$ whoami", out: "sheikh-arzan-ashraf" },
	{ cmd: "$ pwd", out: "/Users/sheikh-arzan/portfolio" },
	{ cmd: "$ docker ps", out: "CONTAINER ID   IMAGE           STATUS\nf3a2b1c4d5e6   portfolio:v1    Up 2 hours" },
	{ cmd: "$ kubectl get pods", out: "NAME                     READY   STATUS    RESTARTS\napp-deployment-xyz       1/1     Running   0" },
	{ cmd: "$ terraform plan", out: "Plan: 12 to add, 0 to change, 0 to destroy." },
	{ cmd: "$ go run main.go", out: "🚀 Server listening on port :8080" },
	{ cmd: "$ git status", out: "On branch main\nnothing to commit, working tree clean" },
	{ cmd: "$ echo 'DevOps Magic ✨'", out: "DevOps Magic ✨" },
	{ cmd: "$ aws ec2 describe-instances", out: "Instances: 5 running, 2 stopped" },
	{ cmd: "$ helm list", out: "NAME     NAMESPACE  REVISION  STATUS\napp      default    1         deployed" },
];

export default function AnimatedTerminal() {
	const [idx, setIdx] = useState(0);
	const [typed, setTyped] = useState("");
	const [showOut, setShowOut] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);

	useEffect(() => {
		setTyped("");
		setShowOut(false);
		let i = 0;
		const type = () => {
			if (i <= commands[idx].cmd.length) {
				setTyped(commands[idx].cmd.slice(0, i));
				i++;
				setTimeout(type, 50);
			} else {
				setTimeout(() => {
					setShowOut(true);
					setCommandHistory(prev => [...prev.slice(-2), commands[idx].cmd]);
				}, 600);
				setTimeout(() => setIdx((idx + 1) % commands.length), 3000);
			}
		};
		type();
	}, [idx]);

	return (
		<div className="w-full max-w-3xl mx-auto">
			{/* macOS Terminal Window */}
			<motion.div 
				className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-800/50 overflow-hidden backdrop-blur-sm"
				animate={{ height: isMinimized ? "48px" : "280px" }}
				transition={{ duration: 0.3 }}
			>
				{/* Terminal Header */}
				<div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-gray-700/50">
					<div className="flex gap-2">
						<button 
							className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff3b30] shadow-sm transition-colors"
							onClick={() => {/* Close functionality */}}
						></button>
						<button 
							className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] shadow-sm transition-colors"
							onClick={() => setIsMinimized(!isMinimized)}
						></button>
						<button 
							className="w-3 h-3 rounded-full bg-[#27ca3f] hover:bg-[#30d158] shadow-sm transition-colors"
							onClick={() => {/* Maximize functionality */}}
						></button>
					</div>
					<div className="flex-1 text-center">
						<span className="text-sm text-gray-400 font-medium">terminal — sheikh-arzan@devops-portfolio</span>
					</div>
				</div>
				
				{/* Terminal Content */}
				{!isMinimized && (
					<div className="p-6 h-56 bg-[#1e1e1e] font-mono text-sm overflow-hidden">
						{/* Command History */}
						<div className="space-y-1 mb-4 opacity-60">
							{commandHistory.map((cmd, i) => (
								<div key={i} className="text-gray-500 text-xs">
									<span className="text-green-400 mr-2">➜</span>
									{cmd}
								</div>
							))}
						</div>
						
						{/* Current Command */}
						<AnimatePresence mode="wait">
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
								className="space-y-3"
							>
								<div className="flex items-center">
									<span className="text-green-400 mr-2">➜</span>
									<span className="text-cyan-400">{typed}</span>
									<span className="animate-blink text-white">|</span>
								</div>
								{showOut && commands[idx].out && (
									<motion.div 
										className="text-gray-300 ml-4 whitespace-pre-line text-xs leading-relaxed"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										{commands[idx].out}
									</motion.div>
								)}
							</motion.div>
						</AnimatePresence>
						
						{/* Status Bar */}
						<div className="absolute bottom-2 right-4 text-xs text-gray-500">
							<span className="text-green-400">●</span> Online
						</div>
					</div>
				)}
			</motion.div>
		</div>
	);
}
