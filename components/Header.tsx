import React from 'react';
import { View } from '../types';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, darkMode, toggleDarkMode, onLogout }) => {
  const NavLink = ({ view, label }: { view: View, label: string }) => (
    <button 
      onClick={() => setCurrentView(view)}
      className={`text-sm transition-colors font-medium leading-normal ${
        currentView === view 
          ? 'text-text-main dark:text-white font-semibold border-b-2 border-primary pb-0.5' 
          : 'text-text-secondary dark:text-text-secondary-dark hover:text-text-main dark:hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-white dark:bg-background-dark px-6 py-4 lg:px-10 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="flex items-center gap-8">
        <div 
          className="flex items-center gap-3 text-text-main dark:text-white cursor-pointer" 
          onClick={() => setCurrentView('SCREEN_SHARE_HOME')}
        >
          <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-primary to-[#0f2e33] text-white">
            <span className="material-symbols-outlined">hub</span>
          </div>
          <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">
            Nexus<span className="text-primary font-light">Resell</span>
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 ml-4">
          <NavLink view="SCREEN_SHARE_HOME" label="Home" />
          <NavLink view="DASHBOARD" label="Dashboard" />
          <NavLink view="TRANSACTIONS" label="Transactions" />
          <NavLink view="FILES" label="Files" />
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="h-8 w-px bg-border-light dark:bg-[#2D3A3F] hidden md:block"></div>
        
        <div className="flex items-center gap-3 pl-2 group cursor-pointer relative max-w-[180px]" onClick={onLogout}>
          <div className="text-right hidden sm:block overflow-hidden">
            <p className="text-sm font-bold text-text-main dark:text-white leading-none truncate">Alex Morgan</p>
            <p className="text-xs text-primary font-medium mt-1">Master Reseller</p>
          </div>
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-50 dark:ring-surface-dark transition-transform hover:scale-105 shrink-0" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5lrokREXhbtTOXmuM08wHIyYzJpa1k7Df659z8KWQoM09AaDuVGeoQtEuh3c4E4JF-hhJfEIHfCgxPj4nFIdQF7eO8GJW_Yt-mCBtTvuUubQ-hzp6jsJmf0FzogVur8ZAbMfjhIG4PvixKz7MbXFYhWOmfIa4600JaBCXKwGJ3CkWfBMYHy8N6Kg3lTRF_-nONAaQ6SBRw4b5IhxaV5ezwhrm_g-6Hu6nu4Nud2w7PURaGjAdBHN1Uj9AXd1OuHldLGxF1cEjOYk')` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;