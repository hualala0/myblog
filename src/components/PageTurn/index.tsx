/** @format */

import React, { useState } from 'react'
import { TurnRight } from '../TurnRight'
import { TurnLeft } from '../TurnLeft'

export const PageTurn = ({
  isStart,
  isEnd,
  curCount,
  setCurCount,
}: {
  isStart: boolean
  isEnd: boolean
  curCount: number
  setCurCount: any
}) => {
  const playNext = () => {
    if (!isEnd) {
      setCurCount(curCount + 1)
    }
  }
  const playLast = () => {
    if (!isStart) {
      setCurCount(curCount - 1)
    }
  }
  return (
    <div>
      <div className='fixed top-0 left-0 h-full bg-gray-200 opacity-60 hover:' onClick={playLast}>
        <TurnLeft></TurnLeft>
      </div>
      <div className='fixed top-0 right-0 h-full bg-gray-200 opacity-60' onClick={playNext}>
        <TurnRight></TurnRight>
      </div>
    </div>
  )
}
