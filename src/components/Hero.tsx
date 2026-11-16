import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Eye 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
  onDirectDownloadResume: () => void;
  onOpenPlaceholder: (title: string, url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  onDirectDownloadResume,
  onOpenPlaceholder,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-white">
      {/* Ambient background soft glows on white */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-sky-400/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 text-xs font-mono shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span className="text-slate-700 font-medium">Available for AI/ML Roles & Internships</span>
              <span className="text-blue-700 border-l border-blue-200 pl-2 font-semibold">VTU Branch Topper</span>
            </div>

            {/* Name & Title */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-widest text-blue-600 uppercase font-bold mb-2">
                Personal Portfolio &bull; AI Systems Developer
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 font-semibold">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Headline Callout */}
            <blockquote className="border-l-4 border-sky-500 pl-4 py-1 text-lg sm:text-xl font-medium text-slate-800 italic bg-slate-50/60 rounded-r-lg">
              "{PERSONAL_INFO.headline}"
            </blockquote>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:brightness-105 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Download Resume Button with quick preview trigger */}
              <div className="inline-flex rounded-xl bg-white border border-slate-200 p-0.5 shadow-sm">
                <button
                  onClick={onDirectDownloadResume}
                  className="px-4 py-3 rounded-l-[10px] hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-600 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
                </button>
                <button
                  onClick={onOpenResumeModal}
                  className="px-2.5 py-3 rounded-r-[10px] hover:bg-slate-50 text-slate-500 hover:text-blue-600 border-l border-slate-200 transition-colors cursor-pointer"
                  title="View CV in browser"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-600">
              <span className="text-slate-400 font-semibold">Profiles:</span>
              <button
                onClick={() => onOpenPlaceholder('GitHub Profile', PERSONAL_INFO.githubPlaceholder)}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View GitHub"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-[11px] font-semibold">GitHub</span>
              </button>

              <button
                onClick={() => onOpenPlaceholder('LinkedIn Profile', PERSONAL_INFO.linkedinPlaceholder)}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                title="View LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span className="text-[11px] font-semibold">LinkedIn</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-sky-600" />
                <span className="text-[11px] font-semibold hidden sm:inline">{PERSONAL_INFO.email}</span>
                <span className="text-[11px] font-semibold sm:hidden">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI Engineer Identity Card & Live Telemetry Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-20 blur-lg group-hover:opacity-30 transition duration-1000" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xl shadow-slate-200/70 space-y-5">
                
                {/* Header bar / window control */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    <span>ai-engine://runtime</span>
                  </div>
                </div>

                {/* Profile Portrait / Tech Frame */}
                <div className="relative group/avatar overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                  {/* Grid backdrop */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Stylized Avatar Placeholder with scan effect */}
                    <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 p-[2px] flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20 overflow-hidden">
                      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-mono text-xl font-extrabold text-blue-600">
                        VR
                      </div>
                      <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                        AI Engineer Identity
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        Vaibhav Rai A V
                      </h3>
                      <p className="text-[11px] text-slate-500 font-mono">
                        Yenepoya Institute of Tech
                      </p>
                      <span className="inline-block text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-semibold">
                        CGPA 9.36 &bull; VTU Topper
                      </span>
                    </div>
                  </div>

                  {/* Micro note for photograph */}
                  <div className="mt-3 pt-2.5 border-t border-slate-200 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                    <span>[Profile Image Placeholder]</span>
                    <span className="text-blue-600 font-medium">Ready for Photo Asset</span>
                  </div>
                </div>

                {/* Live AI Telemetry readout */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <Activity className="w-3.5 h-3.5 text-blue-600" />
                      YOLOv8 Detection
                    </span>
                    <span className="text-emerald-600 font-bold">95%+ Accuracy</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <Cpu className="w-3.5 h-3.5 text-sky-600" />
                      Audio RAG Turnaround
                    </span>
                    <span className="text-blue-600 font-bold">&lt; 980ms Latency</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      Architecture Focus
                    </span>
                    <span className="text-slate-800 font-semibold">Vision &bull; LLM &bull; RAG</span>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    President @ Yen Artificia
                  </span>
                  <span className="text-slate-500">Karnataka, IN</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
