import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { Post } from "../components/PostList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: "yes" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

const tryLoadingMore = (toggleUpdating) => {
  const h = document.documentElement;

  // clientHeight = height of the whole page
  // scrollHeight = height of the scroll bar
  // when you scroll the scroll bar goes down. When it reaches end it stops scrolling.
  // This means you never can scroll whole scrollHeight length.
  // scrollHeight - scrollHeight = amount of scrollable screen
  // scrollTop = location of the scroll bars top part
  const scrollPercent = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (scrollPercent > 50) {
    toggleUpdating(true);
  }
};

const INITIAL_NUMBER_OF_POSTS = 5;
const ADDITIONAL_NUMBER_OF_POSTS = 7;

const useLazyPosts = () => {
  const {
    allMdx: { edges: posts },
  }: {
    allMdx: {
      edges: Post[];
    };
  } = useStaticQuery(query);

  const totalPosts = posts.length;
  const [totalVisible, changeVisible] = useState<number>(
    INITIAL_NUMBER_OF_POSTS
  );
  const [updating, toggleUpdating] = useState<boolean>(false);

  // this variable(listener) is used by 2 different hooks.
  // useCallback makes sure this is the same object
  // the instance of addEventListener and removeEventListener always needs to be same
  const scrollListener = useCallback(() => {
    tryLoadingMore(toggleUpdating);
  }, []);

  // This runs only once after the component is mounted
  useEffect(() => {
    // Throttle: each 1 second make sure only one event is fired
    document.addEventListener("scroll", _.throttle(scrollListener, 500));

    // cleanup function
    // this is called when component will be unmounted
    // this makes sure all unwanted Listeners are removed
    return () => document.removeEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    if (totalVisible < totalPosts && updating) {
      toggleUpdating(false);
      changeVisible(totalVisible + ADDITIONAL_NUMBER_OF_POSTS);
    } else if (totalVisible > totalPosts) {
      document.removeEventListener("scroll", scrollListener);
    }
  }, [updating, totalVisible]);

  return [totalVisible];
};

export default useLazyPosts;
