import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { LinkDivWrapper } from "../css/commonstyles";

import ThemeContext from "../Context/ThemeContext";

const Error = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Layout>
          <h1>Oops you reached a deadend</h1>
          <h4>
            <LinkDivWrapper theme={theme}>
              <Link to={`/`}>Go Back To Home</Link>
            </LinkDivWrapper>
          </h4>
        </Layout>
      )}
    </ThemeContext.Consumer>
  );
};

export default Error;
