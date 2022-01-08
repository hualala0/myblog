/** @format */
import React from 'react'
import { Article } from '../Article'

export const PicCard = ({ data }: { data: any }) => {
  return (
    <div className='row-span-3 p-5 w-80 bg-white rounded-3xl'>
      <img className='h-full w-full' src={data.picture} alt={data.alt} />
      <Article date={data.date} author={data.author} title={data.title} content={data.content}></Article>
    </div>
  )
}
