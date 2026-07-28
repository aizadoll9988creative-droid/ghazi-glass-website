import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '../data/faqData';
import { ThemeMode } from '../types';

interface FaqSectionProps {
  theme: ThemeMode;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ theme }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappUrl = 'https://wa.me/923110388523?text=Hello%20Ghazi%20Glass%2C%20I%20have%20a%20question%20about%20your%20services.';

  return (
    <section id="faq" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Frequently Asked <span className="silver-gradient-text">Questions</span>
          </h2>

          <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about glass thickness, free site visits, 24/7 service, and installation timelines in Karachi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  theme === 'dark' 
                    ? isOpen ? 'bg-slate-900/90 border-cyan-500/40 shadow-xl' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    : isOpen ? 'bg-white border-cyan-500/40 shadow-md' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-heading font-bold text-sm sm:text-base ${
                    isOpen ? 'text-cyan-400' : theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen 
                      ? 'bg-cyan-500 text-slate-950 rotate-180' 
                      : theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm border-t border-slate-800/40"
                    >
                      <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-white text-sm">Have a specific custom requirement?</h4>
            <p className="text-xs text-slate-400">Our senior glass technician is available 24/7 on WhatsApp & Phone.</p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl flex items-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:+923110388523`}
              className="bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs uppercase px-4 py-2.5 rounded-xl flex items-center space-x-1.5 border border-slate-700"
            >
              <Phone className="w-4 h-4" />
              <span>Call +923110388523</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
