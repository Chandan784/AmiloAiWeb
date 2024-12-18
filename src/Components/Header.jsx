import React from 'react'

const Header = ({ title }) => {
  return (
    <>
      <header className='bg-blue-600'>
        <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-16 md:py-20 lg:py-24'>
          <h1 className='text-5xl md:text-6xl text-white font-extrabold'>{title}</h1>
        </div>
      </header>
    </>
  )
}

export default Header