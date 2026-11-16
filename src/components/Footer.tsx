import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'PINNACLE', href: '#pinnacle' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50/90 relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-blue-600">
                  VR
                </div>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 font-mono font-medium">
              AI & Machine Learning Engineer &bull; VTU Branch Topper &bull; Python Developer
            </p>
            <p className="text-xs text-slate-500 max-w-sm">
              Engineering high-performance computer vision, sub-second audio RAG pipelines, and intelligent systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-5 flex flex-wrap gap-4 text-xs font-mono text-slate-600 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-blue-600 border border-slate-200 transition-all flex items-center gap-2 text-xs font-mono font-medium shadow-sm cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Vaibhav Rai A V. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 font-medium">Open for AI/ML opportunities & collaborations</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
