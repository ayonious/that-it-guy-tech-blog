import React from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

import ThemeContext from "../Context/ThemeContext";
import ThemedTopMostDivWrapper from "./ThemedTopMostDivWrapper";

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ThemedTopMostDivWrapper theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemedTopMostDivWrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
