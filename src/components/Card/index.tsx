/** @format */
import React from 'react'
import { Article } from '../Article'

export const Card = ({ data }: { data: any }) => {
  return (
    <div className='rounded-3xl w-80 p-5 bg-white'>
      <Article date={data.date} author={data.author} title={data.title} content={data.content}></Article>
    </div>
  )
}
