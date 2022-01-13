/** @format */

import MyCode from '../components/MyCode'
import React, { useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { Card } from '../components/Card'
import { PicCard } from '../components/PicCard'
import { useLoading } from '../hooks'
import { PageTurn } from '../components/PageTurn'

const index = ({ data }: { data: any }) => {
  const posts = data.allMdx.edges
  let count = 0
  useLoading()
  return (
    <div className='w-full h-full relative overflow-hidden'>
      <div className='grid w-max bg-gray-100 grid-flow-col-dense grid-rows-3 gap-3 content-end'>
        {posts.map((post: any) => {
          const content = post.node.excerpt
          if (post.node.frontmatter.picture) {
            count += 3
            return (
              <PicCard data={{ ...post.node.frontmatter, content, alt: 'img', isFull: count++ % 2 == 0 }}></PicCard>
            )
          } else {
            count++
            return <Card data={{ ...post.node.frontmatter, content }}></Card>
          }
        })}
      </div>
      <PageTurn direction={0} pageCount={count / 3}></PageTurn>
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
