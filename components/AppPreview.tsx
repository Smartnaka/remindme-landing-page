
import React from 'react';

const Screenshot: React.FC<{ imageUrl: string, title: string }> = ({ imageUrl, title }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-64 h-[450px] bg-light-textPrimary dark:bg-dark-surface rounded-[2.5rem] border-8 border-light-textPrimary dark:border-dark-border shadow-xl overflow-hidden mb-6">
       <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <span className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary">{title}</span>
  </div>
);

const AppPreview: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">A sneak peek inside</h2>
          <p className="text-light-textSecondary dark:text-dark-textSecondary">Designed for clarity and ease of use.</p>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-8 sm:grid sm:grid-cols-3 sm:overflow-visible lg:gap-12 snap-x">
          <div className="shrink-0 snap-center">
            <Screenshot 
              imageUrl="https://picsum.photos/seed/remind1/400/800"
              title="Clean Timetable"
            />
          </div>
          <div className="shrink-0 snap-center">
            <Screenshot 
              imageUrl="https://picsum.photos/seed/remind2/400/800"
              title="Smart Notifications"
            />
          </div>
          <div className="shrink-0 snap-center">
            <Screenshot 
              imageUrl="https://picsum.photos/seed/remind3/400/800"
              title="Easy Setup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
