/** @format */

import React, { useEffect, useRef } from 'react'

type transProps = {
  language: string
  setLanguage: Function
}

const CodeTrans = (props: transProps) => {
  const { language, setLanguage } = props
  const trans = () => {
    return (e: Event) => {
      const target = e.target as HTMLDivElement
      if (target.nodeValue) setLanguage(target.nodeValue)
    }
  }
  return <div onClick={trans}>{language}</div>
}

export default CodeTrans
