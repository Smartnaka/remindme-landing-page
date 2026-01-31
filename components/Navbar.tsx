
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-dark-background/80 backdrop-blur-md border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Remindme</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-brand-dark" />
              ) : (
                <Moon className="w-5 h-5 text-light-textSecondary" />
              )}
            </button>
            <button className="hidden sm:block text-sm font-medium hover:text-brand-light dark:hover:text-brand-dark transition-colors">
              Join Waitlist
            </button>
            <a 
              href="#cta"
              className="bg-brand-light dark:bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
