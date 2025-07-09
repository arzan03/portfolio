'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaGitlab } from 'react-icons/fa';

const projects = [
	{
		title: 'SecureShare File API',
		description: 'A secure file sharing API built with Go and Fiber framework, featuring JWT-based authentication, MinIO object storage, and parallel processing for optimal performance.',
		longDescription: `Designed and implemented a secure file sharing API with Go and Fiber framework, featuring JWT-based authentication. Integrated MinIO object storage for scalable file management with secure presigned URL generation. Built parallel processing for batch operations to optimize performance for file uploads, downloads, and deletions using concurrency. Implemented role-based access control with admin and user privileges for secure file management. Containerized the application with Docker and added CI/CD pipeline with GitHub Actions for automated testing.`,
		tech: ['Go', 'MongoDB', 'MinIO', 'Docker', 'GitHub Actions', 'JWT', 'Fiber'],
		github: 'https://github.com/arzan03/SecureShare',
		demo: null,
		image: '🔐',
		category: 'Backend Development',
		featured: true,
	},
	{
		title: 'Rails Application Deployment',
		description: 'Complete containerized deployment solution for Rails applications using Docker, Kubernetes, and Nginx with automated CI/CD pipeline.',
		longDescription: `Packaged and deployed Rails app using Docker and Kubernetes, ensuring scalability and portability. Established connections between containers, configured Nginx for reverse proxy with load balancing. Enabled data persistence, assigned static IPs to containers, and shared storage among instances. Utilized GitLab Runner for CI/CD pipeline to automate Docker image creation and deployment to Docker Hub. Implemented a cronjob-based backup solution to perform regular backups of data and code.`,
		tech: ['Linux', 'Docker', 'Nginx', 'Kubernetes', 'GitLab CI', 'Rails'],
		github: 'https://gitlab.com/iris1610710/iris-systems-tasks',
		demo: null,
		image: '🚀',
		category: 'DevOps',
		featured: true,
	},
	{
		title: 'Docker-Based Virtual Router',
		description: 'Network router simulation using Docker containers with IP forwarding, NAT configuration, and multi-network communication.',
		longDescription: `Implemented a virtual router using Docker containers to simulate a network router setup. Configured IP forwarding and NAT using iptables for routing traffic between Docker networks. Set up multiple Ubuntu-based Docker containers connected to different virtual networks, routed via the central router container. Enabled packet forwarding and network address translation (NAT) to allow communication between containers in different networks. Utilized Docker's bridge network driver to create isolated subnets and assigned static IP addresses to each container.`,
		tech: ['Docker', 'Networking', 'Linux', 'Bash', 'iptables', 'NAT'],
		github: 'https://github.com/arzan03/virtual-router/',
		demo: null,
		image: '🌐',
		category: 'Networking',
		featured: false,
	},
	{
		title: 'Custom Ping Utility',
		description: 'Advanced ping utility implementation in Python with comprehensive network statistics and ICMP packet analysis.',
		longDescription: `Implemented checksum calculation for ICMP packets to ensure data integrity during transmission. Enabled multi-request pinging with the ability to track and report RTT for each request. Incorporated comprehensive statistics, including packet loss percentage, minimum, maximum, average RTT, and RTT standard deviation. Utilized argparse for a user-friendly command-line interface, allowing customization of the target and the number of ping requests.`,
		tech: ['Python', 'Socket Programming', 'Networking', 'ICMP', 'Statistics'],
		github: 'https://github.com/arzan03/custom-ping',
		demo: null,
		image: '📡',
		category: 'Networking',
		featured: false,
	},
];

export default function ProjectsSection() {
	const featuredProjects = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);

	return (
		<section id="projects" className="relative py-24 px-6">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						Showcasing my expertise in DevOps, cloud architecture, and full-stack
						development
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="grid lg:grid-cols-2 gap-8 mb-16">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.title}
							className="group relative overflow-hidden rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2, duration: 0.8 }}
							whileHover={{ y: -5 }}
						>
							<div className="p-8">
								<div className="flex items-start justify-between mb-4">
									<div className="text-4xl mb-4">{project.image}</div>
									<span className="px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
										{project.category}
									</span>
								</div>

								<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
									{project.title}
								</h3>

								<p className="text-slate-300 mb-6 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300"
									>
										{project.github.includes('gitlab') ? (
											<FaGitlab />
										) : (
											<FaGithub />
										)}
										View Code
									</a>
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300"
										>
											<FaExternalLinkAlt />
											Live Demo
										</a>
									)}
								</div>
							</div>

							<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
						</motion.div>
					))}
				</div>

				{/* Other Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					<h3 className="text-2xl font-bold text-slate-300 mb-8 text-center">
						Additional Projects
					</h3>
					<div className="grid md:grid-cols-2 gap-6">
						{otherProjects.map((project, index) => (
							<motion.div
								key={project.title}
								className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								whileHover={{ y: -2 }}
							>
								<div className="flex items-center justify-between mb-3">
									<span className="text-2xl">{project.image}</span>
									<span className="px-2 py-1 text-xs text-purple-400 bg-purple-400/10 rounded border border-purple-400/20">
										{project.category}
									</span>
								</div>

								<h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
									{project.title}
								</h4>

								<p className="text-slate-400 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-1 mb-4">
									{project.tech.slice(0, 4).map((tech) => (
										<span
											key={tech}
											className="px-2 py-0.5 text-xs bg-slate-700/40 text-slate-400 rounded"
										>
											{tech}
										</span>
									))}
									{project.tech.length > 4 && (
										<span className="px-2 py-0.5 text-xs text-slate-500">
											+{project.tech.length - 4} more
										</span>
									)}
								</div>

								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300"
								>
									{project.github.includes('gitlab') ? (
										<FaGitlab />
									) : (
										<FaGithub />
									)}
									View Project
								</a>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
