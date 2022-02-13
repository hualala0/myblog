/** @format */

import React from 'react'

const FormatLink = ({ children }: { children: React.ReactNode }) => {
  return <a className='text-blue-400 border-b-2 cursor-pointer hover:text-blue-600'>{children}</a>
}

export { FormatLink }
