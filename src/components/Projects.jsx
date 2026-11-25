import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, ExternalLink, Bot, CheckSquare, Sparkles } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;

  const icons = {
    ailifeos: <Bot className="w-5 h-5" />,
    ablespace: <CheckSquare className="w-5 h-5" />,
    kidrove: <Sparkles className="w-5 h-5" />
  };

  return (
    <section id="projects" className="bento-card relative rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      <div>
        {/* Header with Sparkles Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-black tracking-tight">My Projects</h2>
            <Sparkles className="w-5 h-5 text-black fill-current" />
          </div>
          
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-black border border-zinc-200">
            {projects.length} Featured
          </span>
        </div>

        {/* Projects in Row Layout (Each Project is a Horizontal Row Card) */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {projects.map((proj, idx) => {
            const isDark = idx === 0; // AILifeOS: Sleek Black
            const isLight = idx === 1; // Ablespace: Crisp Light
            const isCharcoal = idx === 2; // Kidrove: Dark Charcoal

            return (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className={`group/proj cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-black text-white border-zinc-900 hover:border-zinc-700'
                    : isCharcoal
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:border-zinc-600'
                    : 'bg-zinc-50 text-black border-zinc-200 hover:border-black hover:bg-zinc-100'
                }`}
              >
                {/* Background ambient blur on hover */}
                <div className={`absolute -right-10 -bottom-10 w-24 h-24 rounded-full blur-xl pointer-events-none group-hover/proj:scale-150 transition-transform ${
                  isDark || isCharcoal ? 'bg-white/10' : 'bg-black/5'
                }`} />

                {/* Left: Icon, Title, Category Badge & Tagline */}
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs ${
                    isDark
                      ? 'bg-white/10 text-white'
                      : isCharcoal
                      ? 'bg-white/15 text-white'
                      : 'bg-black text-white'
                  }`}>
                    {icons[proj.id] || <Sparkles className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <h3 className={`font-heading font-bold text-base sm:text-lg tracking-tight ${
                        isDark || isCharcoal ? 'text-white' : 'text-black'
                      }`}>
                        {proj.title}
                      </h3>
                      <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                        isDark || isCharcoal
                          ? 'bg-white/10 text-zinc-300 border-white/20'
                          : 'bg-zinc-200 text-black border-zinc-300'
                      }`}>
                        {proj.category}
                      </span>
                    </div>

                    <p className={`text-xs line-clamp-2 sm:line-clamp-1 leading-relaxed ${
                      isDark || isCharcoal ? 'text-zinc-300' : 'text-zinc-600'
                    }`}>
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: Tech Stack Badge & View Action */}
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800/20 sm:border-transparent">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    isDark || isCharcoal
                      ? 'text-zinc-400 bg-white/5 border border-white/10'
                      : 'text-zinc-600 bg-white border border-zinc-200'
                  }`}>
                    {proj.badge}
                  </span>

                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold transition-transform group-hover/proj:translate-x-1 ${
                    isDark || isCharcoal ? 'text-white' : 'text-black'
                  }`}>
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer in Inverted Monochrome */}
      <div className="mt-6 pt-5 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
        <div className="flex items-center gap-4 text-xs font-medium">
          <span>• Full-Stack AI</span>
          <span>• SaaS Platforms</span>
          <span>• Web Apps</span>
        </div>
        <button
          onClick={() => onSelectProject(projects[0])}
          className="text-black hover:underline font-semibold inline-flex items-center gap-1.5"
        >
          <span>Deep Dive</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}
