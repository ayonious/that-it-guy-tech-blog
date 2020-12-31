import GlobalStyle from './src/css/globalStyles';

import React from "react";
import { Provider } from "./src/Context/ThemeContext";

// this is a gatsby function
export const wrapRootElement = ({ element }) => {
  return <Provider><GlobalStyle/>{element}</Provider>;
};
