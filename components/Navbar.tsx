
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-brand-light dark:bg-brand-dark flex items-center justify-center text-white font-black text-lg">R</div>
            <span className="text-xl font-bold tracking-tighter">Remindme</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-light-surface dark:hover:bg-dark-surface transition-all active:scale-90"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-brand-dark" />
              ) : (
                <Moon className="w-5 h-5 text-light-textSecondary" />
              )}
            </button>
            <a 
              href="#cta"
              className="bg-brand-light dark:bg-brand-dark text-white px-5 sm:px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-brand-light/20 transition-all active:scale-95"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
