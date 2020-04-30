import React from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

import ThemeContext from "../Context/ThemeContext";
import { TopMostDivWrapper } from "../css/commonstyles";

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <TopMostDivWrapper theme={theme}>
          <Header />
          {children}
          <Footer />
        </TopMostDivWrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
