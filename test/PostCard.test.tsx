/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import expect from "expect";
import * as React from "react";

import PostCard from "../src/components/PostCard";
import { Provider as ThemeProvider } from "../src/Context/Theme/ThemeContext";

it("PostCard renders", () => {
  const postCard = {
    post: {
      frontmatter: {
        title: "React Reducer a Short Example",
        slug: "/",
        date: "May 29th, 2020",
        tags: ["js", "react", "reducer"],
        image: {
          childImageSharp: {
            fluid: {
              base64:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABgbGxOTCv/8QAGRAAAwADAAAAAAAAAAAAAAAAAQIQAxES/9oACAEBAAEFAkCk5E5M3P/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAQAGPwIOv//EABoQAQADAAMAAAAAAAAAAAAAAAEAEBEhMZH/2gAIAQEAAT8hMnhpDwPInNKe2v/aAAwDAQACAAMAAAAQzA//xAAWEQEBAQAAAAAAAAAAAAAAAAARECH/2gAIAQMBAT8QcJ//xAAWEQADAAAAAAAAAAAAAAAAAAAQESH/2gAIAQIBAT8QVH//xAAaEAEBAQEAAwAAAAAAAAAAAAABEQBBMVFx/9oACAEBAAE/ELF4lvNCAeV6fmnEMOeqr7XXf//Z",
              aspectRatio: 1.7699115044247788,
              src: "/static/b8db2eac530443fabe2a1827b2fb9c52/f422e/person-holding-compass-841286.jpg",
              srcSet:
                "/static/b8db2eac530443fabe2a1827b2fb9c52/f836f/person-holding-compass-841286.jpg 200w,\n/static/b8db2eac530443fabe2a1827b2fb9c52/2244e/person-holding-compass-841286.jpg 400w,\n/static/b8db2eac530443fabe2a1827b2fb9c52/f422e/person-holding-compass-841286.jpg 640w",
              srcWebp:
                "/static/b8db2eac530443fabe2a1827b2fb9c52/991d2/person-holding-compass-841286.webp",
              srcSetWebp:
                "/static/b8db2eac530443fabe2a1827b2fb9c52/61e93/person-holding-compass-841286.webp 200w,\n/static/b8db2eac530443fabe2a1827b2fb9c52/1f5c5/person-holding-compass-841286.webp 400w,\n/static/b8db2eac530443fabe2a1827b2fb9c52/991d2/person-holding-compass-841286.webp 640w",
              sizes: "(max-width: 640px) 100vw, 640px",
            },
          },
        },
      },
      excerpt:
        "I often see this thing but never understood how it could be used for making life easier. Finally found some good examples and decided to…",
    },
  };

  const tree = render(
    <ThemeProvider>
      <PostCard post={postCard.post} key={1} blogUrl="/" />
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
