'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaUsers, FaMedal } from 'react-icons/fa';

const achievements = [
	{
		title: 'WEC-NITK CTF Champion',
		description:
			'Our team secured first place in the WEC-NITK Capture The Flag (CTF) competition, showcasing expertise in cybersecurity and problem-solving.',
		icon: FaTrophy,
		color: 'from-yellow-500 to-orange-500',
		year: '2023'
	},
	{
		title: 'JEE Mains Top Performer',
		description:
			'Ranked in the top 1.7% among 1.2 million attendees in JEE Mains, demonstrating academic excellence and competitive aptitude.',
		icon: FaMedal,
		color: 'from-blue-500 to-purple-500',
		year: '2022'
	},
	{
		title: 'ACM NITK Active Member',
		description:
			'Member of the Sanganitra SIG, contributing to technical discussions, event organization, and knowledge sharing within the computing community.',
		icon: FaUsers,
		color: 'from-green-500 to-teal-500',
		year: '2022-Present'
	},
	{
		title: 'CTF Challenge Creator',
		description:
			'Created 2 thought-provoking CTF challenges for competitions, demonstrating deep understanding of cybersecurity concepts and creative problem design.',
		icon: FaStar,
		color: 'from-purple-500 to-pink-500',
		year: '2023'
	}
];

export default function AchievementsSection() {
	return (
		<section id="achievements" className="relative py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
						Achievements & Recognition
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Milestones that reflect my dedication to excellence and continuous
						learning
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{achievements.map((achievement, index) => (
						<motion.div
							key={achievement.title}
							className="group relative overflow-hidden"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.15, duration: 0.8 }}
						>
							<div className="h-full p-8 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group-hover:scale-[1.02]">
								<div className="flex items-start gap-6">
									<div
										className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
									>
										<achievement.icon className="text-white text-2xl" />
									</div>

									<div className="flex-1">
										<div className="flex items-start justify-between mb-3">
											<h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
												{achievement.title}
											</h3>
											<span className="px-3 py-1 text-sm text-slate-400 bg-slate-700/50 rounded-full border border-slate-600/50">
												{achievement.year}
											</span>
										</div>

										<p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
											{achievement.description}
										</p>
									</div>
								</div>

								<div
									className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}
								></div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.8 }}
				>
					<div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-full">
						<div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
						<span className="text-slate-300 font-medium">
							Part of the team responsible for organizing Club&apos;s Annual Event
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
