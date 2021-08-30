/** @format */

import React from 'react'
import 'highlight.js'
import 'highlight.js/styles/default.css'

type CodeProps = {
  language: string
  content: string
}

const CodeContent = (props: CodeProps) => {
  const { language, content } = props
  return (
    <pre>
      <code className={'language-' + language}>{{ content }}</code>
    </pre>
  )
}

export default CodeContent
