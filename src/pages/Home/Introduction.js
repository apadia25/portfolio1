import React from 'react'
import Animation from './Animation';

function intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi , I am</h1>
      <h1 className='md:text-8xl text-4xl text-secondary font-semibold'>
        Akshay H. Padia
      </h1>
      <h1 className='md:text-6xl text-4xl  text-white font-semibold'>
        <Animation />
      </h1>
      <p className=' text-white lg:w-2/3 lg:text-xl w-full md:text-2xl'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default intro
