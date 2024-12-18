import React from 'react'

const WhoAreYou = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='flex gap-4 lg:gap-6'>
                    <div className='w-1/2'>
                        <div className='w-full overflow-hidden group'>
                            <img className='w-full group-hover:scale-110 duration-300' src="./src/assets/images/home/generic-1.jpg" alt="generic" />
                        </div>
                        <h3 className='text-xl font-bold py-2'>IT CONSULTING</h3>
                        <p className="text-sm md:text-base text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full overflow-hidden group'>
                            <img className='w-full group-hover:scale-110 duration-300' src="./src/assets/images/home/generic-2.jpg" alt="generic" />
                        </div>
                        <h3 className='text-xl font-bold py-2'>IT SUPPORT</h3>
                        <p className="text-sm md:text-base text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor.</p>
                    </div>
                </div>
                <div className=''>
                    <p className=" text-slate-500 font-bold" >WHO WE ARE</p>
                    <h3 className='text-[22px] md:text-2xl lg:text-3xl font-extrabold'>We focus on bringing value and solve business challenges through the delivery of modern IT services and solutions</h3>
                    <p className='py-2 text-slate-500 font-medium text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</p>
                    <button className='text-blue-600 font-bold text-xl hover:text-black duration-300 relative before:absolute before:w-0 before:h-[2px] before:bg-black before:left-0 before:bottom-0 before:duration-300 hover:before:w-full'>Find Out More</button>
                </div>
            </div>
        </div>
    )
}

export default WhoAreYou
