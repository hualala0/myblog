/** @format */

import MyCode from '../components/MDXFormat/Code'
import React from 'react'

const prop = new Map()
prop.set(
  'javascript',
  `
  const a = 1
  let b=0
  `,
)
prop.set(
  'css',
  `
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
`,
)

const index = () => {
  return <MyCode copyMap={prop}></MyCode>
}

export default index
