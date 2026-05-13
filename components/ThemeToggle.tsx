import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 transition-all hover:scale-105 border border-slate-300 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      <div className="relative w-12 h-6 bg-slate-400 dark:bg-slate-600 rounded-full transition-colors">
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 transform ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">
        {isDark ? 'Cave Mode' : 'Light Mode'}
      </span>
      {isDark ? <Moon size={16} className="text-brand-neonBlue" /> : <Sun size={16} className="text-yellow-500" />}
    </button>
  );
};

export default ThemeToggle;