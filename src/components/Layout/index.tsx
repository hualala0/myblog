/** @format */

import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useLoading } from '../../hooks'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useLoading()
  return (
    <div className='grid grid-cols-4 bg-myblue bg-food'>
      <div className=''></div>
      <div className='col-span-2 bg-white p-6'>{children}</div>
      <div className=''></div>
    </div>
  )
}
