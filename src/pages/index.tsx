import React from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList/PostList";

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

export default () => {
  const response = useStaticQuery(query);
  const posts = response.allMdx.edges;
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};
