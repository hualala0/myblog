import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const InfoCard = () => {
  return (
    <div className='flex flex-row h-40 bg-white rounded-3xl'>
      <div className='flex-initial'>
        <StaticImage className='m-5 w-32 h-32 rounded-full' src='../../static/images/head.jpg' alt='head'></StaticImage>
      </div>
      <div className='flex-auto ml-5'>
        <div className='mt-5 text-2xl '>hulalala</div>
        <div className='mb-5'>a front engineer and a new rustacean</div>
      </div>
      <div className='absolute top-0 left-0'></div>
    </div>
  )
}
