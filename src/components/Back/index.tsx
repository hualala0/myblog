import { navigate } from 'gatsby'
import React from 'react'

export const Back = ({ isHead }: { isHead: boolean }) => {
  return (
    <div
      className={'flex flex-row items-center cursor-pointer ' + (isHead ? 'pb-5' : 'pt-5')}
      onClick={e => {
        navigate(`/`)
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' viewBox='0 0 20 20' fill='blue'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
          clipRule='evenodd'
        />
      </svg>
      <div className='text-xl text-blue-400'>Back</div>
    </div>
  )
}
