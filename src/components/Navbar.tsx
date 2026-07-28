import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Shield, 
  Calculator,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  openQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, openQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const phoneFormatted = '+92 311 0388523';
  const whatsappUrl = 'https://wa.me/923110388523?text=Hello%20Ghazi%20Glass%2C%20I%20would%20like%20to%20get%20a%20free%20quote.';

  return (
    <>
      {/* Top Banner Bar */}
      <div className={`${theme === 'dark' ? 'bg-slate-900 border-b border-slate-800 text-slate-300' : 'bg-slate-100 border-b border-slate-200 text-slate-700'} text-xs py-1.5 px-4 hidden md:block transition-colors`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-cyan-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open 24 Hours in Karachi</span>
            </span>
            <span className="text-slate-400">|</span>
            <span>Surjani Town, Karachi, Pakistan</span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
              <span>5.0 Google Rated (48+ Reviews)</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:+923110388523`} 
              className="hover:text-cyan-400 transition-colors flex items-center space-x-1 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{phoneFormatted}</span>
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors flex items-center space-x-1 font-medium text-emerald-400"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/20" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-lg py-3'
          : theme === 'dark'
            ? 'bg-slate-950/60 backdrop-blur-sm py-4 border-b border-slate-800/40'
            : 'bg-white/60 backdrop-blur-sm py-4 border-b border-slate-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-slate-800 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
                <Shield className="w-5 h-5 text-cyan-400 relative z-10" />
              </div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-xl tracking-wider leading-tight text-white flex items-center gap-1.5">
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>GHAZI</span>
                <span className="text-cyan-400 font-normal text-xs uppercase tracking-widest bg-cyan-950/80 border border-cyan-800/60 px-1.5 py-0.5 rounded">GLASS</span>
              </div>
              <p className={`text-[10px] tracking-widest uppercase font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Aluminium & Interior
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-cyan-400 relative group py-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
              }`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quote Modal Button */}
            <button
              onClick={openQuoteModal}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center space-x-2 cursor-pointer active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-900 text-amber-400' : 'bg-slate-100 text-slate-700'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[60px] z-30 p-4 border-b sm:hidden ${
              theme === 'dark' ? 'bg-slate-950/95 border-slate-800 backdrop-blur-xl text-white' : 'bg-white/95 border-slate-200 backdrop-blur-xl text-slate-900'
            } shadow-2xl`}
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Navigation</span>
                <span className="text-xs text-amber-400 flex items-center">
                  <Star className="w-3 h-3 fill-amber-400 mr-1" /> 5.0 Google Rated
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'dark' ? 'hover:bg-slate-900 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Get Free Instant Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:+923110388523`}
                    className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-semibold text-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
