import React from "react"
import { MDXProvider } from "@mdx-js/react"
import myh1 from "./myh1"

export default function Layout({ children }: {children: any}) {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h2: {myh1},
        // Or define component inline
      }}
    >
      {children}
    </MDXProvider>
  )
}