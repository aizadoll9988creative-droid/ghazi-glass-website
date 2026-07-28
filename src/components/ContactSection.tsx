import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Star,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeMode, QuoteFormData } from '../types';

interface ContactSectionProps {
  theme: ThemeMode;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme, initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    serviceType: initialService || 'Glass Doors',
    glassType: '10mm Tempered Clear Glass',
    dimensions: '',
    location: 'Surjani Town, Karachi',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const phoneFormatted = '+92 311 0388523';
  const whatsappUrl = 'https://wa.me/923110388523?text=Hello%20Ghazi%20Glass%2C%20I%20want%20to%20book%20a%20free%20site%20visit.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp message text
    const text = encodeURIComponent(
      `*New Quote & Free Site Visit Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.serviceType}\n` +
      `*Glass Preference:* ${formData.glassType}\n` +
      `*Dimensions / Size:* ${formData.dimensions || 'Needs site measurement'}\n` +
      `*Location in Karachi:* ${formData.location}\n` +
      `*Notes:* ${formData.notes || 'None'}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/923110388523?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-900/90 border-t border-slate-800' : 'bg-slate-100/90 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Phone className="w-3.5 h-3.5" />
            <span>Contact Us 24/7</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Get Your <span className="silver-gradient-text">Free Site Visit & Quote</span>
          </h2>

          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Call us, WhatsApp us, or fill out the form below. Our technicians are on standby 24/7 across Karachi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            } shadow-2xl space-y-6`}>
              
              <div>
                <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest block mb-1">Company Info</span>
                <h3 className="font-heading font-extrabold text-2xl text-white">Ghazi Glass Aluminium & Interior</h3>
                <p className="text-xs text-slate-400 mt-1">Karachi's 5.0 ⭐ Rated Glass & Aluminium Fabrication Specialist</p>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Phone */}
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Phone & Hotline</span>
                    <a href={`tel:+923110388523`} className="font-bold text-sm text-white hover:text-cyan-400 transition-colors">
                      {phoneFormatted}
                    </a>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Available 24/7 for emergency glass calls</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 fill-emerald-400/20" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">WhatsApp Chat</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-emerald-400 hover:underline">
                      +92 311 0388523
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Instant response for photo quotes & dimensions</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Workshop & Office Address</span>
                    <p className="font-semibold text-white text-xs leading-relaxed">
                      House No. 15, Mohalla Abdul Raheem Goth, Yousuf Goth, Surjani Town, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Business Hours</span>
                    <p className="font-bold text-sm text-emerald-400">
                      Open 24 Hours / 7 Days A Week
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Embedded Google Map iframe */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 relative bg-slate-950">
              <iframe 
                title="Ghazi Glass Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.352467140889!2d67.0650!3d25.0215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzE3LjQiTiA2N8KwMDMnNTQuMCJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>

              <a 
                href="https://maps.google.com/?q=Surjani+Town,+Karachi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-slate-950/90 text-cyan-400 border border-cyan-500/30 rounded-xl text-xs font-bold flex items-center space-x-1 backdrop-blur-md"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            } shadow-2xl relative overflow-hidden`}>
              
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-white">Book Free Site Visit & Instant Quote</h3>
                <p className="text-xs text-slate-400 mt-1">Fill out your project details below to receive an instant price estimate and schedule a measurement visit.</p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">Quote Request Dispatched to WhatsApp!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    We opened WhatsApp with your exact specs. If WhatsApp didn't launch automatically, call us directly at <strong>+92 311 0388523</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0311 0388523"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Required Service</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Glass Doors">Glass Doors / Sliding Doors</option>
                        <option value="Aluminium Windows">Aluminium Windows & Doors</option>
                        <option value="Shower Enclosures">Shower Enclosure / Cabin</option>
                        <option value="Office Partitions">Office Glass Partitions</option>
                        <option value="Shop Front Glass">Shop Front Glass</option>
                        <option value="Custom Mirror">Stylish / LED Mirrors</option>
                        <option value="Glass Railing">Glass Staircase Railings</option>
                        <option value="UPVC Windows">UPVC Soundproof Windows</option>
                        <option value="Custom Glass Work">Custom Glass Fabrication</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Glass Specs / Thickness</label>
                      <select
                        value={formData.glassType}
                        onChange={(e) => setFormData({ ...formData, glassType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="10mm Tempered Clear Glass">10mm Toughened Tempered Clear</option>
                        <option value="12mm Tempered Clear Glass">12mm Toughened Tempered Clear</option>
                        <option value="Double Glazed Acoustic Glass">Double Glazed Soundproof (IGU)</option>
                        <option value="Frosted / Etched Privacy Glass">Frosted / Etched Privacy Glass</option>
                        <option value="Tinted Solar Control Glass">Tinted Solar Reflective Glass</option>
                        <option value="HD Copper-Free Silver Mirror">HD Belgian Silver Mirror</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Approx. Dimensions or Quantity</label>
                      <input 
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        placeholder="e.g. 7ft x 4ft (or 2 doors)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Your Location in Karachi</label>
                      <input 
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Surjani Town / DHA / Clifton / Gulshan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-300">Additional Notes / Special Instructions</label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe any custom fittings, wooden frames, or site access details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Quote Request via WhatsApp</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center pt-1">
                    🔒 Zero spam guarantee. We respect your privacy & respond within 15 minutes.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
