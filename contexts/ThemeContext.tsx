
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('pink');

  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === 'pink' ? 'theme-blue' : 'theme-pink';
    root.classList.remove(oldTheme);
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'pink' ? 'blue' : 'pink'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
