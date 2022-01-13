/** @format */

import React, { useState } from 'react'

export const PageTurn = ({
  direction,
  perWidth,
  pageCount,
}: {
  direction: number
  perWidth: number
  pageCount: number
}) => {
  const [curWidth, setCurWidth] = useState(0)
  return (
    <div>
      <div className={direction ? 'fixed left-0 top-1/2' : 'fixed right-0 top-1/2'}>{pageCount}</div>
    </div>
  )
}
