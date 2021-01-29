import * as React from "react";
import expect from "expect";

import { render } from "@testing-library/react";
import StyledButton from "../src/components/StyledButton";
import { Provider } from "../src/Context/Theme/ThemeContext";
import { Themes } from "../src/Context/Theme/ThemeEnums";

it("TagsList renders", () => {
  const tree = render(
    <StyledButton theme={Themes.white} title="Testing Title" to="/" />
  );
  expect(tree).toMatchSnapshot();
});
