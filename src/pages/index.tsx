/** @format */

import MyCode from '../components/MDXFormat/Code'
import React from 'react'

const prop = new Map()
prop.set('javascript', 'const a = 1')
prop.set('java', 'int a = 1')

const index = () => {
  return <MyCode copyMap={prop}></MyCode>
}

export default index
