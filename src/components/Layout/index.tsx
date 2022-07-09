import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useLoading } from '../../hooks'
import { Back } from '../Back'
import { BgImage } from '../BgImage'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useLoading()
  return (
    <div className='grid grid-cols-4 bg-transparent'>
      <title>hulalala</title>
      <BgImage></BgImage>
      <div className=''></div>
      <div className='md:col-span-2 col-span-4 px-6 py-2 z-10 bg-white'>
        <Back isHead={true}></Back>
        {children}
        <Back isHead={false}></Back>
      </div>
      <div className=''></div>
    </div>
  )
}
