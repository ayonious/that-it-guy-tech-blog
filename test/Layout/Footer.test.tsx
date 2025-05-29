/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { expect } from "@jest/globals";
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Footer from "../../src/components/Layout/Footer";
import { Provider as ThemeProvider } from "../../src/Context/Theme/ThemeContext";
import { Provider as TagsProvider } from "../../src/Context/TagFilter/TagFilterContext";
import { darkTheme } from "../../src/Context/Theme/ThemeEnums";

it("Footer renders", () => {
  const tree = render(
    <StyledThemeProvider theme={darkTheme}>
      <ThemeProvider>
        <TagsProvider>
          <Footer />
        </TagsProvider>
      </ThemeProvider>
    </StyledThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
