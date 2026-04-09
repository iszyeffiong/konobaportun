import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail, Instagram, Zap, Sparkles, BadgePercent } from 'lucide-react';

interface SaleBannerProps {
  email?: string;
  instagramUrl?: string;
}

const SaleBanner: React.FC<SaleBannerProps> = ({
  email = "buildwithwackky@gmail.com",
  instagramUrl = "https://www.instagram.com/youkehhenry?igsh=MTdvcTF1ZXdwdzNvdA%3D%3D&utm_source=qr"
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[100] px-4 pointer-events-none">
      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            key="expanded"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="container mx-auto max-w-4xl pointer-events-auto"
          >
            <div className="relative overflow-hidden rounded-3xl bg-background/40 backdrop-blur-3xl border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              {/* Premium Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50" />
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-[80px] animate-pulse" />
              
              <div className="relative px-6 py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: Branding & Offer */}
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150 animate-pulse" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <BadgePercent className="w-8 h-8 text-white stroke-[2.5px]" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <Sparkles className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80">Premium Collection</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-1 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent italic">
                      LIMITED OFFER
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <span className="text-sm font-medium text-muted-foreground/60 line-through">5890Euro</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-black text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                          899Euro
                        </span>
                        <span className="text-[10px] font-bold text-primary italic uppercase tracking-widest">Only</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${email}`}
                      className="group/btn relative px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(var(--primary),0.3)]"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      <div className="relative flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>Secure Spot</span>
                      </div>
                    </a>
                    
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-muted-foreground hover:text-primary hover:scale-110"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>

                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-muted-foreground hover:text-foreground group/min shadow-inner"
                    title="Minimize"
                  >
                    <ChevronDown className="w-5 h-5 group-hover/min:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="minimized"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 pointer-events-auto"
          >
            <button
              onClick={() => setIsMinimized(false)}
              className="group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary shadow-[0_10px_30px_rgba(var(--primary),0.4)] hover:scale-105 transition-all active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
              <div className="relative w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/70">Hot Deal</div>
                <div className="text-sm font-bold text-white">899Euro</div>
              </div>
              <ChevronUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SaleBanner;
