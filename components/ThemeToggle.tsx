
import React from 'react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div 
      onClick={toggleDarkMode}
      className="flex items-center bg-gray-100 dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full p-1 cursor-pointer group hover:border-primary transition-all"
    >
      {/* Light Mode Icon */}
      <div className={`flex items-center justify-center size-7 rounded-full transition-all duration-200 ${!darkMode ? 'bg-white text-primary shadow-sm' : 'text-text-secondary'}`}>
        <span className="material-symbols-outlined text-[18px] fill-1">light_mode</span>
      </div>
      {/* Dark Mode Icon */}
      <div className={`flex items-center justify-center size-7 rounded-full transition-all duration-200 ${darkMode ? 'bg-primary text-white shadow-sm' : 'text-text-secondary'}`}>
        <span className="material-symbols-outlined text-[18px] fill-1">dark_mode</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
