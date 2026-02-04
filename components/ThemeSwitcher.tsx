
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-7 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary ${
        theme === 'pink' ? 'bg-pink-400' : 'bg-blue-400'
      }`}
    >
      <span
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          theme === 'pink' ? 'translate-x-0' : 'translate-x-7'
        }`}
      />
    </button>
  );
};

export default ThemeSwitcher;
