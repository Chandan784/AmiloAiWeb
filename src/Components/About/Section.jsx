import React from 'react'
import AmazingClients from './AmazingClients'
import AboutCounter from './AboutCounter'
import MissionProgress from './MissionProgress'

const Section = () => {
    return (
        <>
            {/* <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
                <div className='text-center'>
                    <h3 className='font-bold text-xl text-gray-500'>WHO ARE WITH US</h3>
                    <h3 className='font-bold text-4xl'>Our Amazing Clients</h3>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 py-16 gap-16">
                    <img src="./src/assets/images/about/banner1.png" alt="banner" />
                    <img src="./src/assets/images/about/banner2.png" alt="banner" />
                    <img src="./src/assets/images/about/banner3.png" alt="banner" />
                    <img src="./src/assets/images/about/banner4.png" alt="banner" />
                    <img src="./src/assets/images/about/banner5.png" alt="banner" />
                    <img src="./src/assets/images/about/banner6.png" alt="banner" />
                    <img src="./src/assets/images/about/banner7.png" alt="banner" />
                    <img src="./src/assets/images/about/banner8.png" alt="banner" />
                </div>
            </div> */}
            <AmazingClients />
            {/* <div className='grid lg:grid-cols-4 sm:grid-cols-2 bg-gray-900 h-auto p-20 text-white justify-around items-center'>
                <div className='text-center'>
                    <h3 className='font-extrabold text-5xl'>35+</h3>
                    <p className=' text-2xl'>Business Year</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-extrabold text-5xl'>240+</h3>
                    <p className=' text-2xl'>Clients</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-extrabold text-5xl'>2000+</h3>
                    <p className=' text-2xl'>Projects Delivery</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-extrabold text-5xl'>130+</h3>
                    <p className=' text-2xl'>Team Members</p>
                </div>
            </div> */}
            <AboutCounter />
            {/* <div className="section lg:p-20 sm:p-4 grid lg:grid-cols-3 
            sm:grid-cols-1 gap-6 bg-slate-100 text-gray-600 text-xl">
                <div className='bg-white p-7'>
                    <img src="./src/assets/AboutPage/Missin.jpg" alt="" className='pb-7' />
                    <h3 className='font-bold text-3xl pb-7 text-black'>OUR MISSION</h3>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum.</p>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                </div>
                <div className='bg-white p-7'>
                    <img src="./src/assets/AboutPage/Vision.jpg" alt="" className='pb-7' />
                    <h3 className='font-bold text-3xl text-black pb-7'>OUR VISION</h3>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum.</p>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                </div>
                <div className='bg-white p-7'>
                    <img src="./src/assets/AboutPage/Carreers.jpg" alt="" className='pb-7' />
                    <h3 className='font-bold text-3xl text-black pb-7'>PORTO CAREERS</h3>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                    <p className='pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum.</p>
                    <button className='font-bold text-blue-700 text-xl'>See All Positions</button>
                </div>
            </div> */}
            <MissionProgress />

        </>
    )
}

export default Section