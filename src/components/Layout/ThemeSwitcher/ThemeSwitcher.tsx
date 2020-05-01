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
      {({ theme, setTheme }) => (
        <FormControlLabel
          control={
            <Switch
              size="medium"
              checked={theme.themeName === Themes.dark}
              onClick={() => {
                setTheme(revertThemes[theme.themeName]);
              }}
            />
          }
          label={
            theme.themeName === Themes.dark ? "🌚 Dark Theme" : "🌞 Light Theme"
          }
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeSwitcher;
