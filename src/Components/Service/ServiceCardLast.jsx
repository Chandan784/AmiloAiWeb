import React from 'react'

const ServiceCardLast = () => {

    const dataSet = [
        {
            imgSrc:'./src/assets/ServicePage/Logistic.png',
            title:'Logistics & Freight',
            para:'Easy Logistic (Complete Logistic & Haulage Management System)',
            paraone:'Container Depot Management System',
            paratwo:'Freight Forwarding System (Sea)',
        },
        {
            imgSrc:'./src/assets/ServicePage/Logistic.png',
            title:'Logistics & Freight',
            para:'Easy Logistic (Complete Logistic & Haulage Management System)',
            paraone:'Container Depot Management System',
            paratwo:'Freight Forwarding System (Sea)',
        },
        {
            imgSrc:'./src/assets/ServicePage/Education.png',
            title:'Logistics & Freight',
            para:'Easy Logistic (Complete Logistic & Haulage Management System)',
            paraone:'Container Depot Management System',
            paratwo:'Freight Forwarding System (Sea)',
        },
        {
            imgSrc:'./src/assets/ServicePage/Education.png',
            title:'Logistics & Freight',
            para:'Easy Logistic (Complete Logistic & Haulage Management System)',
            paraone:'Container Depot Management System',
            paratwo:'Freight Forwarding System (Sea)',
        },
    ]

  return (
    <>
        <div className='px-5 py-10'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-8 '>
                {dataSet.map((dataSet,index)=>(
                    <div className='bg-blue-950 text-white rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-md items-center border-black border-2'>
                        <img src={dataSet.imgSrc}  alt="" />
                        <div className='p-5 '>
                        <h3 className='py-5 font-bold text-2xl'><ul>{dataSet.title}</ul></h3>
                        <p className=''>*{dataSet.para}</p>
                        <p className=''>*{dataSet.paraone}</p>
                        <p className=''>*{dataSet.paratwo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default ServiceCardLast