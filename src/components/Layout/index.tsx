import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useLoading } from '../../hooks'
import { BgImage } from '../BgImage'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useLoading()
  return (
    <div className='grid grid-cols-4 bg-transparent'>
      <BgImage></BgImage>
      <div className=''></div>
      <div className='col-span-2 p-6 z-10 bg-white'>{children}</div>
      <div className=''></div>
    </div>
  )
}
