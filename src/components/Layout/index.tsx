/** @format */

import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useLoading } from '../../hooks'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useLoading()
  return (
    <div className='grid grid-cols-4'>
      <div className=''></div>
      <div className='col-span-2'>{children}</div>
      <div className=''></div>
    </div>
  )
}
