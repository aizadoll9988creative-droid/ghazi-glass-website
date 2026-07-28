import React from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  Phone, 
  Calculator, 
  Star, 
  Clock, 
  CheckCircle2, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  openQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, openQuoteModal }) => {
  const whatsappUrl = 'https://wa.me/923110388523?text=Hello%20Ghazi%20Glass%2C%20I%20want%20a%20free%20quote%20for%20my%20project.';
  const phoneCallUrl = 'tel:+923110388523';

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16">
      {/* Background Image Layer with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=85" 
          alt="Modern Architectural Glass & Aluminium Facade" 
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-75"
        />
        {/* Dark Metallic Overlay */}
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75' 
            : 'bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/70'
        }`}></div>
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            {/* Rating & Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-slate-200 shadow-xl">
              <span className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                <span className="font-bold text-white">5.0</span>
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Karachi's Premier Glass & Aluminium</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-emerald-400 hidden sm:inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-heading">
              <span className="block text-white">Premium Glass &</span>
              <span className="silver-gradient-text">Aluminium Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              We design, manufacture, supply, and install premium glass doors, aluminium windows, mirrors, shower enclosures, office partitions, shop fronts, and custom glass solutions across Karachi.
            </p>

            {/* Three CTA Buttons as explicitly requested */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Button 1: Get Free Quote */}
              <button
                onClick={openQuoteModal}
                className="group bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: WhatsApp Now */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-98 border border-emerald-500/30"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Now</span>
              </a>

              {/* Button 3: Call Now */}
              <a
                href={phoneCallUrl}
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 active:scale-98 backdrop-blur-md"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Highlights Bullet List */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Free On-Site Visit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>100% Toughened Glass</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>24/7 Rapid Response</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Feature Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm">Ghazi Glass Guarantee</h3>
                    <p className="text-[11px] text-slate-400">Surjani Town, Karachi</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3">
                  <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-xs">Direct Factory Pricing</p>
                    <p className="text-[11px] text-slate-400">No middleman commissions. Maximum value guaranteed across Karachi.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-xs">Safety Tempered Glass</p>
                    <p className="text-[11px] text-slate-400">Heat-treated shatterproof safety glass engineered for high durability.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-xs">Fast 3-5 Day Delivery</p>
                    <p className="text-[11px] text-slate-400">Precision manufacturing and prompt expert installation.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <a
                  href={`tel:+923110388523`}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Hotline: +92 311 0388523</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Floating Quick Stats Counter Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-2xl text-center border border-slate-800/80 bg-slate-900/60">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-cyan-400">15+</div>
            <p className="text-xs text-slate-300 font-medium">Years Experience</p>
          </div>
          <div className="glass-panel p-4 rounded-2xl text-center border border-slate-800/80 bg-slate-900/60">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-400">1200+</div>
            <p className="text-xs text-slate-300 font-medium">Projects Installed</p>
          </div>
          <div className="glass-panel p-4 rounded-2xl text-center border border-slate-800/80 bg-slate-900/60">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-amber-400">5.0 ⭐</div>
            <p className="text-xs text-slate-300 font-medium">Google Rating</p>
          </div>
          <div className="glass-panel p-4 rounded-2xl text-center border border-slate-800/80 bg-slate-900/60">
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-indigo-400">24/7</div>
            <p className="text-xs text-slate-300 font-medium">Customer Support</p>
          </div>
        </div>

      </div>
    </section>
  );
};
