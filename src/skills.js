import React from 'react'
import './skill.css';
import jon from './jon.jpeg';
import html from './html.png';
import css from './css.png'
import js from './js.png'
import press from './press.jpeg'
import ang from './angular.png'
import react from './react.png'
import php from './php.jpeg'
import node from './node.png'
import fire from './fire.png'
import sql from './sql.png'
import media from './media.jpeg'
import boot from './boot.png'

const Skills = () => {
  return (
    <div className='inner'>
      <div className='header'>
        <h1 style={{fontSize:'20px'}}>PROFESSIONAL SKILLS</h1>
        </div>
        <div className='container'>
          <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={html} className='skillicon'/>
              </div>
              <h3>HMTL5</h3>
              </div>
              <p>HTML5 is mark up language used to write and design website content
               
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle' >
              <div className='img'>
                <img src={css} className='skillicon'/>
              </div>
              <h3>CSS/SCSS</h3>
              </div>
              <p>
              CSS is a cascading style sheet used to design and give beautiful
              web layout
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={boot} className='skillicon'/>
              </div>
              <h3>BOOTSTRAP</h3>
              </div>
              <p> CSS framework is a cascading style sheet used to design and give beautiful
              web layout
              
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={js}  className='skillicon'/>
              </div>
              <h3>JS</h3>
              </div>
              <p>VanillaJs, for programming the website dynamically, it improves user interaction and Experience
               
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={press} className='skillicon'/>
              </div>
              <h3>WORDPRESS</h3>
              </div>
              <p>Content Management System(CMS), used for building website, blogs... etc
                
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={ang} className='skillicon'/>
              </div>
              <h3>ANGULAR</h3>
              </div>
              <p>Powerful Javascript framework for building Single Page Application(SPA) web apps, PWA
                
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={react} className='skillicon'/>
              </div>
              <h3>REACT JS</h3>
              </div>
              <p>Powerful Javascript framework for building and Improving UI for Single Page Application(SPA) web apps, 
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={php} className='skillicon'/>
              </div>
              <h3>PHP</h3>
              </div>
              <p>Server-side programming language on Web
               
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={node} className='skillicon'/>
              </div>
              <h3>NODEJS</h3>
              </div>
              <p>
                Javascript server-side programming language
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={fire} className='skillicon'/>
              </div>
              <h3>FIREBASE</h3>
              </div>
              <p>
                Platform that handles database, authentication , hosting of web app
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={sql} className='skillicon'/>
              </div>
              <h3>MYSQL/MONGODB</h3>
              </div>
              <p>Language for Databse design
              </p>
              </div>
              <div className='skillbox'  data-aos="fade-in">
            <div className='skilltitle'>
              <div className='img'>
                <img src={media} className='skillicon'/>
              </div>
              <h3>SOCIAL MEDIA ADS</h3>
              </div>
              <p>SEO, Facebook Ads, Google Ads, Youtube Ads, Email marketing
              </p>
              </div>

              </div>
              </div>
      
    
      
     
   
  )
}

export default Skills