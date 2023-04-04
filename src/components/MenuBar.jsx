import React from 'react'
import { Link, useLocation } from "react-router-dom";

const MenuBar = () => {
    const location = useLocation();
  return (
    <>
     <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="/">
                        <img src="img/removebg-preview.png" alt="logo" style={{ width:"200px"}}/>
                    </a>
                    <div class="collapse navbar-collapse my-lg-0" id="navbarNav">
                        <ul id="navbarlinks" class="navbar-nav">
                            <li class={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                                <Link to="/" className='nav-link' >Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/services">Our Services</a>
                               
                            </li>
           
                            <li class={location.pathname === '/tour-packages' ? 'nav-item active' : 'nav-item'}>
                                <Link to="/tour-packages" className='nav-link' >Tour packages</Link>
                            </li>

                            <li class={location.pathname === '/contact-us' ? 'nav-item active' : 'nav-item'}>
                            <Link to="/contact-us" className='nav-link' >Contact Us</Link>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
                <div class="mobile-menu" data-logo="img/removebg-preview.png"></div>
            </div> 
    </>
  )
}

export default MenuBar