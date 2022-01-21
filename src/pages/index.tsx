/** @format */

import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { Card } from '../components/Card'
import { PicCard } from '../components/PicCard'
import { useLoading } from '../hooks'
import { PageTurn } from '../components/PageTurn'
import { InfoCard } from '../components/InfoCard'

const index = ({ data }: { data: any }) => {
  const posts = data.allMdx.edges
  const [curCount, setCurCount] = useState(0)
  const container = useRef<HTMLDivElement>(null)
  let count = 0
  let pageCount = 0
  let player: Animation
  useLoading()
  useEffect(() => {
    if (container.current) {
      const kyEffect = new KeyframeEffect(
        null,
        {
          transform: [`translate3d(${-(curCount / (pageCount / 3)) * 100}%,0,0)`],
        },
        { duration: 2000, fill: 'both', easing: 'linear' },
      )
      kyEffect.target = container.current
      player = new Animation(kyEffect)
    }
    player?.play()
  }, [curCount])
  return (
    <div>
      <div>
        <InfoCard></InfoCard>
      </div>
      <div className='w-screen h-screen relative overflow-hidden'>
        <div ref={container} className='grid w-max bg-gray-100 grid-flow-col-dense grid-rows-3 gap-3 content-end'>
          {posts.map((post: any) => {
            const content = post.node.excerpt
            if (post.node.frontmatter.picture) {
              pageCount += 3
              return (
                <PicCard data={{ ...post.node.frontmatter, content, alt: 'img', isFull: count++ % 2 == 0 }}></PicCard>
              )
            } else {
              pageCount++
              return <Card data={{ ...post.node.frontmatter, content }}></Card>
            }
          })}
        </div>
        <PageTurn
          isStart={curCount == 0}
          isEnd={curCount == pageCount / 3 - 1}
          curCount={curCount}
          setCurCount={setCurCount}
        ></PageTurn>
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
