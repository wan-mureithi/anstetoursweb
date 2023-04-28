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
                                <a class="nav-link" href="/">About Us</a>
                               
                            </li>
           
                            <li class={location.pathname === '/international-tours' ? 'nav-item active' : 'nav-item'}>
                                <Link to="/international-tours" className='nav-link' >International tours
                                </Link>
                                <ul class="dropdown">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">Dubai</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">Egypt</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">South Africa</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">London</a>
                                    </li>
                                </ul>
                            </li>
                            <li class={location.pathname === '/domestic-tours' ? 'nav-item active' : 'nav-item'}>
                                <Link to="/domestic-tours" className='nav-link' >Domestic tours 
                                </Link>
                                <ul class="dropdown">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">Nairobi</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">Mombasa</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">Nanyuki</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/domestic-tours">Maasai Mara</a>
                                    </li>
                                </ul>
                            </li>

                            <li class={location.pathname === '/contact-us' ? 'nav-item active' : 'nav-item'}>
                            <Link to="/contact-us" className='nav-link' >Contact Us</Link>
                            </li>
                            <li class={location.pathname === '/professional' ? 'nav-item active' : 'nav-item'}>
                            <Link to="/professional" className='nav-link' >MICE</Link>
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