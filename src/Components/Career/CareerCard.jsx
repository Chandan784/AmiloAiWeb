import React from 'react'

const CareerCard = () => {

    const Career = [
        {
            title:'Inside Sales Executive',
            date:'Posted on: 07th Apr 2023',
            position:'2 positions',
            time:'Full Time',
            icon:'fas fa-map-marker-alt',
            location:'Banglore',
        },
        {
            title:'Inside Sales Executive',
            date:'Posted on: 07th Apr 2023',
            position:'2 positions',
            time:'Full Time',
            icon:'fas fa-map-marker-alt',
            location:'Banglore',
        },
        {
            title:'Inside Sales Executive',
            date:'Posted on: 07th Apr 2023',
            position:'2 positions',
            time:'Full Time',
            icon:'fas fa-map-marker-alt',
            location:'Banglore',
        },
        {
            title:'Inside Sales Executive',
            date:'Posted on: 07th Apr 2023',
            position:'2 positions',
            time:'Full Time',
            icon:'fas fa-map-marker-alt',
            location:'Banglore',
        },
        {
            title:'Inside Sales Executive',
            date:'Posted on: 07th Apr 2023',
            position:'2 positions',
            time:'Full Time',
            icon:'fas fa-map-marker-alt',
            location:'Banglore',
        },
        {
            title:'Inside Sales Executive',
            date:'Posted on: 07th Apr 2023',
            position:'2 positions',
            time:'Full Time',
            icon:'fas fa-map-marker-alt',
            location:'Banglore',
        },
    ]

  return (
    <>
        <div className='text-center p-20'>
            <h3 className='font-bold text-4xl'>Recent jobs</h3>
            <p className='text-gray-400 text-xl pt-5'>Find a team and begin your own story here</p>

            <div className='flex justify-around pt-10'>
                <input type="text" placeholder='search....' className='border-2 w-1/2 h-10 px-4' />
                <select className='border-2 w-1/4 h-10 px-4'>
                    <option value="Select">Select</option>
                    <option value="delhi">Delhi</option>
                    <option value="Uttrakhand">Uttrakhand</option>
                </select>
            </div>

            {Career.map((Career,index)=>(
            <div className='lg:flex sm:block justify-around p-5 rounded-xl mt-10 border-2 border-gray-500 text-center items-center lg:mx-20 '>
                <div className='flex'>
                    <div class="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                    <div>
                        <h3 className='font-bold text-xl'>{Career.title}</h3>
                        <p>{Career.date}</p>
                    </div>
                </div>
                    <div>
                        <h3 className='font-bold text-gray-500'>{Career.position}</h3>
                    </div>
                    <div>
                        <h3 className='font-bold text-gray-500'>{Career.time}</h3>
                    </div>
                    <div>
                        <h3 className='font-bold text-gray-500'><span className='pr-5 text-black'><i className={Career.icon}></i></span>{Career.location}</h3>
                    </div>
                
            </div>
            ))}
        </div>
    </>
  )
}

export default CareerCard