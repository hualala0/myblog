import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  FormatEm,
  FormatH1,
  FormatH2,
  FormatH3,
  FormatH4,
  FormatH5,
  FormatH6,
  FormatLink,
  FormatPre,
  FormatStrong,
} from './MDXFormat'
import { Layout } from './Layout'

// const MyH1 = (props: any) => <h1 style={{color: 'tomato'}} {...props} />
const format = ({ pageContext: { edge } }: { pageContext: any }) => {
  return (
    <Layout>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: FormatH1,
          h2: FormatH2,
          h3: FormatH3,
          h4: FormatH4,
          h5: FormatH5,
          h6: FormatH6,
          pre: FormatPre,
          strong: FormatStrong,
          em: FormatEm,
          a: FormatLink,
          // Or define component inline
        }}
      >
        <MDXRenderer>{edge.node.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default format
