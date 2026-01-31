
import React from 'react';

const Screenshot: React.FC<{ imageUrl: string, title: string }> = ({ imageUrl, title }) => (
  <div className="flex flex-col items-center min-w-[260px] sm:min-w-0">
    <div className="relative w-full aspect-[9/16] bg-light-surface dark:bg-dark-surface rounded-[2rem] border-[6px] border-light-textPrimary dark:border-dark-border shadow-2xl overflow-hidden mb-5">
       <img src={imageUrl} alt={title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
       {/* Screen glare effect */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-light-textSecondary dark:text-dark-textSecondary">{title}</span>
  </div>
);

const AppPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">A sneak peek inside</h2>
          <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary font-medium">Minimal design for maximum focus.</p>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="sm:hidden flex justify-center items-center gap-2 mb-6 opacity-50">
          <div className="w-8 h-0.5 bg-light-textSecondary dark:bg-dark-textSecondary rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Swipe to explore</span>
          <div className="w-8 h-0.5 bg-light-textSecondary dark:bg-dark-textSecondary rounded-full"></div>
        </div>

        <div className="flex overflow-x-auto pb-10 gap-6 sm:grid sm:grid-cols-3 sm:overflow-visible lg:gap-12 snap-x no-scrollbar">
          <div className="shrink-0 snap-center w-[280px] sm:w-auto">
            <Screenshot 
              imageUrl="https://picsum.photos/seed/remind-sc1/400/800"
              title="Clean Timetable"
            />
          </div>
          <div className="shrink-0 snap-center w-[280px] sm:w-auto">
            <Screenshot 
              imageUrl="https://picsum.photos/seed/remind-sc2/400/800"
              title="Smart Alerts"
            />
          </div>
          <div className="shrink-0 snap-center w-[280px] sm:w-auto">
            <Screenshot 
              imageUrl="https://picsum.photos/seed/remind-sc3/400/800"
              title="Simple Settings"
            />
          </div>
        </div>
        
        {/* Pagination Dots for Mobile */}
        <div className="sm:hidden flex justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-light-border dark:bg-dark-border"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-light-border dark:bg-dark-border"></div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
