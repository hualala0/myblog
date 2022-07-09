import React, { Fragment } from 'react'
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
  FormatP,
  FormatPre,
  FormatQuote,
  FormatStrong,
} from './MDXFormat'
import { Layout } from './Layout'
import SEO from './SEO'

// const MyH1 = (props: any) => <h1 style={{color: 'tomato'}} {...props} />
const format = ({ pageContext: { edge } }: { pageContext: any }) => {
  return (
    <Layout>
      <SEO title={edge.node.frontmatter.title} description={edge.node.excerpt} />
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
          blockquote: FormatQuote,
          p: FormatP,
          ul: ({ children }: { children: React.ReactNode }) => <div className='pl-4'>{children}</div>,
          ol: ({ children }: { children: React.ReactNode }) => <div className='pl-4'>{children}</div>,
          li: ({ children, ...props }: any) => (
            <Fragment>
              <div className='float-left -ml-3'>&bull; </div> {children} <br />
            </Fragment>
          ),
          // Or define component inline
        }}
      >
        <MDXRenderer>{edge.node.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default format
