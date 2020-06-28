import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { LinkDivWrapper } from "../css/commonstyles";

import { PostsSectionWrapper } from "../components/PostList/styles";

import { Context } from "../Context/ThemeContext";

const Error = () => {
  const { theme } = useContext(Context);

  return (
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
  );
};

export default Error;
