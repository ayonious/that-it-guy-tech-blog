/*
Finds all possible Tags value from all posts
*/
import _ from "lodash";
import { graphql, useStaticQuery } from "gatsby";
import { Post } from "../components/PostList";
const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: "yes" } } }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;

const useTags = (): string[] => {
  const {
    allMdx: { edges: posts },
  }: {
    allMdx: {
      edges: Post[];
    };
  } = useStaticQuery(query);

  const allTags = _.uniq(
    _.flatMap(posts.map((edge) => edge.node.frontmatter.tags))
  );
  return allTags;
};

export default useTags;
