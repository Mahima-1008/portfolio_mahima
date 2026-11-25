import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SkillIcon from './SkillIcon';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Languages', 'Tools', 'AI & Core'];

  const filteredSkills = selectedCategory === 'All'
    ? skills.all
    : skills.all.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="bento-card relative rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      <div>
        {/* 1. "My Skills" written exactly like "About Me" + Star Symbol */}
        <div className="flex items-center gap-2.5 mb-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-black tracking-tight">
            My Skills
          </h2>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-current" />
        </div>

        {/* 2. Heading (Design Build Innovate) */}
        <div className="mb-1.5">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-black tracking-tight whitespace-nowrap">
            <span className="text-black">Design </span>
            <span className="text-zinc-500">Build </span>
            <span className="text-black">Innovate</span>
          </h3>
        </div>

        {/* 3. Sub-heading */}
        <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed">
          Full-stack architectures, responsive design systems & modern AI engineering.
        </p>

        {/* 4. Options: All, Frontend, Backend, Databases, Languages, Tools, AI & Core */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5. And then the Icons */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
          {filteredSkills.map((skill) => (
            <div
              key={skill.key}
              className="group flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs hover:border-black hover:bg-zinc-100 hover:-translate-y-0.5 transition-all cursor-default text-center"
            >
              {/* Large Black Icon Container (Uniform across all skills) */}
              <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-xs flex-shrink-0">
                <SkillIcon name={skill.key} className="w-5 h-5" />
              </div>
              
              {/* Bold Skill Name */}
              <span className="text-xs font-bold text-black tracking-tight leading-tight line-clamp-1">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Footer in Inverted Monochrome */}
      <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
        <span className="font-medium text-zinc-700">Showing {filteredSkills.length} of {skills.all.length} Skills</span>
        <span className="font-semibold text-black">Modern Developer Stack</span>
      </div>

    </section>
  );
}
