import React, { useContext, useEffect } from "react";
import Switch from "react-switch";

import { Context as ThemeContext } from "../../../Context/Theme/ThemeContext";
import { revertThemes, Themes } from "../../../Context/Theme/ThemeEnums";
import { Icon } from "./styles";

const ThemeSwitcher = () => {
  const {
    state: { theme },
    changeTheme,
  } = useContext(ThemeContext);
  const isDark = theme.themeName === Themes.dark;

  useEffect(() => {
    const themeInLocalStorage = localStorage.getItem("selectedTheme");
    if (!["white", "dark"].includes(themeInLocalStorage as string)) {
      if (["white", "dark"].includes(theme.themeName)) {
        changeTheme(theme.themeName);
      }
    } else if (themeInLocalStorage && themeInLocalStorage !== theme.themeName) {
      changeTheme(themeInLocalStorage);
    }
  }, []);

  return (
    <Switch
      checked={isDark}
      onChange={() => {
        changeTheme(revertThemes[theme.themeName]);
      }}
      checkedIcon={<Icon>{"🌜"}</Icon>}
      uncheckedIcon={<Icon>{"🌞"}</Icon>}
      offColor={"#000000"}
      height={26}
    />
  );
};

export default ThemeSwitcher;
