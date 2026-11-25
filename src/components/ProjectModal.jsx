import React from 'react';
import { X, ExternalLink, Bot, CheckSquare, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner in Solid Black */}
        <div className="relative p-6 sm:p-8 bg-black text-white">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-zinc-200 mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-400 mt-1">{project.badge}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600 mb-3">Overview & Highlights</h4>
            <ul className="space-y-3 text-sm text-zinc-800 leading-relaxed">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-black font-bold mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600 mb-3">Key Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 border border-zinc-200 text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-all"
          >
            Close
          </button>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-black text-white hover:bg-zinc-800 transition-all shadow-sm"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
