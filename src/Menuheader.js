import React,{useState,useEffect} from 'react';
import './navbar.css'
import jon from './jon.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import closeimg from './icon-close.svg';

import openimg from './icon-hamburger.svg'


const Menuheader = () => {
    const [toggle,settoogle] = useState(false);
    const [close,setclose] = useState(true);
    const [open,setopen] = useState(false);
    const [screenwidth, setscreenwidth] = useState(window.innerWidth)
    const tooglenav=()=>{
      settoogle(true)
      setclose(false)
      setopen(true)
     
    }
    
    const toogleclose = ()=>{
      settoogle(false);
      setclose(true)
      setopen(false)
    }
  
    useEffect(()=>{
      const changewidth = ()=>{
        if(typeof window !== "undefined"){
         
            setscreenwidth(window.innerWidth)
          }
        
      }
      window.addEventListener('resize',changewidth)
    },[])
    return (
      <div className='headers shadow'> 
        <div className='header-logo'>
           <h1 style={{fontSize:'17px',color:'white'}}>CHAX</h1>
        </div>
        <div className='header-menu' style={{backgroundColor:toggle ? "green": null}}>
        {(toggle || screenwidth > 500) && (<div className="menuBar">
            <a href="" style={{textDecoration:'none',color:'white'}} >Home</a>
            <a href="#about" style={{textDecoration:'none',color:'white'}}>About Me</a>
            <a href="#projects" style={{textDecoration:'none',color:'white'}}>Projects</a>
               <a href="#contact" style={{textDecoration:'none',color:'white'}}>Contact</a>
               <a href="#skills" style={{textDecoration:'none',color:'white'}}>Skills</a>

        </div>) }
           <div className='menubar'>
           {close &&(<img src={openimg} style={{width:'20px',height:'20px',cursor:'pointer' }} alt="img" onClick={tooglenav} />)}  
          {open &&( <img src={closeimg} style={{width:'20px',height:'20px',cursor:'pointer'}} alt="imgs" onClick={toogleclose}/>)} 
           </div>
           
        </div>
      </div>
    )
}

export default Menuheader;