/** @format */

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { PreFormat } from './MDXFormat'

// const MyH1 = (props: any) => <h1 style={{color: 'tomato'}} {...props} />
const format = ({ pageContext: { edge } }: { pageContext: any }) => {
  return (
    <div>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          pre: PreFormat,
          // Or define component inline
        }}
      >
        <MDXRenderer>{edge.node.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default format
