/** @format */

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import myh1 from './myh1'
import { graphql } from 'gatsby'
import CodeContent from './MDXFormat/Code/CodeContent'

// const MyH1 = (props: any) => <h1 style={{color: 'tomato'}} {...props} />
const format = ({ data }: { data: any }) => {
  return (
    <div>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          pre: CodeContent,
          // Or define component inline
        }}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query MDXQuery {
    mdx {
      id
      body
    }
  }
`
export default format
