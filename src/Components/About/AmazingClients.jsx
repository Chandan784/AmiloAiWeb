import React from 'react'

const AmazingClients = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
            <p className='font-bold text-center text-xl text-gray-500'>WHO ARE WITH US</p>
            <h2 className='font-bold text-center text-3xl md:text-[32px] lg:text-4xl'>Our Amazing Clients</h2>

            <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 pt-12 md:pt-14 lg:pt-16 gap-6 gap-y-12 md:gap-8 lg:gap-10 xl:gap-12 items-center">
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner1.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner2.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner3.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner4.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner5.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner6.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner7.png" alt="banner" />
                <img className='w-3/4 mx-auto' src="./src/assets/images/about/banner8.png" alt="banner" />
            </div>
        </div>
    )
}

export default AmazingClients
