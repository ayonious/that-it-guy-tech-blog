/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { expect } from "@jest/globals";
import * as React from "react";

import Header from "../../src/components/Layout/Header";
import { Provider } from "../../src/Context/Theme/ThemeContext";

describe("Header", () => {
  it("HomePage renders", () => {
    const tree = render(
      <Provider>
        <Header isHome={true} />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  it("Non HomePage renders", () => {
    const tree = render(
      <Provider>
        <Header />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
