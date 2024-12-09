import React from 'react'
import { SiProtonmail } from "react-icons/si";
import { BsTelephoneMinus } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
           <div className='contact-space'>
            <h2 className='contact-heading' data-aos="zoom-in-left">Get in touch</h2>
            <p className='contact-text' data-aos="zoom-in-left">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='contact-flex' data-aos="zoom-in-left">
                <SiProtonmail size={30} />  mariyakhan5562@gmail.com
            </div>
            <div className='contact-flex' data-aos="zoom-in-left">
            <BsTelephoneMinus  size={30} />     (92) 31811213547
            </div>
           </div>
           <div className='contact-space'>
            <div className='form' data-aos="zoom-in-left">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='input-field' id='name'/>
            </div>
            <div className='form' data-aos="zoom-in-left">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='input-field' id='email'/>
            </div>
            <div className='form' data-aos="zoom-in-left">
                <label htmlFor="msg">Message</label>
                <textarea className='textarea-field' 
                id='msg' rows={8}> </textarea>
            </div>
            <button className='button' data-aos="zoom-in-left">
              Send
            </button>
           </div>
        </div>
    </div>
  );
};

export default Contact;

