import React from 'react'

const MenuBar = () => {
  return (
    <>
     <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="/">
                        <img src="img/removebg-preview.png" alt="logo" style={{ width:"200px"}}/>
                    </a>
                    <div class="collapse navbar-collapse my-lg-0" id="navbarNav">
                        <ul id="navbarlinks" class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                               
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/services">Our Services</a>
                               
                            </li>
           
                            <li class="nav-item">
                                <a class="nav-link" href="/packages">Tour Packages</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/contact-us">Contact Us</a>
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