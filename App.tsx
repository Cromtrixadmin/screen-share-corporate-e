
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Transactions from './views/Transactions';
import Files from './views/Files';
import ExamSession from './views/ExamSession';
import Login from './views/Login';
import Verification from './views/Verification';
import ErrorState from './views/ErrorState';
import ScreenShareHome from './views/ScreenShareHome';
import AddBalance from './views/AddBalance';
import ResellerProfile from './views/ResellerProfile';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('SCREEN_SHARE_HOME');
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const renderView = () => {
    if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

    switch (currentView) {
      case 'SCREEN_SHARE_HOME': 
        return (
          <ScreenShareHome 
            onSelectDashboard={() => setCurrentView('DASHBOARD')} 
            onSelectRemote={() => setCurrentView('VERIFICATION')} 
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        );
      case 'DASHBOARD': 
        return (
          <Dashboard 
            onAddBalance={() => setCurrentView('ADD_BALANCE')} 
            onViewProfile={() => setCurrentView('RESELLER_PROFILE')}
          />
        );
      case 'TRANSACTIONS': return <Transactions />;
      case 'FILES': return <Files />;
      case 'RESELLER_PROFILE': 
        return (
          <ResellerProfile 
            onBack={() => setCurrentView('DASHBOARD')} 
            onAddBalance={() => setCurrentView('ADD_BALANCE')}
          />
        );
      case 'ADD_BALANCE': 
        return (
          <AddBalance 
            onBack={() => setCurrentView('DASHBOARD')} 
            onComplete={() => setCurrentView('TRANSACTIONS')} 
          />
        );
      case 'SESSION': return <ExamSession onEnd={() => setCurrentView('SCREEN_SHARE_HOME')} />;
      case 'VERIFICATION': return <Verification onComplete={() => setCurrentView('SESSION')} />;
      case 'ERROR': return <ErrorState onRetry={() => setCurrentView('VERIFICATION')} onNewLicense={() => setIsLoggedIn(false)} />;
      default: return <Dashboard onAddBalance={() => setCurrentView('ADD_BALANCE')} onViewProfile={() => setCurrentView('RESELLER_PROFILE')} />;
    }
  };

  const showHeader = isLoggedIn && !['SESSION', 'VERIFICATION', 'ERROR', 'SCREEN_SHARE_HOME', 'LOGIN'].includes(currentView);

  return (
    <div className="h-full flex flex-col">
      {showHeader && (
        <Header 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)}
          onLogout={() => setIsLoggedIn(false)}
        />
      )}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        {renderView()}
      </main>

      {/* Secret trigger for Demo - only visible if you know where to look */}
      <div className="fixed bottom-4 left-4 opacity-0 hover:opacity-100 transition-opacity z-50">
        <button onClick={() => setCurrentView('VERIFICATION')} className="text-[10px] text-gray-400">Trigger Verification Flow</button>
      </div>
    </div>
  );
};

export default App;
