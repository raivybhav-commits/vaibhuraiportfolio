import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>06 &bull; ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Highlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top row: Degree & CGPA */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                  Undergraduate Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-lg font-mono text-blue-600 font-bold">
                  {EDUCATION_DATA.major}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    {EDUCATION_DATA.institution}, {EDUCATION_DATA.location}
                  </span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl flex-shrink-0">
                <span className="text-xs font-mono text-slate-500 uppercase font-semibold">Cumulative CGPA</span>
                <span className="text-3xl font-black font-mono text-emerald-600">{EDUCATION_DATA.cgpa}</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold">Scale 10.0</span>
              </div>
            </div>

            {/* Honors & VTU Distinction */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5 font-bold">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Academic Honors & Distinctions</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {EDUCATION_DATA.honors.map((honor, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center gap-3 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <span className="text-xs font-mono text-amber-900 font-bold">{honor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5 font-bold">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Key Engineering Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-lg hover:border-slate-300 transition-colors font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
