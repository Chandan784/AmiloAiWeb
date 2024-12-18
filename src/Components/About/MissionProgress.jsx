import React from 'react'

const MissionProgress = () => {
    return (
        <div className='bg-slate-100'>
            <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 text-gray-600 text-xl">
                    <div className='bg-white p-4 md:p-6 lg:p-7 rounded-md'>
                        <img src="./src/assets/images/about/Missin.jpg" alt="" className='pb-7' />
                        <h3 className='font-bold text-2xl md:text-[26px] lg:text-3xl pb-7 text-black'>OUR MISSION</h3>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum.</p>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                    </div>
                    <div className='bg-white p-4 md:p-6 lg:p-7 rounded-md'>
                        <img src="./src/assets/images/about/Vision.jpg" alt="" className='pb-7' />
                        <h3 className='font-bold text-2xl md:text-[26px] lg:text-3xl text-black pb-7'>OUR VISION</h3>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum.</p>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                    </div>
                    <div className='bg-white p-4 md:p-6 lg:p-7 rounded-md'>
                        <img src="./src/assets/images/about/Carreers.jpg" alt="" className='pb-7' />
                        <h3 className='font-bold text-2xl md:text-[26px] lg:text-3xl text-black pb-7'>PORTO CAREERS</h3>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                        <p className='pb-7 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum.</p>
                        <button className='font-bold text-blue-700 mb-7 text-xl'>See All Positions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionProgress
