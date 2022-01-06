/** @format */

import MyCode from '../components/MyCode'
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Card } from '../components/Card'

const index = ({ data }: { data: any }) => {
  const posts = data.allMdx.edges
  const { start, setStart } = useState(0)
  return (
    <div>
      <Card data={posts}></Card>
    </div>
  )
}

export default index

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          excerpt
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
