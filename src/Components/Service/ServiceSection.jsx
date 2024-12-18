import React from 'react'
import { OUR_SERVICES_CARD_DATA_LIST } from '../../utils/helper'

const ServiceSection = () => {

    return (
        <div className='max-w-[1240px] mx-auto px-4 xl:px-0'>
            <h4 className='text-center text-base text-slate-500 font-bold'>OUR SERVICES</h4>
            <h3 className='text-center text-[28px] md:text-[32px] lg:text-4xl font-bold'>World-Class Solutions for your Business</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {OUR_SERVICES_CARD_DATA_LIST.map((obj, i) => (
                    <div key={i} className='flex flex-col items-center'>
                        <img className='max-w-[180px] w-full' src={obj.image} alt="" />
                        <h3 className='text-blue-600 text-center font-bold text-xl md:text-2xl lg:text-3xl'>{obj.title}</h3>
                        <p className='text-slate-500 text-center my-2 text-sm md:text-base line-clamp-3 lg:line-clamp-none'>{obj.description}</p>
                        <div className="flex justify-center pt-2">
                            <button className='font-bold text-center text-lg md:text-xl hover:text-orange-500 duration-300'>READ MORE +</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ServiceSection