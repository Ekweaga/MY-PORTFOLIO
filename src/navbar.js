import React from 'react';
import './navbar.css'
import jon from './jon.jpeg'

const Navbar = () => {
  return (
    <div className="nav" >
     <ul>
       <li>
         Home
       </li>
       <li>
         About Me
       </li>
       <li>
         Resume
       </li>
       <li>
         Portfolio
       </li>
       <li>
         Contact
       </li>
     </ul>
    </div>
  )
}

export default Navbar;