import GlobalStyle from './src/css/globalStyles';

import React from "react";
import { Provider as ThemeProvider } from "./src/Context/Theme/ThemeContext";
import { Provider as TagFilterProvider } from "./src/Context/TagFilter/TagFilterContext";
import { fonts } from './config';

const AsyncFontLoad = () => (
  <link
    rel="stylesheet"
    href={ fonts }
  />
);


// this is a gatsby function
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider><TagFilterProvider><GlobalStyle/><AsyncFontLoad/>{element}</TagFilterProvider></ThemeProvider>;
};
