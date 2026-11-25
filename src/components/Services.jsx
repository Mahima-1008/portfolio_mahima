import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Palette, Bot, Database, Sparkles } from 'lucide-react';

export default function Services() {
  const { services } = portfolioData;

  const icons = {
    fullstack: <Layers className="w-6 h-6" />,
    uiux: <Palette className="w-6 h-6" />,
    ai: <Bot className="w-6 h-6" />,
    apis: <Database className="w-6 h-6" />
  };

  return (
    <section id="services" className="bento-card relative rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      <div>
        {/* Header with Solid Black Line */}
        <div className="flex items-center gap-3.5 mb-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-black tracking-tight">Services</h2>
          <div className="w-12 h-[2px] bg-black rounded-full"></div>
        </div>

        {/* 4 Service Icon Tiles with Vector Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group/svc flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs hover:border-black hover:bg-zinc-100 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-3 group-hover/svc:scale-105 transition-transform shadow-xs">
                {icons[svc.id] || icons.fullstack}
              </div>
              <h3 className="text-sm font-bold text-black leading-tight">{svc.title}</h3>
              <p className="text-[11px] text-zinc-500 mt-1">{svc.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
        <span>Scalable • Responsive • Modern Practices</span>
        <span className="text-black font-semibold inline-flex items-center gap-1">
          <span>Available for Work</span>
          <Sparkles className="w-3.5 h-3.5" />
        </span>
      </div>

    </section>
  );
}
