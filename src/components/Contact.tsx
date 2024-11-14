import React from 'react'
import { SiProtonmail } from "react-icons/si";
import { BsTelephoneMinus } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
           <div className='space-y-8'>
            <h2 className='text-amber-500 md: text-5xl' data-aos="zoom-in-left">Get in touch</h2>
            <p className='text-red-100 text-[18px] pt-2' data-aos="zoom-in-left">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-left">
                <SiProtonmail size={30} />  mariyakhan5562@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-left">
            <BsTelephoneMinus  size={30} />     (92) 31811213547
            </div>
           </div>
           <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-amber-500' 
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-amber-500' 
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                <label htmlFor="msg">Message</label>
                <textarea  
                className='bg-transparent border border-amber-500' 
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-amber-500 p-2 px-6' data-aos="zoom-in-left">Send</button>
           </div>
        </div>
    </div>
  )
}

export default Contact

