/** @format */

import CodeContent from '../components/MDXFormat/Code/CodeContent/index'
import React from 'react'

const prop = {
  language: 'jsx',
  content: `import React, {'\u007b'} Component {'\u007d'} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';`,
}

const index = () => {
  return <CodeContent {...prop}></CodeContent>
}

export default index
