
import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-light-border dark:border-dark-border bg-white dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">Remindme</span>
            </div>
            <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-sm">
              The smartest lecture reminder app built specifically for Nigerian university students.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-light-textSecondary dark:text-dark-textSecondary">
              <li><a href="#features" className="hover:text-brand-light transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-light transition-colors">How it works</a></li>
              <li><a href="#cta" className="hover:text-brand-light transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="p-2 bg-light-surface dark:bg-dark-surface rounded-full text-light-textSecondary dark:text-dark-textSecondary hover:text-brand-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-light-surface dark:bg-dark-surface rounded-full text-light-textSecondary dark:text-dark-textSecondary hover:text-brand-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/smartnaka" className="p-2 bg-light-surface dark:bg-dark-surface rounded-full text-light-textSecondary dark:text-dark-textSecondary hover:text-brand-light transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:hello@remindme.app" className="flex items-center gap-2 text-sm text-light-textSecondary dark:text-dark-textSecondary hover:text-brand-light transition-colors">
              <Mail className="w-4 h-4" />
              hello@remindme.app
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-light-border dark:border-dark-border text-center sm:flex sm:justify-between sm:text-left text-sm text-light-textSecondary dark:text-dark-textSecondary">
          <p>© {currentYear} Remindme. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built by <a href="https://github.com/smartnaka" target="_blank" rel="noopener noreferrer" className="text-brand-light dark:text-brand-dark font-semibold hover:underline">smartnaka</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
