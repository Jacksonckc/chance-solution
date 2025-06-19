import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'pink' | 'blue' | 'neutral';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('pink');
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedTheme && ['pink', 'blue', 'neutral'].includes(savedTheme)) {
      setTheme(savedTheme);
    }

    setIsDark(savedDarkMode);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    // Set the data-theme attribute
    root.setAttribute('data-theme', theme);

    // Add dark mode class if enabled
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('darkMode', isDark.toString());
  }, [theme, isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const value = {
    theme,
    setTheme,
    isDark,
    toggleDark
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
