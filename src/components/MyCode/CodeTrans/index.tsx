import React, { useRef } from 'react'

type transProps = {
  curLanguage: string
  language: string
  setLanguage: Function
}

const CodeTrans = (props: transProps) => {
  const { curLanguage, language, setLanguage } = props
  const trans = () => {
    if (language) setLanguage(language)
  }
  return (
    <div className={`inset-y-1 inset-x-2 ${language == curLanguage ? 'bg-yellow-200' : ''}`} onClick={trans}>
      {language}
    </div>
  )
}

export default CodeTrans
