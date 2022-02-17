/** @format */

import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import { Card } from '../components/Card'
import { PicCard } from '../components/PicCard'
import { useLoading } from '../hooks'
import { PageTurn } from '../components/PageTurn'
import { InfoCard } from '../components/InfoCard'
import { BgImage } from '../components/BgImage'

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
      const options: options = { duration: 2000, fill: 'both', easing: 'linear' }
      const kyEffect = new KeyframeEffect(
        null,
        {
          transform: [`translate3d(${-(curCount / Math.ceil(pageCount / 3)) * 100}%,0,0)`],
        },
        options,
      )
      kyEffect.target = container.current
      player = new Animation(kyEffect)
    }
    player?.play()
  }, [curCount])
  return (
    <div className='bg-transparent'>
      <BgImage></BgImage>
      <div className='h-auto w-epc p-2 relative left-1/2 transform-gpu -translate-x-1/2'>
        <InfoCard></InfoCard>
      </div>
      <div className='h-auto w-epc overflow-hidden px-2 relative left-1/2 transform-gpu -translate-x-1/2'>
        <div ref={container} className='grid w-max h-auto grid-flow-col-dense grid-rows-3 gap-1 content-end'>
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
      </div>
      <PageTurn
        isStart={curCount == 0}
        isEnd={curCount >= pageCount / 3 - 1}
        curCount={curCount}
        setCurCount={setCurCount}
      ></PageTurn>
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
type cubicBezier<T extends string> = `cubic-bezier${T}`
type options = {
  delay?: number //延迟动画开始的毫秒数
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' //动画执行的方向
  iterations?: number //动画的重复次数
  duration?: number //动画每次迭代完成所需的毫秒数
  fill?: 'both' | 'backwards' | 'forwards' | 'none' //动画执行前后的状态
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | cubicBezier<string> //动画随时间变化的速率
  endDelay?: number //动画结束后延迟的毫秒数
  iterationStart?: number //描述动画应该在迭代中的哪个点开始
  composite?: 'add' | 'accumulate' | 'replace' //确定如何在此动画和其他未指定其特定复合操作的单独动画之间组合值
  iterationComposite?: 'accumulate' | 'replace' //确定在此动画中如何从迭代到迭代构建值。
}
