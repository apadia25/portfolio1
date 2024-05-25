import React from 'react'
//import { projects } from '../../resources/projects'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const {loading, portfolioData} = useSelector((state) => state.root);
    const   {projects} = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-10 flex-col md:flex-row">
                {/* //1st */}
                <div className='flex md:flex-col md:gap-10 md:border-l-2 border-l-1 border-[#135e4c82] lg:w-1/3 flex-row w-full overflow-x-scroll'>
                    {projects.map((project, index) => (
                        <div key={index} onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>

                            {/* <h1 className="text-xl text-white">{experience.period}</h1> */}

                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a37] py-3 ' : 'text-white'}`}>{project.title}</h1>

                        </div>
                    ))}
                </div>

                {/* //2nd */}
                <div className='flex items-center justify-center gap-10 md:flex-row flex-col'>
                    <img src={projects[selectedItemIndex].image} alt="" className='h-60 w-80'></img>
                <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>

                    <p className="text-white">{projects[selectedItemIndex].description1}</p>
                    
                    <p className='text-white'>{projects[selectedItemIndex].description2}</p>


                    <button className='border-2 border-tertiary text-tertiary  rounded w-32  py-1'><a href={projects[selectedItemIndex].link} target="_blank" rel="noopener noreferrer" className='text-white'>Visit Project</a></button>

                </div>
                </div>
            </div>
    </div>
    
  )
}

export default Projects