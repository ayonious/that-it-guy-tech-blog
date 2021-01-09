import React, { useContext } from "react";
import Layout from "../components/Layout";
import StyledButton from "../components/StyledButton";

import {
  PostsSectionWrapper,
  PageTitleWrapper,
  PageSubTitleWrapper,
} from "../components/PostList/styles";

import { Context } from "../Context/Theme/ThemeContext";

const Error = () => {
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <Layout>
      <PostsSectionWrapper>
        <PageTitleWrapper>Oops you reached a deadend!!</PageTitleWrapper>
        <PageSubTitleWrapper>
          <StyledButton to={`/`} theme={theme} title={"Go Back To Home"} />
        </PageSubTitleWrapper>
      </PostsSectionWrapper>
    </Layout>
  );
};

export default Error;
