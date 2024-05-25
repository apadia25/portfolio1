import React from 'react'
import Animation from './Animation';
import { useSelector } from 'react-redux';

function Intro() {
    const {loading, portfolioData} = useSelector((state) => state.root);
    const   {intro} = portfolioData;
    const {firstName, lastName, caption , description , welcomeText} = intro;
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>{welcomeText || ''}</h1>
      <h1 className='md:text-8xl text-4xl text-secondary font-semibold'>
        {firstName || ''} {lastName || ''}
      </h1>
      <h1 className='md:text-6xl text-4xl  text-white font-semibold'>
        <Animation />
      </h1>
      <p className=' text-white lg:w-2/3 lg:text-xl w-full md:text-2xl'>
      {description || ''} 
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro