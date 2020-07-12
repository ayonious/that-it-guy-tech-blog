import React from "react";

import ThemeSwitcher from "../ThemeSwitcher";
import { NavBar } from "./styles";

const Header = () => {
  return (
    <NavBar>
      <ThemeSwitcher />
    </NavBar>
  );
};

export default Header;
