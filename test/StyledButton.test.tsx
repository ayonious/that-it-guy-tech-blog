/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import StyledButton from "../src/components/StyledButton";
import { darkTheme } from "../src/Context/Theme/ThemeEnums";

it("StyledButton renders", () => {
  const tree = render(
    <StyledButton theme={darkTheme} title="Testing Title" to="/" />
  );
  expect(tree).toMatchSnapshot();
});
