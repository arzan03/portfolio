'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in DevOps and cloud architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a href="mailto:arzanashraf03@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-300">
                    arzanashraf03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-teal-600">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a href="tel:+91-7006009200" className="text-white hover:text-green-400 transition-colors duration-300">
                    +91-7006009200
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">Srinagar, Kashmir</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/arzanashraf03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/arzan03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50">
              <div className="text-6xl mb-6">💼</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I&apos;m always interested in discussing new opportunities, 
                innovative projects, and ways to contribute to meaningful technology solutions.
              </p>
              <a
                href="mailto:arzanashraf03@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
              >
                <FaEnvelope />
                Send Message
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-700/50 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-slate-400">
            © 2025 Sheikh Arzan Ashraf. Built with Next.js, Tailwind CSS, and Three.js
          </p>
        </motion.div>
      </div>
    </section>
  );
}
