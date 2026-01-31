
import React from 'react';

const UniLogos: React.FC = () => {
  const unis = ["FUTA", "UNILAG", "OAU", "UNIBEN", "ABU", "LASU", "UI"];
  
  return (
    <div className="py-12 border-y border-light-border dark:border-dark-border overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-light-textSecondary dark:text-dark-textSecondary mb-8 opacity-60">
          Built for students at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {unis.map(uni => (
            <span key={uni} className="text-xl md:text-2xl font-black tracking-tighter hover:text-brand-light dark:hover:text-brand-dark cursor-default">
              {uni}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniLogos;
