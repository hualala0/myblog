import React, { useEffect, useState } from 'react'
import CodeCopy from '../../MyCode/CodeCopy'
import CodeContent from '../../MyCode/CodeContent'

const FormatPre = (props: any) => {
  const { className: language, children: content } = props.children.props
  const [isCopy, setIsCopy] = useState<boolean>(false)
  useEffect(() => {
    setIsCopy(false)
  }, [language])
  return (
    <div className='relative'>
      <CodeContent language={language} content={content}></CodeContent>
      <CodeCopy isCopy={isCopy} setIsCopy={setIsCopy} content={content}></CodeCopy>
    </div>
  )
}

export { FormatPre }
