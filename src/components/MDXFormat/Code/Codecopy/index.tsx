/** @format */

import React, { useEffect, useRef } from 'react'
import { sleep } from '../../../../utils'

type copyProps = {
  isCopy: boolean
  setIsCopy: Function
  content: string
}

const CodeCopy = (props: copyProps) => {
  const { isCopy, setIsCopy, content } = props
  const copy = async () => {
    setIsCopy(true)
    await navigator.clipboard.writeText(content)
    await sleep(5000)
    setIsCopy(false)
  }
  return (
    <button
      className='bg-yellow-200 bg-opacity-0 hover:bg-opacity-100 disabled:bg-opacity-0 disabled:cursor-not-allowed'
      disabled={isCopy}
      onClick={copy}
    >
      {isCopy ? 'copied' : 'copy'}
    </button>
  )
}

export default CodeCopy
