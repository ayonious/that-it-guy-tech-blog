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
import { PageSubTitle, PageTitle } from "../../../../config";

const Header = () => {
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <NavBar>
      <ThemeSwitcher />
      <LinkDivWrapper theme={theme}>
        <Link to={"/"}>
          <PageTitleWrapper>{PageTitle}</PageTitleWrapper>
          <PageSubTitleWrapper>{PageSubTitle}</PageSubTitleWrapper>
        </Link>
      </LinkDivWrapper>
    </NavBar>
  );
};

export default Header;
