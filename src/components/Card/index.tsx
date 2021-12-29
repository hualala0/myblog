/** @format */

import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'

const Card = ({ data }: { data: any }) => {
  return (
    <div>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          pre: PreFormat,
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
