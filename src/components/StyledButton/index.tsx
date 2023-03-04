import { Link } from "gatsby";
import React from "react";

import { ThemeDetails } from "../../Context/Theme/ThemeEnums";
import { LinkDivWrapper } from "./styles";

export interface Props {
  theme: ThemeDetails;
  to: string;
  title: string;
}

const StyledButton = ({ theme, to, title }: Props) => {
  return (
    <LinkDivWrapper theme={theme}>
      <Link to={to}>{title}</Link>
    </LinkDivWrapper>
  );
};

export default StyledButton;
