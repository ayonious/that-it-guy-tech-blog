import React, { StrictMode } from "react";
import { render, screen } from "@testing-library/react";
import PostDetails from "../src/components/PostDetails";

it("adds one heading link during Strict Mode effect replays", () => {
  const { unmount } = render(
    <StrictMode>
      <PostDetails><h1>Common JS</h1></PostDetails>
    </StrictMode>
  );
  const heading = screen.getByRole("heading");
  const anchor = screen.getByRole("link", { name: "#" });
  expect(anchor).toHaveAttribute("href", "#common-js");
  expect(anchor).toHaveAttribute("id", "common-js");
  expect(heading.textContent).toBe("#Common JS");
  unmount();
  expect(heading.querySelector("a")).toBeNull();
});
