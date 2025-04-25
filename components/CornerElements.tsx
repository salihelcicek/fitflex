import React from 'react'

const CornerElements = () => {
  return (
    <>
    <div className='absolute top-0 left-0 w-4 h-4 border-l border-t border-primary'></div>
    <div className='absolute top-0 right-0 w-4 h-4 border-r border-t border-primary'></div>
    <div className='absolute bottom-0 left-0 w-4 h-4 border-l border-b border-primary'></div>
    <div className='absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary'></div>
    </>
  )
}

export default CornerElements