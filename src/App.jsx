import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] text-zinc-900 relative selection:bg-black selection:text-white flex flex-col justify-between">
      
      {/* Subtle Inverted Ambient Fog */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-zinc-200/40 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 -right-40 w-[45rem] h-[45rem] bg-zinc-200/35 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-10 left-1/3 w-[36rem] h-[36rem] bg-zinc-100/60 rounded-full blur-[150px]"></div>
      </div>

      <div>
        {/* Full-Width Sticky Navbar */}
        <Navbar />

        {/* Full-Width Expansive Container */}
        <main className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 space-y-8 sm:space-y-10">
          
          {/* Top Hero Banner (Full Screen Width) */}
          <Hero />

          {/* Bento Row 1: About Me & My Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AboutMe />
            <Skills />
          </div>

          {/* Bento Row 2: My Projects (Row Layout) & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
            <Experience />
          </div>

          {/* Bento Row 3: Services & Let's Work Together */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Services />
            <Contact onShowToast={showToast} />
          </div>

        </main>
      </div>

      {/* Signature Page Footer at the End */}
      <footer className="w-full py-8 text-center border-t border-zinc-200/90 mt-12 bg-white/60 backdrop-blur-sm select-none">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-1.5">
          <p className="text-sm sm:text-base font-medium text-zinc-700 flex items-center justify-center gap-1.5">
            <span>Made with</span>
            <span className="text-base inline-block animate-pulse">❤️</span>
            <span>by <strong className="text-black font-bold">Mahima</strong></span>
          </p>
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Mahima Kumari • Software Developer & Full Stack Developer
          </p>
        </div>
      </footer>

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none ${
          toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-semibold shadow-2xl border border-zinc-800">
          <Sparkles className="w-4 h-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      </div>

    </div>
  );
}
