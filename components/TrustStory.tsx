
import React from 'react';
import { Heart } from 'lucide-react';

const TrustStory: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light-surface dark:bg-dark-surface rounded-[3rem] p-8 md:p-16 text-center border border-light-border dark:border-dark-border">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-light/10 dark:bg-brand-dark/10 text-brand-light dark:text-brand-dark mb-6">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Built for students</h2>
          <div className="space-y-4 text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
            <p>
              Remindme was born in a busy lecture hall. As a university student in Nigeria, I saw how easily my friends and I missed classes simply because our timetables were buried in group chats or blurry PDFs.
            </p>
            <p>
              We built Remindme to solve this once and for all. It's not just another productivity app; it's a tool designed for the unique pace of Nigerian campus life. Simple, reliable, and exactly what you need to stay on top of your game.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="bg-white dark:bg-dark-background px-4 py-2 rounded-full text-sm font-semibold border border-light-border dark:border-dark-border">
              🇳🇬 Designed for Nigerian Campuses
            </span>
            <span className="bg-white dark:bg-dark-background px-4 py-2 rounded-full text-sm font-semibold border border-light-border dark:border-dark-border">
              🎓 Built by Students
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStory;
