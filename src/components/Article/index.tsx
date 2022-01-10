/** @format */
import React from 'react'

export const Article = ({
  date,
  author,
  title,
  content,
  hasPic,
  isFull,
}: {
  date: string
  author: string
  title: string
  content: string
  hasPic: boolean
  isFull?: boolean
}) => {
  return (
    <div
      className={
        (hasPic ? 'grid grid-cols-2 z-10 absolute p-3 bottom-8' : 'grid grid-cols-2 z-10 relative p-3') +
        (isFull ? ' text-white' : '')
      }
    >
      <div className='text-left text-gray-400 h-1/4'>by {author}</div>
      <div className='text-right text-gray-400 h-1/4'>{date}</div>
      <div className='h-1/4 col-span-2'>{title}</div>
      <div className='h-1/2 col-span-2'>{content}</div>
    </div>
  )
}
