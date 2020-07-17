import * as React from "react";
import expect from "expect";

import { render } from "@testing-library/react";
import TagsList from "../src/components/TagsList";
import { Provider } from "../src/Context/ThemeContext";

it("TagsList renders", () => {
  const tree = render(
    <Provider>
      <TagsList
        tags={["1", "2"]}
        addFilter={() => {
          console.log("as");
        }}
      />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
