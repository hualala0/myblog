/** @format */

import MyCode from '../components/MyCode'
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Card } from '../components/Card'
import { PicCard } from '../components/PicCard'

const index = ({ data }: { data: any }) => {
  const posts = data.allMdx.edges
  let count = 0
  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      <div className='grid w-max bg-gray-100 grid-flow-col-dense grid-rows-3 gap-3 content-end'>
        {posts.map((post: any) => {
          const content = post.node.excerpt
          if (post.node.frontmatter.picture) {
            return (
              <PicCard data={{ ...post.node.frontmatter, content, alt: 'img', isFull: count++ % 2 == 0 }}></PicCard>
            )
          } else {
            return <Card data={{ ...post.node.frontmatter, content }}></Card>
          }
        })}
      </div>
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
            title
            picture
            author
            route
          }
        }
      }
    }
  }
`
