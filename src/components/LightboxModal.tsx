import React from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  MessageSquare, 
  Share2, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem, ThemeMode } from '../types';

interface LightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  theme: ThemeMode;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose, theme }) => {
  if (!project) return null;

  const handleInquireProject = () => {
    const msg = encodeURIComponent(`Hello Ghazi Glass, I saw your project "${project.title}" in ${project.location} on your website. I want a similar installation!`);
    window.open(`https://wa.me/923110388523?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`w-full max-w-3xl rounded-3xl overflow-hidden border shadow-2xl relative my-8 ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big High-Res Image */}
        <div className="relative h-[320px] sm:h-[420px] bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>

          <span className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs text-cyan-400 font-semibold">
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>{project.location}</span>
            {project.completionDate && (
              <>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{project.completionDate}</span>
              </>
            )}
          </div>

          <h3 className="font-heading font-extrabold text-2xl text-white">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">Glass Specification:</span>
            <span className="font-mono font-bold text-cyan-400">{project.glassSpecs}</span>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-emerald-400 flex items-center font-semibold">
              <CheckCircle2 className="w-4 h-4 mr-1.5" />
              100% Verified Ghazi Glass Installation
            </span>

            <button
              onClick={handleInquireProject}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire About Similar Design</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
