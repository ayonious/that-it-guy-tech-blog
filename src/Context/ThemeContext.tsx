import React from "react";
import createThemeContext from "./createThemeContext";
import { darkTheme, mapThemeNameToDetails } from "./ThemeEnums";

const themeReducer = (state, action: { type: string; theme: string }) => {
  switch (action.type) {
    case "change_theme":
      localStorage.setItem("selectedTheme", action.theme);
      return {
        theme: mapThemeNameToDetails[action.theme],
      };
    default:
      return state;
  }
};

const changeTheme = (dispatch) => {
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
