import React from 'react';
import './services.css'

const Services = () => {
  return (
    <>

    <div className='services'>
      <h4 style={{fontSize:'20px'}}>WHAT CAN I OFFER ?</h4>
      <div className='content'>
        <div data-aos="fade-in">
          <b>- 1</b><br/>
          <span>
            Web Design
          </span>
          <p>
           As a Front-end developer I can build and design your website with beautiful and awesome layouts
          </p>
        </div>
        <div  data-aos="zoom-in">
        <b>- 2</b><br/>
          <span>
            Web Development
          </span>
          <p>
         We make your website more interactive with good User experience
          </p>
        </div>
        <div  data-aos="fade-in">
        <b>- 3</b><br/>
          <span>
            Software Dev
          </span>
          <p>
           Web and Mobile Apps, SPA PWA
          </p>
        </div>
        <div  data-aos="zoom-in">
        <b>- 4</b><br/>
          <span>
            E-Commerce
          </span>
          <p>
           We build responsive and fledge e-commerce store
          </p>
        </div>
        <div  data-aos="fade-in">
        <b>- 5</b><br/>
          <span>
            Digital marketing
          </span>
          <p>
             SEO/SMM, Social media Ads, Email Marketing
          </p>
        </div>
        
      </div>
    </div>
    
    
    
    </>
  )
}

export default Services;