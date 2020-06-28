import React, { useContext } from "react";

import { Context } from "../Context/ThemeContext";
import { TopMostDivWrapper } from "../css/commonstyles";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const Layout = ({ children }) => {
  const { theme } = useContext(Context);

  return (
    <TopMostDivWrapper theme={theme}>
      <Header />
      {children}
      <Footer />
    </TopMostDivWrapper>
  );
};

export default Layout;
