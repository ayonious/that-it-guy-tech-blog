import React, { useContext } from "react";

import { GoMarkGithub } from "react-icons/go";

import { Context } from "../../../Context/ThemeContext";
import {
  NavBar,
  NavCenter,
  SpanWrapper,
  IconWrapper,
  NavHeader,
} from "./styles";

const Footer = () => {
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <NavBar>
      <NavCenter theme={theme}>
        <NavHeader>
          <SpanWrapper>
            This is an opensource project you can find the source code in
          </SpanWrapper>
          <a href="https://github.com/ayonious/that-it-guy-tech-blog">
            <SpanWrapper>github</SpanWrapper>
            <IconWrapper>
              <GoMarkGithub />
            </IconWrapper>
          </a>
        </NavHeader>
      </NavCenter>
    </NavBar>
  );
};

export default Footer;
