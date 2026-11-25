import React from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, Sparkles, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const copyToClipboard = (text, message) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        onShowToast(message);
        triggerMonochromeConfetti();
      }).catch(() => fallbackCopy(text, message));
    } else {
      fallbackCopy(text, message);
    }
  };

  const fallbackCopy = (text, message) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      onShowToast(message);
      triggerMonochromeConfetti();
    } catch (err) {
      onShowToast("Failed to copy");
    }
    document.body.removeChild(textArea);
  };

  const triggerMonochromeConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#000000', '#27272a', '#52525b', '#71717a', '#a1a1aa']
      });
    } catch (e) {
      // ignore if confetti fails
    }
  };

  return (
    <section id="contact" className="bento-card relative rounded-3xl p-6 sm:p-10 bg-white border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      <div>
        {/* 1. Heading in 1 line with Sparkle */}
        <div className="flex items-center gap-2.5 mb-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight whitespace-nowrap">
            <span className="text-black">Let's Work </span>
            <span className="text-zinc-500">Together!</span>
          </h2>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 fill-current flex-shrink-0" />
        </div>

        {/* 2. Sub-heading */}
        <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
          Open for full-time roles, full-stack software development & modern engineering projects.
        </p>

        {/* 3. Emails, Phone, and so on */}
        <div className="space-y-3">
          
          {/* Email with click-to-copy */}
          <button
            onClick={() => copyToClipboard(personal.email, "Email copied to clipboard!")}
            className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-black hover:bg-zinc-100 transition-all group/item text-left shadow-xs"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email</p>
                <p className="font-semibold text-black truncate text-xs sm:text-sm">{personal.email}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black px-3 py-1.5 rounded-xl opacity-90 group-hover/item:opacity-100 transition-all flex-shrink-0">
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </span>
          </button>

          {/* Phone with click-to-call */}
          <a
            href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-black hover:bg-zinc-100 transition-all group/item text-left shadow-xs"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Phone</p>
                <p className="font-semibold text-black text-xs sm:text-sm">{personal.phone}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black px-3.5 py-1.5 rounded-xl opacity-90 group-hover/item:opacity-100 transition-all flex-shrink-0">
              <span>Call</span>
            </span>
          </a>

          {/* GitHub & LinkedIn Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-zinc-100 border border-zinc-300 hover:border-black hover:bg-zinc-200 text-black transition-all group/git shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center flex-shrink-0">
                  <FaGithub className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Code</p>
                  <p className="text-xs sm:text-sm font-bold">GitHub</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover/git:text-black group-hover/git:translate-x-0.5 transition-all" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-black text-white hover:bg-zinc-800 transition-all group/li shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center flex-shrink-0">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Network</p>
                  <p className="text-xs sm:text-sm font-bold">LinkedIn</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover/li:text-white group-hover/li:translate-x-0.5 transition-all" />
            </a>
          </div>

        </div>
      </div>

      {/* Footer Notice with Heart Emoji and Made by Mahima */}
      <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2 select-none">
        <p className="font-bold tracking-widest uppercase text-zinc-500">
          THANK YOU FOR VISITING
        </p>
        <p className="flex items-center gap-1.5 font-medium text-zinc-700">
          <span>Made with</span>
          <span className="text-xs sm:text-sm inline-block">❤️</span>
          <span>by <strong className="text-black font-bold">Mahima</strong></span>
        </p>
      </div>

    </section>
  );
}
