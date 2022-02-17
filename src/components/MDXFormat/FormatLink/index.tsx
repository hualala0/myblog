/** @format */

import React from 'react'

const FormatLink = (prop: any) => {
  return (
    <a href={prop.href} className='text-blue-400 border-b-2 cursor-pointer hover:text-blue-600'>
      {prop.children}
    </a>
  )
}

export { FormatLink }
