/** @format */

import React, { Children, useEffect, useRef } from 'react'
import hljs from 'highlight.js'

const CodeContent = (props: any) => {
  const { language, content } = props
  const code = useRef<HTMLPreElement>(null)
  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true })
    if (code.current) hljs.highlightElement(code.current)
  }, [content])
  return (
    <pre className={`${language} font-sans`}>
      <code ref={code} className={language}>
        {content}
      </code>
    </pre>
  )
}

export default CodeContent
