import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { LinkDivWrapper } from "../css/commonstyles";
import { PostsSectionWrapper } from "../components/PostList/styles";

const Error = () => {
  return (
    <Layout>
      <PostsSectionWrapper>
        <h1>Oops you reached a deadend</h1>
        <h4>
          <LinkDivWrapper>
            <Link to={`/`}>Go Back To Home</Link>
          </LinkDivWrapper>
        </h4>
      </PostsSectionWrapper>
    </Layout>
  );
};

export default Error;
