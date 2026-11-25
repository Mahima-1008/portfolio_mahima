import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-300 p-6 sm:p-12 md:p-16 lg:p-20 shadow-hero border border-zinc-300/80">
      
      {/* Inverted Monochrome Waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Top Right Organic Wave */}
        <svg className="absolute -top-16 -right-16 w-[36rem] h-[36rem] text-zinc-400/40 transition-transform duration-700 ease-out" viewBox="0 0 400 400" fill="currentColor">
          <path d="M120,0 C220,40 380,80 400,240 C420,380 280,360 210,340 C140,320 80,390 0,380 L0,0 Z" />
        </svg>

        {/* Bottom Left Wave */}
        <svg className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] text-zinc-300/50" viewBox="0 0 500 500" fill="currentColor">
          <path d="M0,250 C120,230 200,320 280,300 C360,280 440,340 500,300 L500,500 L0,500 Z" />
        </svg>

        {/* Translucent Lighter Wave */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-44 text-white/60" viewBox="0 0 1200 180" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,80 C180,140 380,30 620,90 C860,150 1020,40 1200,80 L1200,180 L0,180 Z" />
        </svg>

        {/* Sparkle 1: Top Center */}
        <div className="absolute top-8 left-1/2 -translate-x-12 animate-pulse text-zinc-800">
          <Sparkles className="w-7 h-7 fill-current opacity-80" />
        </div>

        {/* Sparkle 2: Mid Left */}
        <div className="absolute top-1/2 left-10 -translate-y-6 text-zinc-700">
          <Sparkles className="w-6 h-6 fill-current opacity-70" />
        </div>
      </div>

      {/* Hero Header Sub-bar */}
      <div className="relative z-10 flex items-center justify-between pb-6 sm:pb-12 border-b border-zinc-300/80">
        
        {/* Role */}
        <div className="flex items-center gap-3">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-black uppercase flex flex-col leading-tight">
            <span>Software Developer</span>
            <span className="text-[11px] sm:text-xs font-normal text-zinc-700 lowercase">Full Stack Developer</span>
          </div>
          <div className="hidden sm:block w-14 h-[2px] bg-zinc-800/40 rounded-full"></div>
        </div>

        {/* 2026 Portfolio badge */}
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-black border border-zinc-300 shadow-xs text-xs sm:text-sm font-medium transition-all"
        >
          <span>{personal.year} Portfolio</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Main Central Typography Lockup */}
      <div className="relative z-10 py-10 sm:py-20 md:py-24 text-center select-none">
        
        {/* Base Word "portfolio" */}
        <div className="relative inline-block">
          <h1
            className="text-[4.5rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[12rem] xl:text-[13.5rem] font-black tracking-tighter text-black leading-none lowercase select-none"
            style={{ letterSpacing: '-0.04em' }}
          >
            portfolio
          </h1>

          {/* Cursive Calligraphy Overlay: "Mahima Kumari" with Doodle Heart */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform -rotate-3 sm:-rotate-2 -translate-y-2 sm:-translate-y-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="font-script text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] font-bold">
                {personal.name}
              </span>

              {/* Doodle Heart */}
              <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Hero Dock / Social Pill Bar with Official Vector Icons */}
      <div className="relative z-10 pt-6 sm:pt-8 border-t border-zinc-300/80">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-black">
          
          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/90 hover:bg-black text-black hover:text-white border border-zinc-300 shadow-sm transition-all hover:-translate-y-0.5"
          >
            <span className="w-5 h-5 rounded-md bg-black group-hover:bg-white text-white group-hover:text-black flex items-center justify-center text-xs transition-colors">
              <FaLinkedin className="w-3 h-3" />
            </span>
            <span className="font-semibold">Mahima Kumari</span>
          </a>

          <div className="hidden sm:block w-px h-5 bg-zinc-400"></div>

          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/90 hover:bg-black text-black hover:text-white border border-zinc-300 shadow-sm transition-all hover:-translate-y-0.5"
          >
            <span className="w-5 h-5 rounded-md bg-black group-hover:bg-white text-white group-hover:text-black flex items-center justify-center text-xs transition-colors">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium">{personal.email}</span>
          </a>

          <div className="hidden sm:block w-px h-5 bg-zinc-400"></div>

          {/* GitHub */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/90 hover:bg-black text-black hover:text-white border border-zinc-300 shadow-sm transition-all hover:-translate-y-0.5"
          >
            <span className="w-5 h-5 rounded-md bg-black group-hover:bg-white text-white group-hover:text-black flex items-center justify-center text-xs transition-colors">
              <FaGithub className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium">GitHub Profile</span>
          </a>

          <div className="hidden sm:block w-px h-5 bg-zinc-400"></div>

          {/* Phone */}
          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
            className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/90 hover:bg-black text-black hover:text-white border border-zinc-300 shadow-sm transition-all hover:-translate-y-0.5"
          >
            <span className="w-5 h-5 rounded-md bg-black group-hover:bg-white text-white group-hover:text-black flex items-center justify-center text-xs transition-colors">
              <Phone className="w-3 h-3" />
            </span>
            <span className="font-medium">{personal.phone}</span>
          </a>

        </div>
      </div>

    </section>
  );
}
