import React, { useEffect, useState } from 'react'
import { NAVIGATION_LINK_LIST } from '../../utils/helper'
import { Link } from 'react-router-dom'
import page_logo from '../../assets/images/home/page-logo.png'
import Icons from './Icons'

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        if (openNav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [openNav]);
    return (
        <div className="relative">
            <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-3'>
                <div className="flex justify-between items-center">
                    <Link to={'/'}>
                        <img className='lg:w-14 md:w-[52px] w-12' src={page_logo} alt="page-logo" />
                    </Link>
                    <div className="hidden md:flex gap-5">
                        {NAVIGATION_LINK_LIST.map((obj, i) => {
                            return (
                                <Link to={obj.url} key={i} className='text-xl font-semibold relative before:w-0 before:bg-blue-700 text-black before:h-[2px] before:absolute hover:text-blue-700 duration-300 hover:before:w-full before:duration-300 before:left-0 before:bottom-0'>{obj.title}</Link>
                            )
                        })}
                    </div>
                    <div className='md:hidden'>
                        <span onClick={() => setOpenNav(true)} className='cursor-pointer duration-300 hover:opacity-70'>
                            <Icons icon={"menuToggel"} />
                        </span>

                    </div>
                    <div className={`max-w-[300px] md:hidden w-full duration-300 bg-black min-h-screen fixed top-0  flex flex-col gap-3 p-5 pt-20
                        ${openNav ? "right-0" : "-right-[320px]"}`}>
                        <span onClick={() => setOpenNav(false)} className='absolute duration-300 hover:opacity-70 top-5 right-5 cursor-pointer'>
                            <Icons icon={"cross"} />
                        </span>
                        {NAVIGATION_LINK_LIST.map((obj, i) => {
                            return (
                                <Link to={obj.url} key={i} onClick={() => setOpenNav(false)} className='text-xl font-semibold relative before:w-0 before:bg-blue-700 text-white before:h-[2px] before:absolute max-w-max hover:text-blue-700 duration-300 hover:before:w-full before:duration-300 before:left-0 before:bottom-0'>{obj.title}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
