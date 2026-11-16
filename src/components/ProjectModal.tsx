import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart2, ShieldAlert } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisual';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenPlaceholder: (title: string, url: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenPlaceholder }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-slate-600 bg-slate-200/80 px-2.5 py-0.5 rounded font-medium">
                {project.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Visual Showcase */}
          <ProjectVisual type={project.visualType} />

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <span className="block text-[11px] font-mono text-slate-500 mb-1 font-medium">{metric.label}</span>
                <span className="text-lg font-bold font-mono text-blue-700">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* High-level Description & Highlight */}
          <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-xl">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-1 font-bold">Project Summary</h4>
            <p className="text-slate-700 text-sm leading-relaxed">{project.description}</p>
            {project.achievement && (
              <div className="mt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{project.achievement}</span>
              </div>
            )}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 text-rose-600 text-sm font-bold mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 text-blue-600 text-sm font-bold mb-2">
                <Cpu className="w-4 h-4" />
                <span>The Implemented Solution</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* System Architecture Pipeline */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
              <BarChart2 className="w-4 h-4 text-blue-600" />
              <span>System Architecture & Pipeline Flow</span>
            </div>
            <div className="space-y-2">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-mono">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5 font-bold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            Authored by <span className="text-slate-800 font-bold">Vaibhav Rai A V</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenPlaceholder(`GitHub Repo: ${project.title}`, project.githubPlaceholder)}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository Placeholder</span>
            </button>
            {project.demoPlaceholder && (
              <button
                onClick={() => onOpenPlaceholder(`Demo: ${project.title}`, project.demoPlaceholder!)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-md shadow-blue-600/20 transition-colors cursor-pointer"
              >
                <span>Live Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
