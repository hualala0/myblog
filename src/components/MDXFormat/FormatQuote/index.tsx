import React from 'react'

const FormatQuote = ({ children }: { children: React.ReactNode }) => {
  return <div className='border-l-8 pl-2 my-2 border-blue-200 bg-blue-50'>{children}</div>
}

export { FormatQuote }
