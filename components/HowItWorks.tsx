
import React from 'react';

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 group">
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-brand-light/10 dark:bg-brand-dark/10 text-brand-light dark:text-brand-dark flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-brand-light group-hover:text-white transition-all duration-500 z-10 relative">
        {number}
      </div>
      <div className="absolute inset-0 bg-brand-light blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-[240px]">
      {description}
    </p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-light-surface dark:bg-dark-surface rounded-[4rem] mx-4 my-8 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Remindme works</h2>
          <p className="text-light-textSecondary dark:text-dark-textSecondary font-medium">Simple. Efficient. Reliable.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-[2px] bg-light-border dark:bg-dark-border -z-0"></div>
          
          <Step 
            number="1"
            title="Add your lectures"
            description="Input your course codes, venues, and times once. It takes less than 2 minutes."
          />
          <Step 
            number="2"
            title="Set your reminder time"
            description="Choose how early you want to be notified. 10, 15, or 30 minutes? It's your call."
          />
          <Step 
            number="3"
            title="Get notified"
            description="Receive a smart notification before every class. Stay on top of your schedule."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
