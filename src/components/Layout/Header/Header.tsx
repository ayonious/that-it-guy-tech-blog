import React from "react";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import TagSearchBox from "../../TagSearchBox/TagSearchBox";
import { NavBar } from "./styles";

const Header = () => {
  return (
    <NavBar>
      <ThemeSwitcher />
      <TagSearchBox />
    </NavBar>
  );
};

export default Header;
