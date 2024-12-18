import React from 'react'
import { OUR_SERVICES_THREE_CARD_DATA_LIST } from '../../utils/helper'

const ServicesThreeCard = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 md:gap-6">
                {OUR_SERVICES_THREE_CARD_DATA_LIST.map((obj, i) => {
                    return (
                        <div className='flex flex-col items-center'>
                            <div className="border-4 border-black w-28 h-28 rounded-full text-blue-700 text-5xl font-bold flex items-center justify-center">
                                <p>{obj.id}</p>
                            </div>
                            <h3 className='font-bold text-center text-black text-lg md:text-xl py-4'>{obj.title}</h3>
                            <p className='text-center text-sm md:text-base text-black'>{obj.description}</p>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default ServicesThreeCard
