import React, { useState, useEffect } from "react";
import ThemeContext, {
  mapThemeNameToDetails,
  Themes,
  ThemeDetails,
} from "./ThemeContext";

const fetchLocalStorageTheme = () => {
  return localStorage.getItem("theme");
};

const saveThemeInLocalStorage = (themeName) => {
  localStorage.setItem("theme", themeName);
};

const fetchLocalStorageThemeOrDefault = (): ThemeDetails => {
  const themeName = fetchLocalStorageTheme() || Themes.dark;
  return mapThemeNameToDetails[themeName];
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(fetchLocalStorageThemeOrDefault());
  const value = { theme, setTheme };

  useEffect(() => {
    saveThemeInLocalStorage(theme.themeName);
  }, [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
