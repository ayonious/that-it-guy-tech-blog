import React, { useContext, PropsWithChildren } from "react";

import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
import { TopMostDivWrapper } from "./styles";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

interface Props extends PropsWithChildren {
  seoProps?: {
    title?: string;
    description?: string;
  };
}

const Layout = ({ children, seoProps }: Props) => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

  return (
    <>
      <SEO title={seoProps?.title} description={seoProps?.description} />
      <TopMostDivWrapper theme={theme}>
        <Header />
        {children}
        <Footer />
      </TopMostDivWrapper>
    </>
  );
};

export default Layout;
