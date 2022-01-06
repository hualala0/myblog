/** @format */
import React from 'react'
import { Article } from '../Article'

export const Card = ({ data }: { data: any }) => {
  return (
    <div>
      {data.map(({ node }: any) => {
        return (
          <Article
            date={node.frontmatter.date}
            author={node.frontmatter.route}
            title={node.frontmatter.title}
            content={node.excerpt}
          ></Article>
        )
      })}
    </div>
  )
}
