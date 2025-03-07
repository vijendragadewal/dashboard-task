"use client"; // Ensure it's a client component

import { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Create Provider Component
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to use Theme
export function useTheme() {
  return useContext(ThemeContext);
}
