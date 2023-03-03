import { Link } from "gatsby";
import React, { useContext } from "react";

import { PageSubTitle, PageTitle } from "../../../../config";
import { Context as ThemeContext } from "../../../Context/Theme/ThemeContext";
import ThemeSwitcher from "../ThemeSwitcher";
import {
  LinkDivWrapper,
  NavBar,
  PageSubTitleWrapper,
  PageTitleWrapper,
} from "./styles";

interface Props {
  isHome?: boolean;
}

const Header = ({ isHome }: Props) => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

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
