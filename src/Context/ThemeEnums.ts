import { themes } from "../../config";
export interface ThemeDetails {
  themeName: Themes;
  mainGrey: String;
  mainWhite: String;
  mainBlack: String;
  darkGrey: String;
}

export enum Themes {
  "dark" = "dark",
  "white" = "white",
}

const whiteTheme: ThemeDetails = {
  themeName: Themes.white,
  ...themes.white,
};

export const darkTheme: ThemeDetails = {
  themeName: Themes.dark,
  ...themes.dark,
};

export const mapThemeNameToDetails = {
  [Themes.dark]: darkTheme,
  [Themes.white]: whiteTheme,
};

export const revertThemes = {
  dark: "white",
  white: "dark",
};
