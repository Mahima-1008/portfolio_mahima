import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

export default function AboutMe() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="bento-card relative rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Subtle Top Monochrome Accent */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-zinc-100 rounded-full blur-3xl pointer-events-none"></div>

      <div>
        {/* Header with Black Doodle Heart */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-black tracking-tight">About Me</h2>
            <svg className="w-6 h-6 text-black transform -rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            <MapPin className="w-3.5 h-3.5 text-black" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Full Card Writeup */}
        <div className="w-full space-y-4 text-sm sm:text-[15px] leading-relaxed text-zinc-700">
          <p>
            Hi, I'm <strong className="text-black font-bold">{personal.name}</strong>, a passionate and dedicated <strong className="text-black font-semibold">{personal.title}</strong> based in Kolkata, currently pursuing my studies at <span className="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4">{personal.college}</span>.
          </p>

          <p className="text-zinc-600">
            With a strong engineering discipline and a problem-solving mindset, I specialize in engineering scalable web architectures with <strong className="text-black font-semibold">React</strong>, <strong className="text-black font-semibold">Next.js</strong>, <strong className="text-black font-semibold">Node.js</strong>, and <strong className="text-black font-semibold">Tailwind CSS</strong>, alongside integrating production-grade <strong className="text-black font-semibold">Groq AI LLMs</strong> and building clean RESTful APIs.
          </p>

          <p className="text-zinc-600">
            I enjoy transforming complex real-world requirements into intuitive, reliable, and aesthetically refined digital experiences, maintaining best practices in code quality, maintainability, and responsive design across all devices.
          </p>

          {/* Education Timeline / Cards across full card */}
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-black" />
              <span>Academic Background</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-black hover:bg-zinc-100 transition-all">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    edu.isCurrent ? 'bg-black text-white' : 'bg-zinc-200 text-zinc-800'
                  }`}>
                    {edu.duration}
                  </span>
                  <p className="font-bold text-xs sm:text-sm text-black mt-2 leading-snug truncate">
                    {edu.institution.split(',')[0]}
                  </p>
                  <p className="text-[11px] text-zinc-600 mt-0.5">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Handwritten Sign-off in Solid Black Script (Matching Reference) */}
      <div className="mt-8 pt-5 border-t border-zinc-200 flex items-center justify-between">
        <div className="relative">
          <span className="font-script text-2xl sm:text-3xl text-black font-bold tracking-wide">
            Let's create something amazing!
          </span>
          {/* Hand-drawn curved underline */}
          <svg className="w-48 h-3 text-zinc-600" viewBox="0 0 170 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M2,6 C40,11 120,2 168,7" />
          </svg>
        </div>

        <a href="#projects" className="text-xs font-semibold text-black hover:underline inline-flex items-center gap-1 group/link">
          <span>Explore Work</span>
          <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
        </a>
      </div>

    </section>
  );
}
