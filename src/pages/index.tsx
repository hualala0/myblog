/** @format */

import CodeContent from '../components/MDXFormat/Code/CodeContent/index'
import React from 'react'

const prop = {
  language: 'html',
  content: '<div></div>',
}

const index = () => {
  return <CodeContent {...prop}></CodeContent>
}

export default index
