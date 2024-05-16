import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
      <div className="flex gap-5 md:text-5xl font-semibold text-3xl">
        <h1 className='text-secondary a'>Akshay's </h1>
        <h1 className='text-white p'>Portfolio</h1>
        </div>
    </div>
  )
}

export default Loader
