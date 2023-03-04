/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { expect } from "@jest/globals";
import * as React from "react";

import Footer from "../../src/components/Layout/Footer";
import { Provider } from "../../src/Context/Theme/ThemeContext";

it("Footer renders", () => {
  const tree = render(
    <Provider>
      <Footer />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
