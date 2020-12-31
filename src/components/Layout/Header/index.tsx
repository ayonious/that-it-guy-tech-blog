import Link from "gatsby-link";
import React, { useContext } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { Context } from "../../../Context/ThemeContext";
import {
  NavBar,
  PageSubTitleWrapper,
  PageTitleWrapper,
  LinkDivWrapper,
} from "./styles";

const Header = () => {
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <NavBar>
      <ThemeSwitcher />
      <LinkDivWrapper theme={theme}>
        <Link to={"/"}>
          <PageTitleWrapper>That IT Guy</PageTitleWrapper>
          <PageSubTitleWrapper>Personal Tech Blog</PageSubTitleWrapper>
        </Link>
      </LinkDivWrapper>
    </NavBar>
  );
};

export default Header;
