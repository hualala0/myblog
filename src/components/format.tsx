/** @format */

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import myh1 from './myh1'
import { graphql } from 'gatsby'

// const MyH1 = (props: any) => <h1 style={{color: 'tomato'}} {...props} />
const format = ({ children, props }: { children: any; props: any }) => {
  return (
    <div>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: myh1,
          // Or define component inline
        }}
      >
        <MDXRenderer>{props.mdx.body}</MDXRenderer>
        {children}
      </MDXProvider>
    </div>
  )
}

export default format

export const pageQuery = graphql`
  query MDXQuery {
    mdx {
      id
      body
    }
  }
`
