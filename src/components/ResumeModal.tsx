import React, { useEffect } from 'react';
import { X, Download, Award, Briefcase, GraduationCap, Code, CheckCircle, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, HIGHLIGHT_STATS, FEATURED_PROJECTS, EXPERIENCES, ACHIEVEMENTS, CERTIFICATIONS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#2563EB', '#0EA5E9', '#4F46E5', '#10B981']
    });

    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = 'Vaibhav_Rai_A_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Action Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Curriculum Vitae Preview</h3>
            <span className="text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-bold ml-2">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs rounded-lg transition-colors border border-slate-200 shadow-sm cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={triggerDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg bg-slate-200/60 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-800 font-sans">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{PERSONAL_INFO.name}</h1>
                <p className="text-sm font-semibold text-blue-600 mt-1 font-mono">{PERSONAL_INFO.title}</p>
              </div>
              <div className="text-xs text-slate-600 font-mono space-y-1 sm:text-right">
                <div>Email: <span className="text-slate-900 font-semibold">{PERSONAL_INFO.email}</span></div>
                <div>Phone: <span className="text-slate-900 font-semibold">{PERSONAL_INFO.phone}</span></div>
                <div>Location: <span className="text-slate-900 font-semibold">{PERSONAL_INFO.location}</span></div>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
              {HIGHLIGHT_STATS.map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-center shadow-sm">
                  <span className="text-xs font-mono text-blue-700 font-bold block">{stat.value}</span>
                  <span className="text-[10px] text-slate-500 block font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 mb-3 font-mono border-b border-blue-100 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Academic Standing</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-bold text-slate-900">{EDUCATION_DATA.degree} – {EDUCATION_DATA.major}</span>
                <span className="text-xs font-mono text-blue-700 font-bold">CGPA: {EDUCATION_DATA.cgpa} / 10.0</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">{EDUCATION_DATA.institution}, {EDUCATION_DATA.location}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {EDUCATION_DATA.honors.map((h, i) => (
                  <span key={i} className="text-[11px] font-mono bg-blue-50 border border-blue-200 text-blue-800 px-2 py-0.5 rounded font-bold">
                    ★ {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 mb-3 font-mono border-b border-blue-100 pb-1">
              <Code className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </div>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900">{proj.title}</span>
                    <span className="text-[11px] font-mono text-blue-700 font-semibold">{proj.technologies.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                  {proj.achievement && (
                    <p className="text-[11px] text-emerald-700 font-bold">✓ Impact: {proj.achievement}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 mb-3 font-mono border-b border-blue-100 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>Professional & Leadership Experience</span>
            </div>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900">{exp.role} – <span className="text-blue-700">{exp.organization}</span></span>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-600 list-disc list-inside">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2.5 font-mono border-b border-blue-100 pb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Honors & Hackathons</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 font-mono">
                {ACHIEVEMENTS.slice(0, 4).map((a) => (
                  <li key={a.id} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">▹</span>
                    <span>{a.title} ({a.badge})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2.5 font-mono border-b border-blue-100 pb-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Industry Certifications</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 font-mono">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.id} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">▹</span>
                    <span>{c.title} – <span className="text-slate-500">{c.issuer}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
