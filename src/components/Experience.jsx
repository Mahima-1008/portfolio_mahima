import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BadgeCheck, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="bento-card relative rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      <div>
        {/* Header with Solid Black Accent Line */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-black tracking-tight">Experience</h2>
            <div className="w-12 h-[2px] bg-black rounded-full"></div>
          </div>

          {experience.hasCertificate && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-black text-white shadow-xs">
              <BadgeCheck className="w-4 h-4 text-white" />
              <span>Certificate Verified</span>
            </span>
          )}
        </div>

        {/* Full Card Timeline Writeup */}
        <div className="w-full relative pl-6 sm:pl-7 border-l-2 border-zinc-300 space-y-4">
          
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm"></div>

          {/* Role & Company Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-zinc-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-zinc-100 text-black border border-zinc-300">
                  <Briefcase className="w-3 h-3" />
                  <span>Internship</span>
                </span>
                <span className="text-xs font-semibold text-zinc-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{experience.duration}</span>
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug">
                {experience.role}
              </h3>
              <p className="text-sm font-semibold text-zinc-800">
                {experience.company}
              </p>
            </div>

            {/* Skills tags from resume */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-black">React</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-black">JavaScript</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-black">Tailwind CSS</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-black">MERN Stack</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-black">Git & GitHub</span>
            </div>
          </div>

          {/* Resume Highlights across full card */}
          <div className="space-y-3 pt-1">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Key Contributions & Engineering Impact</p>
            <ul className="text-xs sm:text-sm text-zinc-700 space-y-2.5 leading-relaxed">
              {experience.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Footer in Inverted Monochrome */}
      <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
        <span>Self-Motivated • Agile Collaboration • Modern Best Practices</span>
        <span className="font-script text-xl text-black font-bold">100% committed</span>
      </div>

    </section>
  );
}
