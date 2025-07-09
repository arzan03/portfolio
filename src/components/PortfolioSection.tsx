'use client';

import Globe3D from "@/components/Globe3D";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import ProjectsSection from "@/components/ProjectsSection";

export default function PortfolioSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 py-8 md:py-16">
      {/* Left: 3D Globe */}
      <div className="md:w-1/2 w-full flex items-center justify-center relative z-10">
        <Globe3D />
      </div>
      {/* Right: Terminal + Projects */}
      <div className="md:w-1/2 w-full flex flex-col gap-8 items-center justify-center relative z-10 px-2 md:px-8">
        <AnimatedTerminal />
        <ProjectsSection />
      </div>
      {/* Glowing background overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-1/3 w-1/2 h-1/2 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-blue-700/30 blur-2xl rounded-full" />
      </div>
    </section>
  );
}
