import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronsLeftRight, 
  MapPin, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { motion } from 'motion/react';
import { beforeAfterShowcase } from '../data/projectsData';
import { ThemeMode } from '../types';

interface BeforeAfterSectionProps {
  theme: ThemeMode;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ theme }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100

  const currentItem = beforeAfterShowcase[activeItemIndex];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="before-after" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-900/90 border-y border-slate-800' : 'bg-slate-100/90 border-y border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Before & After <span className="silver-gradient-text">Glass Transformation</span>
          </h2>

          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Drag the comparison slider left and right to see how Ghazi Glass transforms dark, outdated spaces into modern architectural masterpieces.
          </p>
        </div>

        {/* Transformation Showcase Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {beforeAfterShowcase.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20 scale-102'
                  : theme === 'dark'
                    ? 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-900'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Case #{idx + 1}: {item.title.split(' transformed ')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-3xl overflow-hidden border ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          } shadow-2xl p-4 sm:p-6 space-y-6`}>
            
            {/* Title & Location Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-4">
              <div>
                <h3 className={`font-heading font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {currentItem.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{currentItem.location}</span>
                </p>
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 self-start sm:self-center">
                Drag Slider Below
              </span>
            </div>

            {/* Drag Slider Box */}
            <div 
              className="relative h-[320px] sm:h-[450px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none touch-pan-x"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              {/* After Image (Full background) */}
              <img 
                src={currentItem.afterImage} 
                alt="After Transformation" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-600/90 text-white font-extrabold text-xs tracking-wider rounded-lg shadow-xl backdrop-blur-md uppercase">
                AFTER (Ghazi Glass)
              </span>

              {/* Before Image (Clipped overlay) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={currentItem.beforeImage} 
                  alt="Before Transformation" 
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-slate-950/90 text-slate-300 font-extrabold text-xs tracking-wider rounded-lg shadow-xl backdrop-blur-md uppercase border border-slate-700">
                  BEFORE
                </span>
              </div>

              {/* Slider Line Divider */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-2xl">
                  <ChevronsLeftRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-xs sm:text-sm text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              {currentItem.description}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
