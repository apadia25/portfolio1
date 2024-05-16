import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import me from './me2.jpg'

function About() {
  const skills =[
    "HTML",
    "Javascript",
    "ReactJs",
    "MongoDB",
    "NextJs",
  ] 
  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex md:w-full items-center flex-col lg:flex-row'>
        <div className='lg:w-1/2 w-full'>
        <img src={me} alt='me' className='h-[50vh] w-90'></img>
        </div>
        <div className='flex flex-col gap-5 lg:w-3/4 w-full mt-10 lg:mt-0 '>
            <p className='text-white lg:text-xl md:text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat id. Ornare arcu dui vivamus arcu felis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. 
            </p>
            <p className='text-white lg:text-xl md:text-2xl'>
            Eu mi bibendum neque egestas congue quisque egestas. Lacinia at quis risus sed vulputate. Magna fringilla urna porttitor rhoncus dolor purus non enim. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Nibh tellus molestie nunc non blandit massa. Et ultrices neque ornare aenean. Tempor orci eu lobortis elementum nibh tellus molestie nunc.  
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
