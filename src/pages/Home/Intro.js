import React from 'react'

function intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8'>
      <h1 className='text-white'>Hi , i am</h1>
      <h1 className='text-8xl text-secondary font-semibold'>
        Akshay H. Padia
      </h1>
      <h1 className='text-6xl text-white font-semibold'>
        Web Developer and Design enthusiast
      </h1>
      <p className=' text-white'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button className='border-2 border-tertiary text-white px-10 py-5'>Get Started</button>
    </div>
  )
}

export default intro
