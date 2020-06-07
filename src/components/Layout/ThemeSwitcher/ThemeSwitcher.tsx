import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import React from "react";

import ThemeContext, {
  revertThemes,
  Themes,
} from "../../../Context/ThemeContext";

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const isDark = theme.themeName === Themes.dark;
        return (
          <FormControlLabel
            control={
              <Switch
                size="medium"
                checked={isDark}
                onClick={() => {
                  setTheme(revertThemes[theme.themeName]);
                }}
              />
            }
            label={isDark ? "🌚 Dark Theme" : "🌞 Light Theme"}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeSwitcher;
