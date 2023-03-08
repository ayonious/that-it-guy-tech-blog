/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { expect } from "@jest/globals";
import * as React from "react";

import PostCard from "../src/components/PostCard";
import { Provider as ThemeProvider } from "../src/Context/Theme/ThemeContext";

it("PostCard renders", () => {
  const postCard = {
    post: {
      frontmatter: {
        title: "React Hooks - memo",
        slug: "react-hooks-memo",
        date: "July 3rd, 2021",
        tags: ["js", "react", "hooks"],
        image: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "fullWidth" as any,
              backgroundColor: "#b8a898",
              images: {
                fallback: {
                  src: "/static/902341f7675c60ef9661b2a4aa2de276/cb908/pexels-cottonbro-3832028.jpg",
                  srcSet:
                    "/static/902341f7675c60ef9661b2a4aa2de276/cb908/pexels-cottonbro-3832028.jpg 640w",
                  sizes: "100vw",
                },
                sources: [
                  {
                    srcSet:
                      "/static/902341f7675c60ef9661b2a4aa2de276/bd763/pexels-cottonbro-3832028.webp 640w",
                    type: "image/webp",
                    sizes: "100vw",
                  },
                ],
              },
              width: 1,
              height: 1.5,
            },
          },
        },
      },
      excerpt:
        "In simple words this controls when to not re-render your component. I got a situation recently where a Form component was re-rendering and…",
    },
    blogUrl: "blogs/react-hooks-memo",
  };

  const tree = render(
    <ThemeProvider>
      <PostCard post={postCard.post} key={1} blogUrl="/" />
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
