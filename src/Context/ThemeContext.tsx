import React from "react";
import createThemeContext from "./createThemeContext";
import { darkTheme } from "./ThemeEnums";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "change_theme":
      localStorage.setItem("selectedTheme", action.theme);
      return {
        theme: action.language,
      };
    default:
      return state;
  }
};

const changeTheme = (dispatch) => {
  return (theme) => {
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
