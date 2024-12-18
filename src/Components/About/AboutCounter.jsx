import React from 'react'

const AboutCounter = () => {
    return (
        <div className='bg-gray-900'>
            <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-12  justify-around items-center'>
                    <div className='p-0'>
                        <h3 className='font-extrabold text-white text-4xl md:text-[40px] lg:text-5xl text-center'>35+</h3>
                        <p className='text-white text-xl md:text-[22px] lg:text-2xl pt-1 text-center'>Business Year</p>
                    </div>
                    <div className='p-0'>
                        <h3 className='font-extrabold text-white text-4xl md:text-[40px] lg:text-5xl text-center'>240+</h3>
                        <p className='text-white text-xl md:text-[22px] lg:text-2xl pt-1 text-center'>Clients</p>
                    </div>
                    <div className='p-0'>
                        <h3 className='font-extrabold text-white text-4xl md:text-[40px] lg:text-5xl text-center'>2000+</h3>
                        <p className='text-white text-xl md:text-[22px] lg:text-2xl pt-1 text-center'>Projects Delivery</p>
                    </div>
                    <div className='p-0'>
                        <h3 className='font-extrabold text-white text-4xl md:text-[40px] lg:text-5xl text-center'>130+</h3>
                        <p className='text-white text-xl md:text-[22px] lg:text-2xl pt-1 text-center'>Team Members</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCounter
