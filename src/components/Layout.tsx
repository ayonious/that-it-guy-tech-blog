import React, { useState } from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

import "../css/layout.css";
import ThemeContext, { darkTheme } from "../Context/ThemeContext";
import { TopMostDivWrapper } from "../css/commonstyles";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <TopMostDivWrapper theme={theme}>
        <Header />
        {children}
        <Footer />
      </TopMostDivWrapper>
    </ThemeContext.Provider>
  );
};

export default Layout;
