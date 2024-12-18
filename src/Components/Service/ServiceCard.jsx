import React from 'react'

const ServiceCard = () => {

    const data = [
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        {
            title:'Voice Bot',
            icon:'fas fa-comment',
            para: 'iKontel is your trusted partner in the latest high-end communication solutions.',
        },
        
    ]

  return (
    <>
        <div className='p-12 text-center bg-slate-200'>
            <h4 className=' text-2xl text-center text-slate-500 font-bold pb-4'>OUR SERVICES</h4>
            <h3 className='text-xl text-center font-bold'>iKontel is your trusted partner in the latest high-end communication solutions.</h3>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-10'>
                {data.map((data,index)=>(
                    <div className='bg-white p-10 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-md'>
                        <span className='text-4xl'><i className={data.icon}></i></span>
                        <h3 className='py-5 font-bold text-2xl text-gray-700'>{data.title}</h3>
                        <p className='text-gray-500'>{data.para}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default ServiceCard