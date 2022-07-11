import React , { useRef , useState} from 'react';
import './contact.css';
import phone from './icon-phone.svg';
import email from './icon-email.svg';
import messaf from './icon-messages.svg'


import emailjs from '@emailjs/browser';

const Contact = () => {
  const [set, Setdone] =  useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_5syrutj', 'template_gzm1999', form.current, 'user_ohuOwLi0xmoYnCEvcRvaF')
      .then((result) => {
        Setdone(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
       <section className='form' >
       
        
          
       </section>
        </>
  )
}

export default Contact