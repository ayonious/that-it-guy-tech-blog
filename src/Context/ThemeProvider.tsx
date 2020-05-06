import React, { useState, useEffect } from "react";
import ThemeContext, {
  mapThemeNameToDetails,
  Themes,
  ThemeDetails,
} from "./ThemeContext";

const fetchLocalStorageTheme = () => {
  const ret = localStorage.getItem("theme");
  console.log("fetchLocalStorageTheme", ret);
  return ret;
};

const saveThemeInLocalStorage = (themeName) => {
  localStorage.setItem("theme", themeName);
};

const fetchLocalStorageThemeOrDefault = (): ThemeDetails => {
  const themeName = fetchLocalStorageTheme() || Themes.dark;
  console.log(
    "themeName",
    "fetchLocalStorageThemeOrDefault",
    themeName,
    mapThemeNameToDetails[themeName]
  );
  return mapThemeNameToDetails[themeName];
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(mapThemeNameToDetails[Themes.dark]);
  const value = { theme, setTheme };

  /*
  console.log("ThemeProvider", theme);
  useEffect(() => {
    saveThemeInLocalStorage(theme.themeName);
  }, [theme]);
  */

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
