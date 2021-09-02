/** @format */
// const path = require('path')
// const format = require('./src/components/format.tsx')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(
//     `
//       {
//         allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//           edges {
//             node {
//               frontmatter {
//                 title
//               }
//               body
//             }
//           }
//         }
//       }
//     `,
//     { limit: 1000 },
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allMdx.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         path: `${edge.node.frontmatter.title}`,
//         component: format,
//         context: {
//           id: `123456`,
//         },
//       })
//     })
//   })
// }
