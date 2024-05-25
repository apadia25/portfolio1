import React from 'react'
import SectionTitle from '../../components/SectionTitle'
//import me from './me2.jpg';
import { useSelector } from 'react-redux';

function About() {
  const {loading, portfolioData} = useSelector((state) => state.root);
    const   {about} = portfolioData;
    const {imgUrl, description1, description2, skills} = about;
  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex md:w-full items-center flex-col lg:flex-row'>
        <div className='lg:w-1/2 w-full'>
        <img src={imgUrl || ''} alt='me' className='h-[50vh] w-90' />
        </div>
        <div className='flex flex-col gap-5 lg:w-3/4 w-full mt-10 lg:mt-0 '>
            <p className='text-white lg:text-xl md:text-2xl'>
            {description1 || ''} 
            </p>
            <p className='text-white lg:text-xl md:text-2xl'>
            {description2 || ''}  
            </p>
        </div>
          
      </div>

      <div className='py-5 mt-10'>
        <h1 className='text-tertiary text-xl'>
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
        {skills.map((skill,index)=>(
          <div className='border border-white py-3 px-9'> 
              <h1 className='text-white'>{skill}</h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default About