'use client';
import { FaUniversity } from 'react-icons/fa';

const education = [
  {
    school: 'National Institute of Technology Karnataka',
    degree: 'B. Tech in Chemical Engineering',
    location: '',
    period: '2022 -- 2026',
  },
  {
    school: 'Govt. Boys Higher Sec School',
    degree: 'Senior High School',
    location: 'Srinagar, Jammu and Kashmir',
    period: 'Jan 2022',
  },
];

export default function EducationSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-6 flex items-center gap-2">
        <FaUniversity className="text-cyan-400" /> Education
      </h2>
      <div className="flex flex-col gap-6">
        {education.map((ed, i) => (
          <div key={i} className="bg-[#13203b]/80 rounded-xl p-5 shadow-[0_0_16px_#0fffcf22] border border-cyan-900/40">
            <div className="font-semibold text-cyan-100 text-lg mb-1">{ed.school}</div>
            <div className="text-cyan-300/90 text-base mb-1">{ed.degree}</div>
            {ed.location && <div className="text-cyan-400/80 text-sm mb-1">{ed.location}</div>}
            <div className="text-cyan-400/80 text-xs">{ed.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
