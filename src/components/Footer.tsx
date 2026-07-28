import React from 'react';
import { 
  Shield, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  openQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, openQuoteModal }) => {
  const currentYear = new Date().getFullYear();
  const phoneFormatted = '+92 311 0388523';
  const whatsappUrl = 'https://wa.me/923110388523?text=Hello%20Ghazi%20Glass%2C%20I%20have%20an%20inquiry.';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Google Rating */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-wider text-white">GHAZI GLASS</span>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">Aluminium & Interior</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Karachi's leading specialist for premium toughened glass doors, aluminium windows, office partition walls, luxury shower cabins, and custom mirrors.
            </p>

            {/* Google Rating Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 inline-flex items-center space-x-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">5.0 / 5.0 Google Rating</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> Services</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> Portfolio Projects</a></li>
              <li><a href="#before-after" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> Before & After</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center"><ChevronRight className="w-3 h-3 text-cyan-400 mr-1" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Toughened Glass Doors & Sliding Doors</li>
              <li>• Heavy-Gauge Aluminium Windows</li>
              <li>• Frameless Glass Shower Cabins</li>
              <li>• Office Glass Partition Walls</li>
              <li>• Commercial Shop Front Glass</li>
              <li>• Custom Touch LED Mirrors</li>
              <li>• UPVC Soundproof Windows</li>
              <li>• Glass Balcony Railings</li>
            </ul>
          </div>

          {/* Col 4: Contact Details & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Contact & Hours</h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <span>House No. 15, Mohalla Abdul Raheem Goth, Yousuf Goth, Surjani Town, Karachi, Pakistan</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:+923110388523`} className="font-bold hover:text-cyan-400 transition-colors">
                  {phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-2 text-emerald-400">
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                  WhatsApp: +92 311 0388523
                </a>
              </div>

              <div className="flex items-center space-x-2 text-amber-400 pt-1 font-semibold">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openQuoteModal}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all cursor-pointer"
              >
                Get Free On-Site Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Ghazi Glass Aluminium & Interior. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for excellence in Karachi, Pakistan</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
