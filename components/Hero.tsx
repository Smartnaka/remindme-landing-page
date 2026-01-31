
import React, { useEffect, useState } from 'react';
import { ChevronRight, User, MapPin, Clock, Bell } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            Never miss a <br />
            <span className="text-brand-light dark:text-brand-dark">lecture again.</span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-light-textSecondary dark:text-dark-textSecondary max-w-xl mx-auto lg:mx-0 font-medium">
            Remindme sends smart notifications before your classes so you stay on track without stress.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-light dark:bg-brand-dark text-white font-bold rounded-2xl shadow-2xl shadow-brand-light/20 dark:shadow-brand-dark/20 hover:scale-[1.05] transition-all duration-300 text-lg">
              Join the Waitlist
            </button>
            <a 
              href="#how-it-works"
              className="flex items-center gap-2 text-light-textPrimary dark:text-dark-textPrimary font-bold hover:gap-3 transition-all"
            >
              See how it works
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="relative mx-auto w-full max-w-[340px] lg:max-w-md flex justify-center perspective-1000">
          {/* Animated App Mockup with Pulse Glow */}
          <div className="relative w-72 h-[600px] sm:w-80 sm:h-[650px] bg-[#111] dark:bg-black rounded-[3.5rem] p-3 border-[12px] border-[#222] dark:border-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] dark:animate-pulse-glow overflow-hidden transition-all duration-500">
            {/* Camera / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#222] dark:bg-[#1a1a1a] rounded-b-2xl z-30"></div>

            {/* App UI */}
            <div className="bg-light-surface dark:bg-[#080808] h-full w-full rounded-[2.8rem] overflow-hidden flex flex-col">
              {/* Status Bar */}
              <div className="h-12 flex justify-between items-end px-8 pb-1 opacity-60">
                <span className="text-[10px] font-bold">9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-2 rounded-sm border border-current"></div>
                  <div className="w-3 h-2 rounded-sm border border-current"></div>
                </div>
              </div>

              {/* Header */}
              <div className="px-6 mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xs text-light-textSecondary dark:text-dark-textSecondary font-medium">Good morning,</h3>
                  <h2 className="text-lg font-bold">Tunde 👋</h2>
                </div>
                <div className="w-10 h-10 rounded-full bg-light-border dark:bg-dark-border flex items-center justify-center">
                  <User className="w-5 h-5 opacity-50" />
                </div>
              </div>

              {/* Scrollable Schedule */}
              <div className="flex-1 px-4 mt-8 space-y-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-light dark:text-brand-dark">Today's Lectures</span>
                  <span className="text-[10px] font-medium opacity-50">View all</span>
                </div>

                {/* Schedule Card 1 */}
                <div className={`p-4 rounded-3xl transition-all duration-500 transform ${activeStep === 0 ? 'bg-white dark:bg-dark-surface scale-105 shadow-xl border-brand-light/30' : 'bg-white/50 dark:bg-dark-surface/30 scale-100 opacity-60'} border border-transparent`}>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-bold">CSC 201</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeStep === 0 ? 'bg-brand-light/20 text-brand-light' : 'bg-transparent text-transparent'}`}>Active</span>
                  </div>
                  <h4 className="font-bold text-sm mb-2 leading-tight">Operating Systems & Architecture</h4>
                  <div className="flex gap-4 text-[10px] text-light-textSecondary dark:text-dark-textSecondary">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> ETF 2 Hall</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> 10:00 AM</div>
                  </div>
                </div>

                {/* Schedule Card 2 */}
                <div className={`p-4 rounded-3xl transition-all duration-500 transform ${activeStep === 1 ? 'bg-white dark:bg-dark-surface scale-105 shadow-xl border-brand-light/30' : 'bg-white/50 dark:bg-dark-surface/30 scale-100 opacity-60'} border border-transparent`}>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-bold">GNS 202</span>
                  </div>
                  <h4 className="font-bold text-sm mb-2 leading-tight">Peace and Conflict Studies</h4>
                  <div className="flex gap-4 text-[10px] text-light-textSecondary dark:text-dark-textSecondary">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Faculty Hall</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> 12:30 PM</div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="h-16 border-t border-light-border dark:border-dark-border mt-auto flex justify-around items-center px-6">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20"></div>
              </div>
            </div>

            {/* Enhanced Notification Popover */}
            <div className={`absolute left-1/2 -translate-x-1/2 w-[88%] transition-all duration-700 delay-200 z-50 ${activeStep === 0 ? 'top-1/2 opacity-100 scale-100 rotate-0' : 'top-[55%] opacity-0 scale-90 rotate-3'}`}>
              <div className="bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl p-5 rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] border border-brand-light/40 flex items-center gap-4 animate-float ring-4 ring-brand-light/5">
                <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center shrink-0 shadow-lg shadow-brand-light/40 ring-4 ring-white/10 dark:ring-black/20 text-white">
                  <Bell className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold mb-1 flex items-center justify-between">
                    <span>CSC 201 in 15 mins!</span>
                    <span className="w-2 h-2 rounded-full bg-brand-light animate-ping"></span>
                  </div>
                  <div className="text-[11px] text-light-textSecondary dark:text-dark-textSecondary leading-snug">Time to head to ETF 2 Hall. Don't be late!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-light/20 dark:bg-brand-dark/15 rounded-full -z-10 blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-light/20 dark:bg-brand-dark/15 rounded-full -z-10 blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
