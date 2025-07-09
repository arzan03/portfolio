'use client';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaDocker, FaGitAlt, FaLinux, FaAws, FaReact } from 'react-icons/fa';
import { SiGo, SiCplusplus, SiMongodb, SiNodedotjs, SiExpress, SiJenkins, SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiGooglecloud } from 'react-icons/si';

const skillCategories = [
	{
		title: 'Languages',
		color: 'from-blue-500 to-cyan-500',
		skills: [
			{ name: 'Go', icon: SiGo, level: 90 },
			{ name: 'Python', icon: FaPython, level: 85 },
			{ name: 'JavaScript', icon: FaJs, level: 80 },
			{ name: 'C/C++', icon: SiCplusplus, level: 75 },
		],
	},
	{
		title: 'DevOps & Cloud',
		color: 'from-purple-500 to-pink-500',
		skills: [
			{ name: 'Docker', icon: FaDocker, level: 95 },
			{ name: 'Kubernetes', icon: SiKubernetes, level: 90 },
			{ name: 'AWS', icon: FaAws, level: 85 },
			{ name: 'GCP', icon: SiGooglecloud, level: 80 },
			{ name: 'Terraform', icon: SiTerraform, level: 85 },
			{ name: 'Ansible', icon: SiAnsible, level: 75 },
		],
	},
	{
		title: 'Monitoring & Tools',
		color: 'from-green-500 to-teal-500',
		skills: [
			{ name: 'Prometheus', icon: SiPrometheus, level: 85 },
			{ name: 'Grafana', icon: SiGrafana, level: 80 },
			{ name: 'Jenkins', icon: SiJenkins, level: 85 },
			{ name: 'Git', icon: FaGitAlt, level: 95 },
			{ name: 'Linux', icon: FaLinux, level: 90 },
		],
	},
	{
		title: 'Development',
		color: 'from-orange-500 to-red-500',
		skills: [
			{ name: 'React', icon: FaReact, level: 80 },
			{ name: 'Node.js', icon: SiNodedotjs, level: 85 },
			{ name: 'Express', icon: SiExpress, level: 80 },
			{ name: 'MongoDB', icon: SiMongodb, level: 85 },
		],
	},
];

export default function SkillsSection() {
	return (
		<section id="skills" className="relative py-24 px-6">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
						Technical Expertise
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Proficient in modern technologies for building scalable, secure, and
						efficient systems
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							className="relative"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
						>
							<div className="h-full p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
								<div
									className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-6`}
								>
									{category.title}
								</div>

								<div className="space-y-4">
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skill.name}
											className="group"
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{
												delay: categoryIndex * 0.2 + skillIndex * 0.1,
												duration: 0.6,
											}}
										>
											<div className="flex items-center gap-3 mb-2">
												<skill.icon className="text-xl text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
												<span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
													{skill.name}
												</span>
											</div>
											<div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
												<motion.div
													className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level}%` }}
													viewport={{ once: true }}
													transition={{
														delay:
															categoryIndex * 0.2 +
															skillIndex * 0.1 +
															0.3,
														duration: 1,
														ease: 'easeOut',
													}}
												/>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Skills Grid */}
				<motion.div
					className="mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8, duration: 0.8 }}
				>
					<h3 className="text-2xl font-bold text-center text-slate-300 mb-8">
						Additional Technologies & Tools
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							'GitHub Actions',
							'GitLab CI',
							'MinIO',
							'Nginx',
							'Postman',
							'VS Code',
							'Bash',
							'SQL',
							'Fiber',
							'Mongoose',
							'EKS',
							'Boto3',
						].map((tech, index) => (
							<motion.span
								key={tech}
								className="px-4 py-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.05, duration: 0.5 }}
								whileHover={{ scale: 1.05 }}
							>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
