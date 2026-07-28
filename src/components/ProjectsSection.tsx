import React, { useState } from 'react';
import { 
  Eye, 
  MapPin, 
  Calendar, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/projectsData';
import { ThemeMode, ProjectItem } from '../types';

interface ProjectsSectionProps {
  theme: ThemeMode;
  openLightbox: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme, openLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Office', 'Bathroom', 'Mirror', 'Shop Front'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Masterpiece Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Featured <span className="silver-gradient-text">Glass & Aluminium</span> Projects
          </h2>

          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore our recent architectural glass doors, luxury office partitions, custom shower cabins, and storefront installations across Karachi.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : theme === 'dark'
                    ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Project Grid with Motion Storytelling Effects */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(project)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
                  theme === 'dark' 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15' 
                    : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-xl'
                }`}
              >
                {/* Image Showcase */}
                <div className="relative h-60 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Hover Overlay Lightbox Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-cyan-400 mb-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className={`font-heading font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-400 transition-colors`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs line-clamp-2 mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono text-cyan-400/90">{project.glassSpecs}</span>
                    <span className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      View <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
