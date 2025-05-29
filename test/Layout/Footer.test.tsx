/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { expect } from "@jest/globals";
import * as React from "react";
import { ThemeProvider } from "styled-components";

import Footer from "../../src/components/Layout/Footer/index";
import { darkTheme } from "../../src/Context/Theme/ThemeEnums";
import { Context as ThemeContext } from "../../src/Context/Theme/ThemeContext";

jest.mock('react-icons/go', () => ({
  GoMarkGithub: () => <span>GitHub</span>
}));

const mockContextValue = {
  state: { theme: darkTheme },
  dispatch: jest.fn(),
  changeTheme: (theme: string) => {}
};

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={mockContextValue}>
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>
);

it("Footer renders", () => {
  const tree = render(
    <TestWrapper>
      <Footer />
    </TestWrapper>
  );
  expect(tree).toMatchSnapshot();
});
