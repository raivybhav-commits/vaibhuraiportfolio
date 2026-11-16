import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Eye
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisual';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenPlaceholder: (title: string, url: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onOpenPlaceholder }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Computer Vision', 'Generative AI & RAG', 'Cybersecurity'];

  const filteredProjects = filter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/60">
      {/* Background ambient soft glow */}
      <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>03 &bull; PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured AI Projects
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            End-to-end intelligent systems, deep computer vision pipelines, sub-second RAG architectures, and predictive security classifiers.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Visual Telemetry Header */}
                <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-100">
                  <ProjectVisual type={project.visualType} />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Category and Index */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">
                      PROJECT {project.number}
                    </span>
                    <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200 font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Achievement Highlight */}
                  {project.achievement && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{project.achievement}</span>
                    </div>
                  )}

                  {/* Key Metrics Quick Row */}
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 p-2 rounded-lg">
                        <span className="text-slate-500 block text-[10px]">{m.label}</span>
                        <span className="text-blue-700 font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenPlaceholder(`Repository: ${project.title}`, project.githubPlaceholder)}
                    className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm transition-colors cursor-pointer"
                    title="View Repo Placeholder"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </button>
                  {project.demoPlaceholder && (
                    <button
                      onClick={() => onOpenPlaceholder(`Live Demo: ${project.title}`, project.demoPlaceholder!)}
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-blue-600 hover:text-blue-700 shadow-sm transition-colors cursor-pointer"
                      title="View Demo Placeholder"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
