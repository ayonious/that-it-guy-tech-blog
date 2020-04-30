// this is to install code syntax highlighting
import "./node_modules/highlight.js/styles/railscasts.css";
import "./src/css/layout.css";

import React from "react";
import ThemeProvider from "./src/Context/ThemeProvider";

// this is a gatsby function
export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
