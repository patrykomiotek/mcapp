import React, { createContext, useState, useContext } from 'react';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: Theme,
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('You need to wrap component in ThemeProvider component');
  }

  return context;
}

type Props = {
  children: React.ReactNode
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggle = () => {
    setTheme((value) => value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    // setTheme((value) => value === 'light' ? 'dark' : 'light');
  }

  return { theme, toggle };
}

// PropsWithChildren
const ThemeProvider = ({ children }: Props) => {
  const { theme, toggle } = useTheme();
  return (
    <ThemeContext.Provider value={{
      theme,
      toggle
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { useThemeContext, ThemeProvider };
