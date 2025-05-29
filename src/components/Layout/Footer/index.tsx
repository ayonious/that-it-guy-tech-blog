import React, { useContext } from "react";
import { GoRepo } from "react-icons/go";

import { Context as ThemeContext } from "../../../Context/Theme/ThemeContext";
import {
  IconWrapper,
  LinkCenter,
  NavBar,
  NavCenter,
  NavHeader,
  SpanWrapper,
} from "./styles";

const Footer = () => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

  return (
    <NavBar>
      <NavCenter theme={theme}>
        <NavHeader>
          <SpanWrapper>
            This is an opensource project you can find the source code in
          </SpanWrapper>
          <LinkCenter href="https://github.com/ayonious/that-it-guy-tech-blog">
            <SpanWrapper>github</SpanWrapper>
            <IconWrapper>
              <GoRepo />
            </IconWrapper>
          </LinkCenter>
        </NavHeader>
      </NavCenter>
    </NavBar>
  );
};

export default Footer;
