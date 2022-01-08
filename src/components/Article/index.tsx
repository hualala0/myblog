/** @format */
import React from 'react'

export const Article = ({
  date,
  author,
  title,
  content,
}: {
  date: string
  author: string
  title: string
  content: string
}) => {
  return (
    <div className='grid grid-cols-2 '>
      <div className='text-left h-1/4'>by {author}</div>
      <div className='text-right h-1/4'>{date}</div>
      <div className='h-1/4 col-span-2'>{title}</div>
      <div className='h-1/2 col-span-2'>{content}</div>
    </div>
  )
}
