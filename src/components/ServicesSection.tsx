import React, { useState } from 'react';
import { 
  DoorOpen, 
  Sliders, 
  Maximize2, 
  AppWindow, 
  Columns, 
  DoorClosed, 
  Building2, 
  Briefcase, 
  Store, 
  Bath, 
  Droplets, 
  ShieldAlert, 
  Sparkles, 
  Sun, 
  Layers, 
  Home, 
  Wrench, 
  CheckCircle2, 
  ArrowUpRight,
  Filter,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data/servicesData';
import { ThemeMode, ServiceItem } from '../types';

interface ServicesSectionProps {
  theme: ThemeMode;
  openQuoteModalWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ theme, openQuoteModalWithService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (18)' },
    { id: 'glass', label: 'Glass Doors & Work' },
    { id: 'aluminium', label: 'Aluminium & UPVC' },
    { id: 'interior', label: 'Interior & Mirrors' },
    { id: 'commercial', label: 'Commercial & Office' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'DoorOpen': return <DoorOpen className="w-6 h-6" />;
      case 'Sliders': return <Sliders className="w-6 h-6" />;
      case 'Maximize2': return <Maximize2 className="w-6 h-6" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6" />;
      case 'Columns': return <Columns className="w-6 h-6" />;
      case 'DoorClosed': return <DoorClosed className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Store': return <Store className="w-6 h-6" />;
      case 'Bath': return <Bath className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (openQuoteModalWithService) {
      openQuoteModalWithService(serviceTitle);
    } else {
      const msg = encodeURIComponent(`Hello Ghazi Glass, I am interested in inquiring about ${serviceTitle}. Please share quote details.`);
      window.open(`https://wa.me/923110388523?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="services" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Specialist Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Comprehensive <span className="silver-gradient-text">Glass & Aluminium</span> Services
          </h2>
          
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            From custom frameless doors and structural aluminium windows to LED mirrors and corporate partitions, we engineer excellence across Karachi.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20 scale-102'
                  : theme === 'dark'
                    ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid (18 Items) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
                  theme === 'dark' 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10' 
                    : 'bg-white border-slate-200 hover:border-cyan-500/40 hover:shadow-xl'
                }`}
              >
                {/* Image & Badge Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                  {service.popularTag && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                      {service.popularTag}
                    </span>
                  )}

                  {/* Service Icon Badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-slate-950/90 border border-cyan-500/40 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-xl">
                    {getIconComponent(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className={`font-heading font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-400 transition-colors`}>
                      {service.title}
                    </h3>

                    <p className={`text-xs leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {service.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-1.5 mb-4">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-[11px] space-x-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications & CTA */}
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">
                      {service.specs || 'Custom Dimensions & Specs'}
                    </span>

                    <button
                      onClick={() => handleInquire(service.title)}
                      className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 font-bold text-xs transition-all flex items-center space-x-1 cursor-pointer"
                      title="Request Quote for this Service"
                    >
                      <span className="hidden sm:inline text-[11px]">Quote</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
