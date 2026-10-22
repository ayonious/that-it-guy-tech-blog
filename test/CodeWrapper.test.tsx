import React from "react";
import { render, screen } from "@testing-library/react";
import CodeWrapper from "../src/components/CodeWrapper";

it("highlights code without treating source text as HTML", () => {
  const code = '<script>alert("example")</script>';
  const { container } = render(
    <CodeWrapper><pre><code>{code}</code></pre></CodeWrapper>
  );
  expect(container.querySelector("code")?.textContent).toBe(code);
  expect(container.querySelector("script")).toBeNull();
  expect(container.querySelector("code .hljs-tag")).not.toBeNull();
  expect(screen.getByText("Copy 📋")).toBeInTheDocument();
});
