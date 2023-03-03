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
      allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `blogs/${node.frontmatter.slug}`,
      component: `${blogPost}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions });
};
