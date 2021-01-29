import { render } from "@testing-library/react";
import expect from "expect";
import * as React from "react";

import TagsList from "../src/components/TagsList";
import { Provider as TagsProvider } from "../src/Context/TagFilter/TagFilterContext";
import { Provider as ThemeProvider } from "../src/Context/Theme/ThemeContext";

it("TagsList renders", () => {
  const tree = render(
    <TagsProvider>
      <ThemeProvider>
        <TagsList tags={["1", "2"]} />
      </ThemeProvider>
    </TagsProvider>
  );
  expect(tree).toMatchSnapshot();
});
