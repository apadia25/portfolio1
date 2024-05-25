import React from 'react'

function LeftSider() {
  return (
    <div className='md:fixed left-0 bottom-0 px-10  md:block static'>
      <div className="flex flex-col items-center">
      <div className="flex md:flex-col gap-3 flex-row">

        <a href='https://www.linkedin.com/in/akshay-padia-680a94276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
          <i class="ri-linkedin-box-fill text-gray-400 text-xl"></i>
        </a>

        <a href="mailto:akpadia@gmail.com">
        <i className="ri-mail-line text-gray-400 text-xl"></i>
        </a>

        <a href='https://www.instagram.com/akshay_padia?igsh=dDlvcmN5bm9pcG04'>
        <i class="ri-instagram-line text-gray-400 text-xl"></i>
        </a>

        <a href='https://github.com/apadia25'>
        <i class="ri-github-line text-gray-400 text-xl"></i>
        </a>
        
        <a href='https://discord.com/channels/@me'>
        <i class="ri-discord-line text-gray-400 text-xl"></i>
        </a>
     
      </div>
      <div className='w-[1px] h-40 bg-[#125f63] md:block hidden'></div>
      </div>
    </div>
  )
}

export default LeftSider