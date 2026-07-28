import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  BadgePercent, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Zap, 
  MapPin,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { whyChooseUsData } from '../data/faqData';
import { ThemeMode } from '../types';

interface WhyChooseUsProps {
  theme: ThemeMode;
  openQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ theme, openQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-400" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-cyan-400" />;
      case 'Clock24': return <Clock className="w-6 h-6 text-emerald-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-rose-400" />;
      default: return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-900/80 border-y border-slate-800' : 'bg-slate-100/90 border-y border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Check className="w-3.5 h-3.5" />
            <span>The Ghazi Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Why Choose <span className="silver-gradient-text">Ghazi Glass Aluminium</span>?
          </h2>

          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            We combine architectural precision, top-tier toughened glass, and 24/7 dedicated local service to make your residential and commercial vision a reality.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`p-6 rounded-2xl border transition-all duration-300 relative group ${
                theme === 'dark' 
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90' 
                  : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-xl'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>

              <h3 className={`font-heading font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>

              <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout Footer */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-white text-xl">Need a Free On-Site Inspection in Karachi?</h4>
            <p className="text-xs text-slate-300">Our senior technicians visit your location in Karachi for measurements & exact quotes.</p>
          </div>

          <button
            onClick={openQuoteModal}
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Book Free Site Visit
          </button>
        </div>

      </div>
    </section>
  );
};
