import React from "react"
import { MDXProvider } from "@mdx-js/react"
import myh1 from "./myh1"

// const MyH1 = (props: any) => <h1 style={{color: 'tomato'}} {...props} />
export const format = ({ children }: {children: any}) => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: myh1,
        // Or define component inline
      }}
    >
      {children}
    </MDXProvider>
  )
}