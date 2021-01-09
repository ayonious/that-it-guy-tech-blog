import Link from "gatsby-link";
import React, { useContext } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import HeaderTagsList from "../../HeaderTagsList";
import { Context as ThemeContext } from "../../../Context/Theme/ThemeContext";
import {
  NavBar,
  PageSubTitleWrapper,
  PageTitleWrapper,
  LinkDivWrapper,
} from "./styles";
import { PageSubTitle, PageTitle } from "../../../../config";

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
