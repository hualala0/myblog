/** @format */

import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/dark.css'

type CodeProps = {
  language: string
  content: string
}

const CodeContent = (props: CodeProps) => {
  const { language, content } = props
  const code = useRef<HTMLPreElement>(null)
  useEffect(() => {
    if (code.current) hljs.highlightBlock(code.current)
  })
  return (
    <pre ref={code} className='font-sans'>
      <code className={'language-' + language}>{content}</code>
    </pre>
  )
}

export default CodeContent
