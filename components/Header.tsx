
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { APP_NAME } from '../constants';
import { SparklesIcon } from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-theme-secondary/50 z-20">
      <div className="max-w-md mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <SparklesIcon className="w-7 h-7 text-theme-primary" />
          <h1 className="text-2xl font-bold text-theme-primary">{APP_NAME}</h1>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
