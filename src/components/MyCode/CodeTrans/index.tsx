/** @format */

import React from 'react'

type transProps = {
  language: string
  setLanguage: Function
}

const CodeTrans = (props: transProps) => {
  const { language, setLanguage } = props
  const trans = () => {
    if (language) setLanguage(language)
  }
  return (
    <div className='inset-y-1 inset-x-2' onClick={trans}>
      {language}
    </div>
  )
}

export default CodeTrans
