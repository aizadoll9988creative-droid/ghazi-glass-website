import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Phone, 
  ArrowUp 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/923110388523?text=Hello%20Ghazi%20Glass%2C%20I%20need%20a%20free%20quote.';
  const phoneUrl = 'tel:+923110388523';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Floating Call Button */}
      <a
        href={phoneUrl}
        className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 hover:text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer group"
        title="Call Hotline: +92 311 0388523"
        aria-label="Call Ghazi Glass"
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button with Glow & Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer group animate-bounce"
        title="Chat on WhatsApp (+92 311 0388523)"
        aria-label="WhatsApp Ghazi Glass"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none"></span>
        <MessageSquare className="w-7 h-7 relative z-10 fill-white/20" />
        
        {/* Unread badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-slate-950 z-20">
          1
        </span>
      </a>

      {/* Back to Top Smooth Scroll Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};
