import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { LinkDivWrapper } from "../css/commonstyles";

import { PostsSectionWrapper } from "../components/PostList/styles";

import ThemeContext from "../Context/ThemeContext";

const Error = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Layout>
          <PostsSectionWrapper>
            <h1>Oops you reached a deadend!!</h1>
            <h4>
              <LinkDivWrapper theme={theme}>
                <Link to={`/`}>Go Back To Home</Link>
              </LinkDivWrapper>
            </h4>
          </PostsSectionWrapper>
        </Layout>
      )}
    </ThemeContext.Consumer>
  );
};

export default Error;
