import React from 'react'
import { FOOTER_NAVIGATION_LINK_LIST, SOCIL_MEDIA_LIST } from '../../utils/helper'
import { Link } from 'react-router-dom'
import Icons from './Icons'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-blue-700 pt-12 md:pt-14 lg:pt-16'>
            <div className="max-w-[1240px] mx-auto px-4 xl:px-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-4 border-b pb-10">
                    {FOOTER_NAVIGATION_LINK_LIST.map((obj, i) => {
                        return (
                            <div key={i} className={`flex flex-col gap-2 ${i === 3 && "lg:-ms-10 lg:pe-8"}`}>
                                <h3 className='text-white text-xl md:text-2xl font-bold mb-2'>{obj.title}</h3>
                                {obj.address && <p className='text-white text-sm leading-none md:text-base lg:text-lg'>{obj.address}</p>}
                                {obj.number && <Link to={`tel:${obj.number}`} className='text-white duration-300 hover:text-black text-xl md:text-2xl font-bold -mt-2'>{obj.number}</Link>}
                                {obj.sales && <p className='text-white text-sm leading-none md:text-base lg:text-lg'>{obj.sales}</p>}
                                {obj.salesNumber && <Link to={`tel:${obj.salesNumber}`} className='text-white duration-300 hover:text-black text-xl md:text-2xl font-bold -mt-2'>{obj.salesNumber}</Link>}
                                {obj.footerLinks && obj.footerLinks.map((data, index) => {
                                    return (
                                        <Link key={index} to={data.url} className='text-white text-sm leading-none md:text-base lg:text-lg relative before:absolute before:w-0 before:h-0.5 before:bg-white max-w-max before:left-0 before:bottom-0 duration-300 before:duration-300 hover:before:w-full'>{data.title}</Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col md:flex-row justify-between py-4'>
                    <p className='text-sm md:text-base text-white text-center md:text-start flex justify-center mt-4 md:mt-0 order-2 md:order-1'>Amilo AI Services. ©{year}. All Rights Reserved</p>
                    <div className="flex justify-center md:justify-end h-full gap-4 order-1 md:order-2">
                        {SOCIL_MEDIA_LIST.map((obj, i) => {
                            return (
                                <Link aria-label="footer-icon"
                                    key={i}
                                    href={obj.url}
                                    className="shadow-sm flex items-center hover:scale-110 hover:bg-indigo group duration-300 justify-center shadow-zinc-600 icon w-8 h-8 xl:w-10 xl:h-10 bg-white rounded-full"
                                >
                                    <Icons icon={`${obj.icon}`} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
