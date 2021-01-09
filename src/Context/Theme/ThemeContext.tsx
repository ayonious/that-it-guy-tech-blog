import React from "react";
import createThemeContext from "./createThemeContext";
import {
  darkTheme,
  mapThemeNameToDetails,
  ThemeDetails,
  Themes,
} from "./ThemeEnums";

interface ContextProps {
  theme: ThemeDetails;
}

const themeReducer = (
  state: ContextProps,
  action: { type: string; theme: string }
) => {
  switch (action.type) {
    case "change_theme":
      localStorage.setItem("selectedTheme", action.theme);
      return {
        theme: mapThemeNameToDetails[action.theme as Themes],
      };
    default:
      return state;
  }
};

const changeTheme = (dispatch: any) => {
  return (theme: string) => {
    dispatch({ type: "change_theme", theme });
  };
};

export const { Context, Provider } = createThemeContext(
  themeReducer,
  { changeTheme },
  {
    theme: darkTheme,
  }
);
