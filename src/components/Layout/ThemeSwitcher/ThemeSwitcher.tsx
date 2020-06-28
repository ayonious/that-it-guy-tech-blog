import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import React, { useContext, useEffect } from "react";

import { Context } from "../../../Context/ThemeContext";
import { revertThemes, Themes } from "../../../Context/ThemeEnums";

const ThemeSwitcher = () => {
  const {
    state: { theme },
    changeTheme,
  } = useContext(Context);
  const isDark = theme.themeName === Themes.dark;

  useEffect(() => {
    console.log("testing language in context");
    const themeInLocalStorage = localStorage.getItem("selectedTheme");
    if (!["white", "dark"].includes(themeInLocalStorage)) {
      if (["white", "dark"].includes(theme.themeName)) {
        console.log("changeTheme(theme.themeName);", theme.themeName);
        changeTheme(theme.themeName);
      }
    } else if (themeInLocalStorage && themeInLocalStorage !== theme.themeName) {
      console.log(
        "changed theme in context",
        `themeInLocalStorage = ${themeInLocalStorage}`,
        `state.theme = ${theme.themeName}`
      );
      changeTheme(themeInLocalStorage);
    }
  }, []);

  console.log("current theme is", theme, isDark);

  return (
    <FormControlLabel
      control={
        <Switch
          size="medium"
          checked={isDark}
          onClick={() => {
            console.log(
              "theme switcher",
              theme.themeName,
              revertThemes[theme.themeName]
            );
            changeTheme(revertThemes[theme.themeName]);
          }}
        />
      }
      label={isDark ? "🌚 Dark Theme" : "🌞 Light Theme"}
    />
  );
};

export default ThemeSwitcher;
