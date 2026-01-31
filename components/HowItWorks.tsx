
import React from 'react';

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 group py-4 sm:py-0">
    <div className="relative">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-light/10 dark:bg-brand-dark/10 text-brand-light dark:text-brand-dark flex items-center justify-center text-xl sm:text-2xl font-bold mb-6 group-hover:bg-brand-light group-hover:text-white transition-all duration-500 z-10 relative">
        {number}
      </div>
      <div className="absolute inset-0 bg-brand-light blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 tracking-tight">{title}</h3>
    <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary max-w-[240px] leading-relaxed">
      {description}
    </p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-light-surface dark:bg-dark-surface rounded-[2.5rem] sm:rounded-[4rem] mx-4 my-8 reveal border border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">How Remindme works</h2>
          <p className="text-light-textSecondary dark:text-dark-textSecondary font-medium text-lg">The stress-free way to stay punctual.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-[1px] border-t-2 border-dashed border-light-border dark:border-dark-border -z-0"></div>
          
          <Step 
            number="1"
            title="Add your lectures"
            description="Input your course codes, venues, and times once. It takes less than 2 minutes."
          />
          <Step 
            number="2"
            title="Choose a buffer"
            description="Pick how early you want a nudge. 10, 15, or 30 minutes? You set the rules."
          />
          <Step 
            number="3"
            title="Class ready"
            description="Receive a smart notification wherever you are. No more 'Oh no, I forgot!'"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
