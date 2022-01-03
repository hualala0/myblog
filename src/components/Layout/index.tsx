/** @format */

import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-4'>
      <div className=''></div>
      <div className='col-span-2'>{children}</div>
      <div className=''></div>
    </div>
  )
}
