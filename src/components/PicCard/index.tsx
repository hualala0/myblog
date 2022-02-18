
import { navigate } from 'gatsby'
import React from 'react'
import { Article } from '../Article'

export const PicCard = ({ data }: { data: any }) => {
  return (
    <div className='flex flex-col shadow-2xl row-span-3 rounded-3xl m-2 w-96 bg-white overflow-hidden relative'>
      <img
        className={
          data.isFull
            ? 'absolute object-cover h-full w-full filter grayscale-60'
            : 'relative object-cover h-2/3 w-90 m-4 filter rounded-3xl'
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
      <div>
        <button
          onClick={e => {
            navigate(`/${data.route}`)
          }}
          className='absolute right-0 bottom-0 px-4 py-2 w-40 bg-red-400 text-white rounded-tl-3xl rounded-br-3xl z-20'
        >
          Read more
        </button>
      </div>
    </div>
  )
}
