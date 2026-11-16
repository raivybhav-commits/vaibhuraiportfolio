import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2 
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Background ambient glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>04 &bull; CAREER & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Hands-on software and AI engineering internships paired with executive student community leadership.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central timeline line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-slate-200" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-slate-200" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node marker */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center z-20 shadow-[0_0_12px_rgba(37,99,235,0.25)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  </div>

                  {/* Content Card (Desktop 50% width, mobile full with left offset) */}
                  <div
                    className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:pl-4' : 'md:pr-4'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono font-medium">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mt-0.5 mb-4">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span>{exp.organization}</span>
                        {exp.location && (
                          <span className="text-xs text-slate-400 font-mono font-normal">({exp.location})</span>
                        )}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {exp.highlights.map((bullet, bidx) => (
                          <li key={bidx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="text-blue-600 mt-1 flex-shrink-0 font-bold">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill Tags */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600 rounded font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
