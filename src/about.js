import React from 'react';
import './about.css'
import jon from './chax.jpg'

const About = () => {
  return (
    <>
    <div className='about'>

    
    <div className='abt'>
    
   
      <section  >
     <div> <h1 data-aos="zoom-in"> About Me</h1></div> 
       <p>
         IT personnel/web developer with passion for tailored solutions to solve problems in a thriving and professional manner.
         Bachelor's degree in Information Technology and two years experience with HTML5, Javascript, CSS frameworks and other Javascript frameworks(ReactJs, Angular)
       </p>
       
      </section>
      <div className='jonimg'>
    <img src= {jon}/>
    </div>
      </div>
      </div>
      
      </>
  )
}

export default About;