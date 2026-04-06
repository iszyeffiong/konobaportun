import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, X, Mail, Instagram, ArrowRight, Zap } from 'lucide-react';

interface SaleBannerProps {
  baseDiscount?: number; // Starting discount (default 80%)
  reductionRate?: number; // Discount reduction per cycle (default 3%)
  cycleHours?: number; // Cycle duration (default 4 hours)
  email?: string;
  instagramUrl?: string;
}

const SaleBanner: React.FC<SaleBannerProps> = ({
  baseDiscount = 80,
  reductionRate = 3,
  cycleHours = 4,
  email = "buildwithwackky@gmail.com",
  instagramUrl = "https://www.instagram.com/youkehhenry?igsh=MTdvcTF1ZXdwdzNvdA%3D%3D&utm_source=qr"
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [currentDiscount, setCurrentDiscount] = useState<number>(baseDiscount);

  const CYCLE_SECONDS = cycleHours * 3600;

  useEffect(() => {
    // 1. Initialize logic
    const setupTimer = () => {
      let startTime = localStorage.getItem('fomo_banner_start_time');

      if (!startTime) {
        startTime = Date.now().toString();
        localStorage.setItem('fomo_banner_start_time', startTime);
      }

      const totalElapsedSeconds = Math.floor((Date.now() - parseInt(startTime)) / 1000);
      const periodsElapsed = Math.floor(totalElapsedSeconds / CYCLE_SECONDS);
      const remainingSeconds = CYCLE_SECONDS - (totalElapsedSeconds % CYCLE_SECONDS);

      const newDiscount = Math.max(3, baseDiscount - (periodsElapsed * reductionRate));

      setCurrentDiscount(newDiscount);
      setTimeLeft(remainingSeconds);
    };

    setupTimer();

    // 2. Interval to update timer
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setupTimer(); // Recalculate if cycle ends
          return CYCLE_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [baseDiscount, reductionRate, CYCLE_SECONDS]);

  // Format seconds to HH:MM:SS
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] w-full overflow-hidden bg-background/90 backdrop-blur-2xl border-t border-primary/20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Discount Segment */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 blur-md rounded-full animate-pulse" />
              <Zap className="w-5 h-5 text-primary relative fill-primary" />
            </div>
            <p className="text-sm font-bold tracking-tight">
              FLASH OFFER: <span className="text-primary text-lg ml-1">{currentDiscount}% OFF</span>
            </p>
            <div className="h-4 w-[1px] bg-border mx-2 hidden md:block" />
            <p className="hidden lg:block text-xs text-muted-foreground">
              Discount drops {reductionRate}% every {cycleHours} hours
            </p>
          </div>

          {/* Timer Segment */}
          <div className="flex items-center gap-4 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-primary animate-spin-slow" />
              <span className="text-sm font-mono font-black text-primary tabular-nums">
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground leading-none">
              Resets & <br /> Drops Soon
            </div>
          </div>

          {/* Action Segment */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${email}`}
                className="p-1.5 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                title="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                title="Instagram Contact"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-full hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive group"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SaleBanner;
