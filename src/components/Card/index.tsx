import { navigate } from 'gatsby'
import React from 'react'
import { Article } from '../Article'

export const Card = ({ data }: { data: any }) => {
  return (
    <div
      onClick={e => {
        navigate(`/${data.route}`)
      }}
      className='rounded-3xl w-80 shadow-2xl m-2 bg-white cursor-pointer'
    >
      <Article hasPic={false} date={data.date} author={data.author} title={data.title} content={data.content}></Article>
    </div>
  )
}
