'use client';
import { FaUsers } from 'react-icons/fa';

export default function ExtracurricularSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-6 flex items-center gap-2">
        <FaUsers className="text-cyan-400" /> Extra Curriculars
      </h2>
      <div className="bg-[#13203b]/80 rounded-xl p-5 shadow-[0_0_16px_#0fffcf22] border border-cyan-900/40">
        <div className="font-semibold text-cyan-100 text-lg mb-2">Association for Computing Machinery (ACM) NITK</div>
        <ul className="list-disc pl-6 text-cyan-100 space-y-2">
          <li>Member of the Sanganitra SIG.</li>
          <li>Created 2 thought-provoking CTF challenges for a CTF competition.</li>
          <li>Part of the team responsible for organizing the Club&apos;s Annual Event and contributed to its planning and execution.</li>
        </ul>
      </div>
    </section>
  );
}
