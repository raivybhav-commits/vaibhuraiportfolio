import React, { useState } from 'react';
import { 
  Code, 
  Brain, 
  Eye, 
  Cpu, 
  BarChart3, 
  Cloud, 
  Terminal, 
  Search, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Brain': return Brain;
      case 'Eye': return Eye;
      case 'Cpu': return Cpu;
      case 'BarChart3': return BarChart3;
      case 'Cloud': return Cloud;
      default: return Terminal;
    }
  };

  const categoriesList = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
    const filteredSkills = category.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...category,
      visible: matchesCategory && (searchQuery === '' ? true : filteredSkills.length > 0),
      skills: filteredSkills
    };
  }).filter(c => c.visible);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white">
      {/* Background soft glow */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-3/4 h-64 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>02 &bull; TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Categorized competencies spanning modern AI architectures, deep learning frameworks, computer vision, data analytics, and cloud workflows.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-2xl w-full md:w-auto">
            {categoriesList.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. YOLO, Python, RAG)..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 focus:border-blue-500 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all duration-200 flex items-center gap-1.5 ${
                          skill.popular
                            ? 'bg-blue-50/80 border-blue-200 text-blue-800 shadow-sm font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 font-medium'
                        }`}
                      >
                        {skill.popular && <Sparkles className="w-3 h-3 text-blue-600 flex-shrink-0" />}
                        <span>{skill.name}</span>
                        <span className="text-[9px] text-slate-400 ml-0.5">({skill.level})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Sub-indicator */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-blue-600 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified In Production / Research
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No skills found matching "{searchQuery}". Try searching for Python, YOLO, RAG, etc.
          </div>
        )}

      </div>
    </section>
  );
};
