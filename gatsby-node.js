const path = require('path')
const format = require.resolve('./src/components/format.tsx')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                route
              }
              body
            }
          }
        }
      }
    `,
    { limit: 1000 },
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMdx.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.route}`,
        component: format,
        context: { edge },
      })
    })
  })
}
