import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resources/experiences'
import { useState } from 'react';

function Experiences() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    return (
        <div className='mt-16'>
            <SectionTitle title="Experiences"/>
            <div className="flex py-10 gap-10 flex-col md:flex-row">
                {/* //1st */}
                <div className='flex md:flex-col md:gap-10 md:border-l-2 border-l-1 border-[#135e4c82] lg:w-1/3 flex-row w-full overflow-x-scroll'>
                    {experiences.map((experience, index) => (
                        <div key={index} onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>

                            {/* <h1 className="text-xl text-white">{experience.period}</h1> */}

                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a37] py-3 ' : 'text-white'}`}>{experience.period}</h1>

                        </div>
                    ))}
                </div>

                {/* //2nd */}
                <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences
