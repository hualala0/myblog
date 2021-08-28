/** @format */

import React from 'react'

const myh1 = ({ children, ...props }: { children: any }) => (
  <h1 className='text-gray-500 font-medium' {...props}>
    {children}
  </h1>
)

export default myh1
