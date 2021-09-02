/** @format */

import React, { useEffect, useState } from 'react'
import CodeCopy from './CodeCopy'
import CodeContent from './CodeContent'
import CodeTrans from './CodeTrans'

type copyProps = {
  copyMap: Map<string, string>
}

const MyCode = (props: copyProps) => {
  const { copyMap } = props
  const [isCopy, setIsCopy] = useState<boolean>(false)
  const [language, setLanguage] = useState<string>(copyMap.keys().next().value)
  const [content, setContent] = useState<string>(copyMap.values().next().value)
  const languageItems = [...copyMap.keys()].map(language => {
    return <CodeTrans key={language} language={language} setLanguage={setLanguage}></CodeTrans>
  })
  useEffect(() => {
    const mapContent = copyMap.get(language)
    setIsCopy(false)
    if (mapContent) setContent(mapContent)
  }, [language])
  return (
    <div>
      <div>{languageItems}</div>
      <div>
        <CodeContent language={language} content={content}></CodeContent> 
        <CodeCopy isCopy={isCopy} setIsCopy={setIsCopy} content={content}></CodeCopy>
      </div>
    </div>
  )
}

export default MyCode
