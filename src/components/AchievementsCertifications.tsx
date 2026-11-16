import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Trophy, 
  Medal, 
  ShieldCheck
} from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const AchievementsCertifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'achievements' | 'certifications'>('all');

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient light */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>05 &bull; HONORS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Recognized academic leadership across VTU, competitive hackathon finalists, and verified technical credentials.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 border border-slate-200 rounded-2xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Honors ({ACHIEVEMENTS.length + CERTIFICATIONS.length})
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'achievements'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Key Achievements ({ACHIEVEMENTS.length})
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Industry Certifications ({CERTIFICATIONS.length})
            </button>
          </div>
        </div>

        {/* Two-Column Grid for Combined or Filtered Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Key Achievements Column */}
          {(activeTab === 'all' || activeTab === 'achievements') && (
            <div className={`space-y-4 ${activeTab === 'achievements' ? 'lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-0' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <Medal className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-900">Competitive & Academic Achievements</h3>
              </div>

              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-lg group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[11px] font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded font-bold">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-medium">{ach.year}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs font-mono text-blue-600 font-semibold mb-2">{ach.subtitle}</p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Industry Certifications Column */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <div className={`space-y-4 ${activeTab === 'certifications' ? 'lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Verified Technical Certifications</h3>
              </div>

              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[11px] font-mono bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-0.5 rounded font-bold">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 font-medium mb-3">{cert.badge}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {cert.skillsCovered.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 rounded font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
