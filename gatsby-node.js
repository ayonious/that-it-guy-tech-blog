const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
async function createBlogPages({ graphql, actions }) {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(
    `src/components/BlogDescription/index.tsx`
  );
  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach((edge) => {
    createPage({
      path: `blogs/${edge.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions });
};
