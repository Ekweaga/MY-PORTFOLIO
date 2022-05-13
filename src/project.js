import React from 'react'
import movie from './movie.png'
import store from './menstore.png'
import motivar from './motivar.png'
import outlet from './outlet.png'
import apexs from './apexs.png';
import grocery from './grocery.png';
import fixcer from './fixcer.png'
import cry from './cry.png';
import mittyn from './mittyn.png'
import url from './urlcut.png';
import expense from './expendol.png'
import './project.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Project = () => {
  return (
    <><div className='head'>
            <h1 style={{fontSize:'20px'}}>PORTFOLIO</h1>
    </div>
  <div className='projects'>
    
    <div className='project' data-aos="zoom-in">
      <img src={movie}/>
     <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}> <b>Movella</b><b><a href="https://movellas-3f2a7.web.app/" style={{textDecoration:'none',fontSize:'13px',color:'gold'}}>View</a></b></div>
    </div>
    <div className='project' data-aos="fade-in">
      <img src={fixcer}/>
      <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}> <b>Fixcer</b><b><a href="https://wpfixcer.com/" style={{textDecoration:'none',fontSize:'13px',color:'gold'}}>View</a></b></div>
    </div>
    <div className='project' data-aos="zoom-in">
      <img src={url}/>
      <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}> <b>Url-cut</b><b><a href="https://url-cut-1bb9a.web.app/" style={{textDecoration:'none',fontSize:'13px',color:'gold'}}>View</a></b></div>
    </div>
    <div className='project' data-aos="zoom-in">
      <img src={mittyn}/>
      <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}> <b>Mit-tyn</b><b><a href="wpfixcer.com" style={{textDecoration:'none',fontSize:'13px',color:'gold'}}>View</a></b></div>
    </div>
    <div className='project' data-aos="zoom-in">
      <img src={cry}/>
      <div style={{display:'flex', justifyContent:'space-around',alignItems:'center'}}> <b>Crypto-tracker</b><b><a href="https://cryptohunt-1212a.web.app/" style={{textDecoration:'none',fontSize:'13px',color:'gold'}}>View</a></b></div>
    </div>
           </div>
           </>
      
  )
}

export default Project