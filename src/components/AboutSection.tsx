import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Clock, 
  Ruler, 
  Flame, 
  Sparkles, 
  CheckCircle2,
  Users,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeMode } from '../types';

interface AboutSectionProps {
  theme: ThemeMode;
  openQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme, openQuoteModal }) => {
  const processSteps = [
    {
      step: '01',
      title: 'Free On-Site Visit & Laser Measurement',
      desc: 'Our master technicians visit your location anywhere in Karachi to take exact measurements and evaluate structural framing.'
    },
    {
      step: '02',
      title: 'Material & Design Selection',
      desc: 'Choose from certified toughened tempered glass (8mm-19mm), powder-coated aluminium profiles, and custom hardware finishes.'
    },
    {
      step: '03',
      title: 'Precision Factory Fabrication',
      desc: 'Glass is CNC edge-polished, heat-tempered, and custom cut to exact tolerances at our workshop.'
    },
    {
      step: '04',
      title: 'Expert On-Site Installation',
      desc: 'Installed with heavy safety anchors, magnetic water seals, and thorough zero-dust cleanup protocols.'
    }
  ];

  return (
    <section id="about" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-900/80 border-y border-slate-800' : 'bg-slate-100/90 border-y border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image Collage & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                alt="Ghazi Glass Master Craftsmen at Work" 
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 shadow-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold font-heading text-lg">
                    15+
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">Years of Craftsmanship</h4>
                    <p className="text-xs text-slate-400">Serving Karachi since 2011</p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-xs font-bold text-emerald-400 block">⭐ 5.0 Google Rating</span>
                  <span className="text-[10px] text-slate-400">48+ Verified Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Ghazi Glass & Aluminium</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Karachi's Trusted Name for <span className="silver-gradient-text">Architectural Glass & Aluminium</span>
            </h2>

            <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              Located at House No. 15, Mohalla Abdul Raheem Goth, Surjani Town, Karachi, <strong>Ghazi Glass Aluminium & Interior</strong> is a premier full-service glass and aluminium engineering company. We specialize in designing, fabricating, and installing high-end glass doors, sliding window systems, office partition walls, luxury shower enclosures, and custom LED mirrors.
            </p>

            <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              We operate <strong>24 Hours a Day, 7 Days a Week</strong> to serve residential homeowners, corporate offices, retail shopfronts, and luxury real estate developments across Karachi with uncompromising quality and affordable pricing.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold">
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Safety Tempered Glass</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>24/7 Rapid Site Support</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Direct Factory Prices</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Free On-Site Measurements</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openQuoteModal}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl hover:shadow-cyan-500/25 transition-all"
              >
                Request Free Consultation
              </button>
            </div>
          </motion.div>

        </div>

        {/* Workflow Process Steps */}
        <div className="mt-16 border-t border-slate-800/80 pt-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl text-white">How We Work (Step-By-Step)</h3>
            <p className="text-xs text-slate-400 mt-1">Our seamless 4-step process ensures perfection from measurement to final installation.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, idx) => (
              <div 
                key={s.step}
                className={`p-6 rounded-2xl border relative ${
                  theme === 'dark' ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="font-heading font-extrabold text-3xl text-cyan-500/40 mb-3">{s.step}</div>
                <h4 className={`font-heading font-bold text-sm mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{s.title}</h4>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
