import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeMode } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  theme: ThemeMode;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedService, theme }) => {
  const [serviceType, setServiceType] = useState(preselectedService || 'Glass Doors');
  const [widthFt, setWidthFt] = useState('6');
  const [heightFt, setHeightFt] = useState('7');
  const [glassThickness, setGlassThickness] = useState('12mm Toughened Tempered Glass');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [location, setLocation] = useState('Surjani Town, Karachi');

  if (!isOpen) return null;

  // Approximate cost estimation engine for immediate client feedback
  const areaSqFt = (parseFloat(widthFt) || 0) * (parseFloat(heightFt) || 0);
  let baseRatePerSqFt = 450; // PKR approx base estimate for reference
  if (serviceType.includes('Shower') || serviceType.includes('Mirror')) baseRatePerSqFt = 550;
  if (serviceType.includes('Aluminium') || serviceType.includes('UPVC')) baseRatePerSqFt = 600;
  if (glassThickness.includes('12mm') || glassThickness.includes('Double')) baseRatePerSqFt += 150;

  const estimatedMinTotal = Math.round(areaSqFt * baseRatePerSqFt);
  const estimatedMaxTotal = Math.round(estimatedMinTotal * 1.2);

  const handleSendEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Instant Quote Request - Ghazi Glass Website*\n\n` +
      `*Client Name:* ${clientName || 'Inquirer'}\n` +
      `*Phone:* ${clientPhone}\n` +
      `*Service:* ${serviceType}\n` +
      `*Estimated Dimensions:* ${widthFt}ft (W) x ${heightFt}ft (H) = ${areaSqFt} sq.ft\n` +
      `*Glass Specs:* ${glassThickness}\n` +
      `*Estimated Range:* PKR ${estimatedMinTotal.toLocaleString()} - ${estimatedMaxTotal.toLocaleString()}\n` +
      `*Location in Karachi:* ${location}\n\n` +
      `Please confirm free site visit date!`
    );

    window.open(`https://wa.me/923110388523?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`w-full max-w-xl rounded-3xl p-6 sm:p-8 border shadow-2xl relative my-8 ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl">Instant Glass Quote Estimator</h3>
            <p className="text-xs text-slate-400">Calculate instant cost estimate & book free site visit</p>
          </div>
        </div>

        <form onSubmit={handleSendEstimate} className="space-y-4">
          
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Select Service</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
            >
              <option value="Glass Doors">Glass Doors & Sliding Doors</option>
              <option value="Aluminium Windows">Aluminium Windows & Doors</option>
              <option value="Shower Enclosures">Shower Enclosure / Glass Cabin</option>
              <option value="Office Partitions">Office Glass Partitions</option>
              <option value="Shop Front Glass">Shop Front Glass</option>
              <option value="Stylish Mirrors">Stylish / LED Mirrors</option>
              <option value="Glass Railing">Glass Balcony & Staircase Railing</option>
              <option value="UPVC Windows">UPVC Windows</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">Width (Feet)</label>
              <input 
                type="number"
                min="1"
                value={widthFt}
                onChange={(e) => setWidthFt(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">Height (Feet)</label>
              <input 
                type="number"
                min="1"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Glass Specification</label>
            <select
              value={glassThickness}
              onChange={(e) => setGlassThickness(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
            >
              <option value="10mm Toughened Tempered Glass">10mm Toughened Tempered Safety Glass</option>
              <option value="12mm Toughened Tempered Glass">12mm Heavy Toughened Tempered Safety Glass</option>
              <option value="Double Glazed Acoustic Insulated Glass">Double Glazed Soundproof Acoustic Glass</option>
              <option value="Frosted Privacy Glass">Frosted / Etched Privacy Glass</option>
              <option value="HD Belgian Silver Mirror">HD Belgian Copper-Free Silver Mirror</option>
            </select>
          </div>

          {/* Instant Estimate Calculation Output */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 to-indigo-950 border border-indigo-900/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Calculated Area</span>
              <span className="text-sm font-extrabold text-cyan-400 font-mono">{areaSqFt} Sq.Ft</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Budget Range</span>
              <span className="text-sm font-extrabold text-emerald-400 font-mono">
                PKR {estimatedMinTotal.toLocaleString()} - {estimatedMaxTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">Your Name *</label>
              <input 
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Ali Raza"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-300">WhatsApp / Phone *</label>
              <input 
                type="tel"
                required
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="e.g. 0311 0388523"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Karachi Area / Location</label>
            <input 
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Surjani Town, DHA, Clifton, Gulshan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Estimate & Book Free Visit on WhatsApp</span>
          </button>

          <p className="text-[10px] text-slate-400 text-center">
            ✔ Free on-site inspection & exact measurement in Karachi with zero obligation.
          </p>
        </form>

      </motion.div>
    </div>
  );
};
