/** @format */

import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

type CodeProps = {
  language: string
  content: string
}

const CodeContent = (props: CodeProps) => {
  const { language, content } = props
  const code = useRef<HTMLPreElement>(null)
  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true })
    if (code.current) hljs.highlightElement(code.current)
  }, [content])
  return (
    <pre className={`language-${language} font-sans`}>
      <code ref={code} className={`language-${language}`}>
        {content}
      </code>
    </pre>
  )
}

export default CodeContent
