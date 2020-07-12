import React, { useContext } from "react";

import { Context } from "../../Context/ThemeContext";
import { TopMostDivWrapper } from "./styles";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

interface Props {
  seoProps?: {
    title?: string;
    desription?: string;
  };
  children: any;
}

const Layout = ({ children, seoProps }: Props) => {
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <>
      <SEO title={seoProps?.title} description={seoProps?.desription} />
      <TopMostDivWrapper theme={theme}>
        <Header />
        {children}
        <Footer />
      </TopMostDivWrapper>
    </>
  );
};

export default Layout;
