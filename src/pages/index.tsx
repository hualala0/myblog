/** @format */

import MyCode from '../components/MyCode'
import React from 'react'
import { graphql } from 'gatsby'

const index = ({ data }: { data: any }) => {
  const posts = data.allMdx.edges
  return (
    <div>
      {posts.map((post: any) => {
        return <div>{post.node.frontmatter.description}</div>
      })}
    </div>
  )
}

export default index

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            date
            description
            route
            title
          }
        }
      }
    }
  }
`
