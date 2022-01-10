/** @format */
import { navigate } from 'gatsby'
import React from 'react'
import { Article } from '../Article'

export const PicCard = ({ data }: { data: any }) => {
  return (
    <div className='shadow-2xl row-span-3 rounded-3xl m-2 h-full w-96 bg-white overflow-hidden relative'>
      <img
        className={
          data.isFull
            ? 'absolute object-cover h-full w-full filter grayscale-50'
            : 'absolute object-cover h-3/5 w-90 m-4 filter grayscale-50 rounded-3xl'
        }
        src={data.picture}
        alt={data.alt}
      />
      <Article
        isFull={data.isFull}
        hasPic={true}
        date={data.date}
        author={data.author}
        title={data.title}
        content={data.content}
      ></Article>
      <button
        onClick={e => {
          navigate(`/${data.route}`)
        }}
        className='absolute right-0 bottom-0 px-4 py-2 h-10 w-40 bg-red-400 text-white rounded-tl-3xl rounded-br-3xl'
      >
        Read more
      </button>
    </div>
  )
}
