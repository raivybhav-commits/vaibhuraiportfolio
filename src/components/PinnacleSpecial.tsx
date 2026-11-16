import React from 'react';
import { 
  Sparkles, 
  Globe, 
  Lightbulb, 
  Code2, 
  MapPin, 
  Camera, 
  CheckCircle2
} from 'lucide-react';
import { PINNACLE_DETAILS } from '../data/portfolioData';

export const PinnacleSpecial: React.FC = () => {
  return (
    <section id="pinnacle" className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-blue-500/5 via-sky-400/5 to-indigo-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-bold mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="tracking-wider">FEATURED LEADERSHIP CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            PINNACLE
          </h2>
          <p className="mt-2 text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 font-bold">
            3rd International-Level Technical Symposium
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Major Event Case Study Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-50/70 via-white to-sky-50/70 border border-blue-200 p-6 sm:p-10 shadow-xl mb-12 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 font-bold">
                  President & Event Organizer
                </span>
                <span className="text-slate-600 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  Yenepoya Institute of Technology
                </span>
                <span className="text-slate-600 flex items-center gap-1 font-medium">
                  <Globe className="w-3.5 h-3.5 text-sky-600" />
                  International Scope
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Orchestrating an International Hub for Next-Generation Intelligence
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As <strong className="text-slate-900">President of Yen Artificia</strong>, I led the strategic conceptualization, planning, sponsorships, cross-departmental operations, and execution of <strong>PINNACLE</strong>, the landmark 3rd International-Level Technical Symposium at Yenepoya Institute of Technology.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                PINNACLE united researchers, student engineers, industry keynotes, and international delegates around transformative technologies across three cornerstone pillars: Project Expo, Tech Fest, and QUORIA AI Summit.
              </p>

              {/* Impact Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {PINNACLE_DETAILS.stats.map((stat, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <span className="block text-[11px] font-mono text-slate-500 font-medium">{stat.label}</span>
                    <span className="text-sm font-bold font-mono text-blue-700">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Authentic Photograph Placeholder Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white border-2 border-dashed border-blue-300 p-6 sm:p-8 flex flex-col items-center justify-center text-center group shadow-md">
                
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8" />
                </div>

                <div className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider mb-1">
                  Event Photography Archive
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2">
                  PINNACLE Symposium Gallery Placeholder
                </h4>

                <p className="text-xs text-slate-600 max-w-xs leading-relaxed mb-4">
                  Reserved for official stage photographs, inauguration sessions, and student team presentations at Yenepoya Institute of Technology.
                </p>

                <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Ready for actual event photos</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Major Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PINNACLE_DETAILS.components.map((comp, idx) => {
            const Icon = idx === 0 ? Lightbulb : idx === 1 ? Code2 : Sparkles;
            return (
              <div
                key={comp.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded font-bold">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {comp.title}
                  </h4>
                  <p className="text-xs font-mono text-blue-600 font-semibold mb-3">{comp.tagline}</p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {comp.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {comp.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Yen Artificia Initiative</span>
                  <span className="text-blue-600 font-semibold">Symposium Flagship &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
