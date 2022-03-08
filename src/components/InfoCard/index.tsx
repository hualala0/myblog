import React from 'react'
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const InfoCard = () => {
  return (
    <div className='flex flex-row h-40 bg-white rounded-3xl'>
      <div className='flex-initial'>
        <StaticImage className='m-5 w-32 h-32 rounded-full' src='../../static/images/head.jpg' alt='head'></StaticImage>
      </div>
      <div className='flex-auto flex flex-col justify-center ml-5'>
        <div className='text-3xl font-medium p-1'>hulalala</div>
        <div className='text-2xl p-1'>a front-end engineer and new rustacean</div>
        <div className='p-1'>
          <a className='cursor-pointer' title='Github' href='https://github.com/hulala1a'>
            <StaticImage width={20} height={20} src='../../static/images/github.svg' alt='github'></StaticImage>
          </a>
        </div>
      </div>
    </div>
  )
}
