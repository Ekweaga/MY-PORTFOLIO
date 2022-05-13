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
         <h6>
           LET'S CONNECT
         </h6>
         <div >
           <p>You can always reach out to us with your project</p>
         </div><br/><br/>
         <div className='content'>

         <div className='contact' data-aos="fade-in">
         <span style={{fontSize:'12px'}}><span> > </span>
           
            <b style={{fontSize:'12px'}}>&nbsp;Address:</b>  <br/>FUTA, AKURE
           </span>
           <span style={{fontSize:'12px'}}><span> > </span>
            <b style={{fontSize:'12px'}} ><img src={phone} />&nbsp; Phone No:</b> <br/>08148837221
           </span>
           <span className='email' style={{fontSize:'12px'}}><span> > </span>
            <b style={{fontSize:'12px'}}><img src={email}/>&nbsp;Email:</b>  <br/>hikay133@gmail.com
           </span>
         </div>
          <div className='forms' data-aos="fade-out">

          <form  ref={form} onSubmit={sendEmail}>
              
               <div className="inputcontainer">
               <span>Send Message</span>
               <div> 
                
         <input type="text"  name="user_name" placeholder='name' ></input></div> <br/>
          <div> 
         
         <input type="email" name="user_email" placeholder='email'></input></div><br/>
         <div>
       
         <input type="text" name="message" placeholder='message'></input></div><br />
        
         <button type="submit">Send</button>
         </div>
         </form>
        <div>
         {set ? <p className='message'>Message sent successfully</p>: ""}
        </div>

          </div>

         </div>
        
          
       </section>
        </>
  )
}

export default Contact