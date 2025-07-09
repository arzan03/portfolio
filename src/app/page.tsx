import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/30 via-transparent to-slate-900/40"></div>
        <FloatingParticles />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-2">
          {['hero', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
            <div key={section} className="w-2 h-8 bg-white/20 rounded-full cursor-pointer hover:bg-cyan-400/60 transition-all duration-300"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
