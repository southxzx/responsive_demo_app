import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa';
import { CgBoy } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';

import { Button } from '../utilities/Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); // Chuyển X -> =

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false); // Tắt 
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();

    },[])

    // Khi resize sẽ gọi hàm showButton
    window.addEventListener('resize',showButton);

    return (
        <IconContext.Provider value={{color:'#fff'}} >
        <div className="navbar">
            <div class="navbar-container container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     <CgBoy className="navbar-icon"></CgBoy>
                     SOUTHXZX
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>  
                 {click ? <FaTimes/> : <FaBars/>}
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className="nav-item">
                         <Link onClick={closeMobileMenu} to="/" className="nav-link">
                             Home
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link onClick={closeMobileMenu} to="/services" className="nav-link">
                             Services
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link onClick={closeMobileMenu} to="/ptoducts" className="nav-link">
                             Product
                         </Link>
                     </li>
                     <li className="nav-btn">
                         {button ? (
                             <Link to='/sign-up' className="btn-link"> 
                             <Button buttonStyle='btn--outline'>SIGN UP</Button>
                             </Link>
                         ) : (
                            <Link onClick={closeMobileMenu}  to='/sign-up' className="btn-link"> 
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                            </Link>
                         )}
                     </li>
                 </ul>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar