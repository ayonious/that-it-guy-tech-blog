import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import React, { useContext, useEffect } from "react";

import { Context } from "../../../Context/ThemeContext";
import { revertThemes, Themes } from "../../../Context/ThemeEnums";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(Context);
  const isDark = theme.themeName === Themes.dark;

  useEffect(() => {
    console.log("testing language in context");
    const themeInLocalStorage = localStorage.getItem("selectedTheme");
    if (themeInLocalStorage && themeInLocalStorage !== theme) {
      changeTheme(themeInLocalStorage);
      console.log(
        "changed theme in context",
        `selectedLanguageInLopcalStorage = ${themeInLocalStorage}`,
        `state.selectedLanguage = ${theme}`
      );
    }
  }, []);

  return (
    <FormControlLabel
      control={
        <Switch
          size="medium"
          checked={isDark}
          onClick={() => {
            changeTheme(revertThemes[theme.themeName]);
          }}
        />
      }
      label={isDark ? "🌚 Dark Theme" : "🌞 Light Theme"}
    />
  );
};

export default ThemeSwitcher;
