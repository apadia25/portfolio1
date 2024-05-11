import React from 'react' 

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-8 items-center py-11'>
        <h1 className='text-3xl text-secondary font'>{title}</h1>
        <div className='w-60 h-[1px] bg-secondary'></div>
    </div>
  )
}

export default SectionTitle
