import React from 'react'
import { MdMyLocation } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactPath = () => {
    return (

        <>
            <div className='h-auto  pl-40 pb-6 flex gap-10 '>
                <div className=' justify-center items-center pl-10 pb-16 w-7/12 h-full bg-blue-950'>
                    
                    <h2 className=' pl-16 pt-12 pb-10 font-semibold text-xl text-white'>Send a Message</h2>
                    <form action="" className='pl-16 pb-7'>
                        
                        <div className='flex gap-24 pb-4'>
                            <div className='w-44 ' >
                                <p className='text-white font-semibold text-lg pb-2'>First Name</p>
                                <input type="text" className='w-52 h-8 pl-2 border border-gray ' placeholder='First Name' />
                            </div>

                            <div>
                                <p className='text-white font-semibold text-lg pb-2'>Last Name</p>
                                <input type="text" className='w-52 h-8 pl-2 border border-gray ' placeholder='Last Name' />
                            </div>
                            
                        </div>

                        <div className='flex gap-16 pb-4'>
                            <div>
                                <p className='text-white font-semibold text-lg pb-2'>Email</p>
                                <input type="email" className='w-52 h-8 pl-2 border border-gray' placeholder='abc@gmail.com' />
                            </div>
                            <div> 
                                <p className='text-white font-semibold text-lg pb-2'>Contact Number</p>
                                <input type="contact" className='w-52 h-8 pl-2 border border-gray ' placeholder='Contact Number'/>
                            </div>
                        </div>

                        <label className='text-white font-semibold text-lg '>Message</label>
                        <div className=' w-2/5 h-52 pt-2'>
                            <textarea name="" id="message" cols={64} rows={8} placeholder='Write Your Message Here...'
                            autoComplete='off'></textarea>
                        </div>
                        
                        <div className=' pt-4'>
                        <button className='border py-2 px-6 text- font-bold bg-white hover:bg-slate-200 active:bg-slate-300'> Send</button>
                        </div>

                    </form>
                </div>
  

                <div>
                    <div className='h-96 w-80 bg-blue-950'>
                        <h2 className='pl-9 text-xl font-semibold text-white pt-12'>Contact Info</h2>
                        <div className='flex pl-9 pt-14 py-5'>
                            <MdMyLocation  className='  border rounded-full text-2xl bg-white'/>
                            <p className='text-white font-semibold pl-4'>Bangalore</p>
                        </div>
                        <div className='flex pl-9 py-5'>
                            <MdMail className='  border rounded-full text-2xl bg-white'/>
                            <p className='text-white font-semibold pl-4'>abc@amiloai.com</p>
                        </div>
                        <div className='flex pl-9 py-5'>
                            <BsFillTelephoneFill className='  border rounded-full text-2xl bg-white'/>
                            <p className='text-white font-semibold pl-4'>+911234567890</p>
                        </div>
                    </div>
 
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.614603883637!2d77.68583057373115!3d12.932473815737609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b3907f1209%3A0x311a7b213162c6ab!2sJPMorgan%20Chase%20%26%20Co.!5e0!3m2!1sen!2sin!4v1733519544548!5m2!1sen!2sin" className=' pt-5 w-80 h-72'  loading="eager" referrerpolicy=""></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPath