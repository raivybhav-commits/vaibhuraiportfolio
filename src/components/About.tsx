import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Code, 
  Users, 
  BrainCircuit, 
  Target, 
  Sparkles, 
  Terminal,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Computer Vision & Detection",
      desc: "Specialized in real-time object tracking, custom YOLOv8 training, and edge-optimized visual inference pipelines.",
      icon: Cpu,
      color: "bg-white border-slate-200 text-blue-600 hover:border-blue-300"
    },
    {
      title: "Generative AI & RAG",
      desc: "Architecting sub-second audio RAG, multilingual Gemini workflows, vector embeddings, and contextual prompt chains.",
      icon: BrainCircuit,
      color: "bg-white border-slate-200 text-sky-600 hover:border-sky-300"
    },
    {
      title: "ML Pipelines & Heuristics",
      desc: "Developing end-to-end classification models, feature engineering pipelines, and cybersecurity threat scoring systems.",
      icon: ShieldCheck,
      color: "bg-white border-slate-200 text-indigo-600 hover:border-indigo-300"
    },
    {
      title: "Technical Community Leadership",
      desc: "President of Yen Artificia, orchestrating international symposiums (PINNACLE) and national 24-hr hackathons.",
      icon: Users,
      color: "bg-white border-slate-200 text-emerald-600 hover:border-emerald-300"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Background ambient soft glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>01 &bull; ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-1 ${
                stat.highlight 
                  ? 'border-blue-300 shadow-md shadow-blue-500/5' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                {idx === 0 && <Award className="w-4 h-4 text-blue-600" />}
                {idx === 1 && <GraduationCap className="w-4 h-4 text-amber-500" />}
                {idx === 2 && <Code className="w-4 h-4 text-sky-600" />}
                {idx === 3 && <Users className="w-4 h-4 text-emerald-600" />}
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs font-mono text-blue-600 mt-1 font-medium">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Narrative & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>Solving Practical Problems Through Scalable AI</span>
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I'm <strong className="text-slate-900 font-semibold">Vaibhav Rai A V</strong>, an Artificial Intelligence and Machine Learning engineering undergraduate at <span className="text-blue-600 font-medium">Yenepoya Institute of Technology, Karnataka</span>. I specialize in developing intelligent applications, machine learning pipelines, computer vision systems, and Generative AI solutions.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With experience in AI engineering, software development, and technical leadership, I enjoy solving practical problems and building technology that creates meaningful impact.
            </p>

            <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                Specialization: Computer Vision & GenAI
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                Affiliation: VTU (Visvesvaraya Technological University)
              </span>
            </div>
          </div>

          {/* Quick Academic Spotlight Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/80 border border-blue-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-700 font-bold uppercase tracking-wider">
                Academic Distinction
              </span>
              <span className="text-xs font-mono bg-blue-100 text-blue-800 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">
                Rank #1
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-slate-900">VTU Branch Topper</h4>
              <p className="text-xs text-slate-600 font-mono">
                Awarded top rank across 1st, 2nd & 3rd consecutive academic years.
              </p>
            </div>

            <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-sm">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Undergraduate Degree:</span>
                <span className="text-slate-800 font-bold">B.E. AI & ML</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Cumulative CGPA:</span>
                <span className="text-emerald-600 font-extrabold text-sm">9.36 / 10.0</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-800 font-medium">Karnataka, India</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-normal">
              Passionate about bridging empirical research with high-performance edge inference and resilient machine learning pipelines.
            </p>
          </div>

        </div>

        {/* 4 Pillars of Focus */}
        <div>
          <h3 className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 font-bold">
            Core Engineering Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-xl ${pillar.color} border transition-all duration-300 hover:-translate-y-1 shadow-sm`}
                >
                  <div className="p-2.5 rounded-lg bg-slate-50 w-fit mb-3 border border-slate-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
