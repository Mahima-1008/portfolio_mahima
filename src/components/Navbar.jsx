import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { personal } = portfolioData;

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
      <nav className="w-full bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-full py-3 px-6 sm:px-8 shadow-sm flex items-center justify-between transition-all duration-300">
        
        {/* Left: Brand Name without MK Logo */}
        <div className="flex-1 flex items-center">
          <a href="#" className="flex flex-col group">
            <span className="font-heading font-black text-black text-base sm:text-lg tracking-tight leading-tight group-hover:text-zinc-600 transition-colors">
              {personal.name}
            </span>
            <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">
              Full Stack Developer
            </span>
          </a>
        </div>

        {/* Center: Perfectly Aligned Nav Links */}
        <div className="hidden md:flex items-center justify-center gap-7 lg:gap-9 text-sm font-medium text-zinc-600 flex-shrink-0">
          <a href="#about" className="hover:text-black transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200">
            About
          </a>
          <a href="#skills" className="hover:text-black transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200">
            Skills
          </a>
          <a href="#projects" className="hover:text-black transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200">
            Projects
          </a>
          <a href="#experience" className="hover:text-black transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200">
            Experience
          </a>
          <a href="#services" className="hover:text-black transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200">
            Services
          </a>
          <a href="#contact" className="hover:text-black transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200">
            Contact
          </a>
        </div>

        {/* Right: Actions (Direct Download Resume & Let's Talk) */}
        <div className="flex-1 flex items-center justify-end gap-2.5 sm:gap-3">
          
          {/* Direct Resume Download Link */}
          <a
            href="/Mahima_Kumari_Resume.pdf"
            download="Mahima_Kumari_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-zinc-100 text-zinc-900 hover:bg-black hover:text-white border border-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
            title="Download Mahima Kumari's Resume (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-black text-white hover:bg-zinc-800 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <Sparkles className="w-3.5 h-3.5" />
          </a>
        </div>

      </nav>
    </header>
  );
}
