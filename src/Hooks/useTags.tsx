import _ from "lodash";
import { graphql, useStaticQuery } from "gatsby";
import { Post } from "../components/PostList";
const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
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

const useTags = () => {
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
