
import React from 'react';
import { Bell, Calendar, Clock, GraduationCap } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="p-10 rounded-[2.5rem] bg-light-surface dark:bg-dark-surface/50 border border-light-border dark:border-dark-border hover:border-brand-light dark:hover:border-brand-dark transition-all duration-500 group hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(52,199,89,0.25)] dark:hover:shadow-[0_25px_50px_-12px_rgba(52,199,89,0.4)]">
    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-dark-background flex items-center justify-center mb-8 shadow-sm text-brand-light dark:text-brand-dark group-hover:bg-brand-light dark:group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 transition-colors group-hover:text-brand-light dark:group-hover:text-brand-dark">{title}</h3>
    <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed text-lg transition-colors group-hover:text-light-textPrimary dark:group-hover:text-dark-textPrimary">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white dark:bg-dark-background reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Why students love Remindme</h2>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto font-medium">
            Everything you need to navigate through your university timetable without missing a beat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Bell className="w-7 h-7" />}
            title="Smart Reminders"
            description="Get notified exactly when you need to, so you have time to head to class."
          />
          <FeatureCard 
            icon={<Calendar className="w-7 h-7" />}
            title="Weekly Overview"
            description="See your entire week at a glance. No more scrolling through PDF timetables."
          />
          <FeatureCard 
            icon={<Clock className="w-7 h-7" />}
            title="Custom Times"
            description="Prefer 15 minutes before? Or 30? You decide when Remindme taps your shoulder."
          />
          <FeatureCard 
            icon={<GraduationCap className="w-7 h-7" />}
            title="Student First"
            description="Designed by students who understand the chaos of Nigerian university schedules."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
