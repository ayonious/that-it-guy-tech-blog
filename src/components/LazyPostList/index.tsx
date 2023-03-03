import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";

import { Context as TagFilterContext } from "../../Context/TagFilter/TagFilterContext";
import useLazyPosts from "../../Hooks/useLazyPosts";
import PostList, { Post } from "../PostList";

const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
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

const filterPosts = (filterTags: string[], posts: Post[]) => {
  return filterTags.length === 0
    ? posts
    : posts.filter(
        (post) =>
          post.node.frontmatter.tags
            .map((tag) => filterTags.includes(tag))
            .filter((matchRes) => matchRes === true).length ===
          filterTags.length
      );
};

const LazyPostList = () => {
  const {
    allMdx: { edges: posts },
  }: {
    allMdx: {
      edges: Post[];
    };
  } = useStaticQuery(query);

  const {
    state: { tags },
  } = useContext(TagFilterContext);

  const filteredPosts = filterPosts(tags, posts);

  const [totalVisible] = useLazyPosts(posts.length);

  return <PostList posts={filteredPosts} totalVisible={totalVisible} />;
};

export default LazyPostList;
