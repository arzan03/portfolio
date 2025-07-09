'use client';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const education = [
	{
		school: 'National Institute of Technology Karnataka',
		degree: 'B. Tech in Chemical Engineering',
		period: '2022 - 2026',
		location: 'Karnataka, India',
		description:
			'Pursuing Bachelor of Technology with focus on chemical processes, automation, and engineering principles.',
		icon: FaUniversity,
	},
	{
		school: 'Govt. Boys Higher Sec School',
		degree: 'Senior High School',
		period: 'Completed Jan 2022',
		location: 'Srinagar, Jammu and Kashmir',
		description:
			'Completed secondary education with strong foundation in science and mathematics.',
		icon: FaGraduationCap,
	},
];

const achievements = [
	'First place in WEC-NITK Capture The Flag (CTF) competition',
	'Top 1.7% among 1.2 million attendees in JEE Mains',
	'Active member of ACM NITK Sanganitra SIG',
	'Created CTF challenges and organized tech events',
];

export default function AboutSection() {
	return (
		<section id="about" className="relative py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
						About Me
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
						I&apos;m a passionate DevOps engineer and cloud architect, specializing in building secure,
						scalable infrastructure and automating complex deployment workflows.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 mb-16">
					{/* Education */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
							<FaUniversity className="text-cyan-500" />
							Education
						</h3>
						<div className="space-y-8">
							{education.map((edu, index) => (
								<motion.div
									key={index}
									className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2, duration: 0.6 }}
								>
									<div className="flex items-start gap-4">
										<div className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
											<edu.icon className="text-white text-xl" />
										</div>
										<div className="flex-1">
											<h4 className="text-xl font-semibold text-white mb-1">
												{edu.school}
											</h4>
											<p className="text-cyan-400 font-medium mb-1">
												{edu.degree}
											</p>
											<p className="text-slate-400 text-sm mb-2">
												{edu.period} • {edu.location}
											</p>
											<p className="text-slate-300 text-sm leading-relaxed">
												{edu.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Achievements */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
							<div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
							Achievements & Activities
						</h3>
						<div className="space-y-4">
							{achievements.map((achievement, index) => (
								<motion.div
									key={index}
									className="p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 group"
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
								>
									<div className="flex items-center gap-3">
										<div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
										<p className="text-slate-300 group-hover:text-white transition-colors duration-300">
											{achievement}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
