import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user ={
        name : "Akshay H. Padia",
        age: "20",
        gender: "Male",
        email: "akpadia02@gmail.com",
        mobile: "7620680291",
    }
  return (
    <div>
        <SectionTitle title="Contact me"/>
        <div className="flex items-center justify-between md:flex-row flex-col">
            <div className="flex flex-col gap-1">
            <h1 className='text-tertiary'>{'{'}</h1>
            {Object.keys(user).map((key) => (
                <h1 className='ml-8'>
                    <span className='text-tertiary'>{key} : </span>
                    <span className='text-tertiary'>{user[key]}</span>
                </h1>
            ))}
            <h1 className='text-tertiary'>{'}'}</h1>
            </div>
            <div className='h-[300px]'>
            <lottie-player src="https://lottie.host/f8d72bf9-1e76-4cba-9dd3-dd9640ec4b71/s6h20HB0mV.json" background="##ffffff" speed="1" autoplay direction="1" mode="normal"></lottie-player>
            </div>
        </div>
    </div>
  ) 
}

export default Contact
