import React from "react";
import Link from "gatsby-link"; // not error

import { LinkDivWrapper } from "./styles";
import { ThemeDetails } from "../../Context/ThemeEnums";

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
