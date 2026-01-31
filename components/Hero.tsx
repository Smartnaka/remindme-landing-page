
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
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-light/10 dark:bg-brand-dark/10 border border-brand-light/20 dark:border-brand-dark/20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-light dark:text-brand-dark">Launching Soon for FUTA</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-light-textPrimary dark:text-dark-textPrimary">
            Never miss a <br className="hidden sm:block" />
            <span className="text-brand-light dark:text-brand-dark">lecture again.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-light-textSecondary dark:text-dark-textSecondary max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Remindme sends smart notifications before your classes so you stay on track without stress.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-light dark:bg-brand-dark text-white font-bold rounded-2xl shadow-xl shadow-brand-light/20 dark:shadow-brand-dark/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg">
              Join the Waitlist
            </button>
            <a 
              href="#how-it-works"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-6 text-light-textPrimary dark:text-dark-textPrimary font-bold hover:gap-3 transition-all"
            >
              See how it works
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-md flex justify-center perspective-1000 mt-12 lg:mt-0">
          {/* Animated App Mockup */}
          <div className="relative w-64 h-[540px] sm:w-80 sm:h-[650px] bg-[#111] dark:bg-black rounded-[3rem] sm:rounded-[3.5rem] p-2.5 sm:p-3 border-[10px] sm:border-[12px] border-[#222] dark:border-[#1a1a1a] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] dark:animate-pulse-glow overflow-hidden transition-all duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#222] dark:bg-[#1a1a1a] rounded-b-xl sm:rounded-b-2xl z-30"></div>

            <div className="bg-light-surface dark:bg-[#080808] h-full w-full rounded-[2.4rem] sm:rounded-[2.8rem] overflow-hidden flex flex-col">
              <div className="h-10 flex justify-between items-end px-8 pb-1 opacity-60">
                <span className="text-[9px] font-bold">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3.5 h-1.5 rounded-sm border border-current"></div>
                </div>
              </div>

              <div className="px-5 mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-[10px] text-light-textSecondary dark:text-dark-textSecondary font-medium">Good morning,</h3>
                  <h2 className="text-base font-bold">Israel 👋</h2>
                </div>
                <div className="w-8 h-8 rounded-full bg-light-border dark:bg-dark-border flex items-center justify-center">
                  <User className="w-4 h-4 opacity-50" />
                </div>
              </div>

              <div className="flex-1 px-4 mt-6 space-y-3">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-light dark:text-brand-dark">Today's Lectures</span>
                </div>

                <div className={`p-3.5 rounded-2xl sm:rounded-3xl transition-all duration-500 transform ${activeStep === 0 ? 'bg-white dark:bg-dark-surface scale-105 shadow-lg border-brand-light/30' : 'bg-white/50 dark:bg-dark-surface/30 scale-100 opacity-60'} border border-transparent`}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-bold">CSC 201</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${activeStep === 0 ? 'bg-brand-light/20 text-brand-light' : 'bg-transparent text-transparent'}`}>Active</span>
                  </div>
                  <h4 className="font-bold text-xs mb-1.5">Operating Systems</h4>
                  <div className="flex gap-3 text-[9px] text-light-textSecondary dark:text-dark-textSecondary">
                    <div className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> ETF 2 Hall</div>
                    <div className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> 10:00 AM</div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-2xl sm:rounded-3xl transition-all duration-500 transform ${activeStep === 1 ? 'bg-white dark:bg-dark-surface scale-105 shadow-lg border-brand-light/30' : 'bg-white/50 dark:bg-dark-surface/30 scale-100 opacity-60'} border border-transparent`}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-bold">GNS 202</span>
                  </div>
                  <h4 className="font-bold text-xs mb-1.5">Peace & Conflict</h4>
                  <div className="flex gap-3 text-[9px] text-light-textSecondary dark:text-dark-textSecondary">
                    <div className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> 1K cap</div>
                    <div className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> 12:30 PM</div>
                  </div>
                </div>
              </div>

              <div className="h-14 border-t border-light-border dark:border-dark-border mt-auto flex justify-around items-center px-6">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20"></div>
              </div>
            </div>

            <div className={`absolute left-1/2 -translate-x-1/2 w-[90%] transition-all duration-700 delay-200 z-50 ${activeStep === 0 ? 'top-[45%] opacity-100 scale-100' : 'top-[50%] opacity-0 scale-90'}`}>
              <div className="bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl p-4 rounded-2xl sm:rounded-[2rem] shadow-2xl border border-brand-light/40 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-light flex items-center justify-center shrink-0 shadow-lg text-white">
                  <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] sm:text-[12px] font-bold">CSC 201 in 15 mins!</div>
                  <div className="text-[9px] sm:text-[10px] text-light-textSecondary dark:text-dark-textSecondary font-medium">Head to ETF 2 Hall now.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-light/10 dark:bg-brand-dark/10 rounded-full -z-10 blur-[80px]"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-light/10 dark:bg-brand-dark/10 rounded-full -z-10 blur-[80px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
