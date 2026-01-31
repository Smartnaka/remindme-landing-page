
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-light-border dark:border-dark-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-light" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}>
        <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-light-surface dark:bg-dark-surface/30 reveal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Got Questions?</h2>
          <p className="text-light-textSecondary dark:text-dark-textSecondary font-medium">Everything you need to know about Remindme.</p>
        </div>
        
        <div className="bg-white dark:bg-dark-background/50 rounded-[2.5rem] p-8 md:p-12 border border-light-border dark:border-dark-border shadow-sm">
          <FAQItem 
            question="Is Remindme free to use?"
            answer="Yes! Remindme is free for all university students. We believe managing your education shouldn't be an extra expense."
          />
          <FAQItem 
            question="Does it work without an internet connection?"
            answer="Absolutely. Once you've set up your timetable, reminders are stored locally on your device and will trigger even if you're offline."
          />
          <FAQItem 
            question="How do I add my timetable?"
            answer="You can manually input your courses in less than 2 minutes. We're also working on a 'PDF-to-Schedule' feature for selected Nigerian universities."
          />
          <FAQItem 
            question="Can I set custom reminder times?"
            answer="Yes, you can choose to be notified 10, 15, 30, or even 60 minutes before your lecture starts."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
