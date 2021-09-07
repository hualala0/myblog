/** @format */

import React, { Children, useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const CodeContent = (props: any) => {
  const { language, content } = props
  const code = useRef<HTMLPreElement>(null)
  const languageName = props?.children?.props?.className || `language-${language}`
  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true })
    if (code.current) hljs.highlightElement(code.current)
  }, [content])
  return (
    <pre className={`${languageName} font-sans`}>
      <code ref={code} className={languageName}>
        {content || props.children?.props?.children}
      </code>
    </pre>
  )
}

export default CodeContent
