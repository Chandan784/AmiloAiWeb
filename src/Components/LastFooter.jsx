import React from 'react'

const LastFooter = () => {
  return (
    <div className='bg-gray-900'>
      <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
        <div className=' text-white flex flex-col lg:flex-row items-center'>
          <div className='w-full lg:w-2/3'>
            <h3 className='font-bold lg:text-xl text-gray-400 pb-3 '>Let’s Get in Touch</h3>
            <h3 className='font-extrabold text-3xl pb-4'>LET'S TALK ABOUT YOUR BUSINESS IT SERVICES NEEDS</h3>
            <p className='text-gray-400 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className=' w-full lg:w-1/3 flex lg:justify-center'>
            <button className='border-4 border-yellow-400 p-4 md:p-6'>GET STARTED NOW </button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default LastFooter