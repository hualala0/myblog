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
    <div className={(hasPic ? 'z-10 p-3 absolute bottom-8' : 'z-10 p-3 relative') + (isFull ? ' text-white' : '')}>
      <div className='float-right text-gray-400 h-1/4'>{date}</div>
      <div className='text-gray-400 h-1/4'>by {author}</div>
      <div className='h-1/4 text-xl'>{title}</div>
      <div className='h-1/2 text-sm'>{content}</div>
    </div>
  )
}
