// this is to install code syntax highlighting
import "./node_modules/highlight.js/styles/railscasts.css";
import "./src/css/layout.css";

import React from "react";
import { Provider } from "./src/Context/ThemeContext";

// this is a gatsby function
export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
