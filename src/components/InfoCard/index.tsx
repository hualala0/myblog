/** @format */

import React from 'react'
import head from '../../static/images/head.jpg'

export const InfoCard = () => {
  return (
    <div className='flex flex-row w-full h-40'>
      <div className='flex-initial'>
        <img className='m-5 w-32 h-32 rounded-full' src={head}></img>
      </div>
      <div className='flex-auto ml-5'>
        <div className='mt-5 text-2xl '>hulalala</div>
        <div className='mb-5'>a front engineer and a new rustacean</div>
      </div>
      <div className='absolute top-0 left-0'></div>
    </div>
  )
}
