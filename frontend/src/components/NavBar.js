import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBarStyles.css'
import {FaBars} from 'react-icons'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
 
        <Link to = '/'> 
        
        <h1> Calm-Sci </h1> 

         </Link>
        {
         click ? (<ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
            <li>
            <Link to='/'>Home </Link>
         </li>
         <li>
            <Link to='/'>Pricing</Link>
         </li>
         <li>
            <Link to='/'> Training</Link>
         </li>
         <li>
            <Link to='/contact'>Contact </Link>
         </li></ul>) : (<></>)

         
        
}
        <div className='hamburger' onClick={handleClick}>
            
            
            {click ? (<CloseIcon/>) : (<MenuIcon />)}

            
        </div>


    </div>
  )
}

export default NavBar