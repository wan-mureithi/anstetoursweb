import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const AppBar = () => {
  return (
    <>
         <header class="header-type-three">
        <div class="header_top_area">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="contact_wrapper_top">
                            <ul class="header_top_contact">
                                <li><i class="fa fa-phone" aria-hidden="true"> <FontAwesomeIcon icon={faPhone}/> </i>+254 777 991597</li>
                                <li><i class="fa fa-envelope" aria-hidden="true"> <FontAwesomeIcon icon={faEnvelope}/></i>anstetours@anstegroup.com</li>
                            </ul>
                            <div class="topbar-icon">
                                <ul>
                                    <li><a href="https://twitter.com/anstetours"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/anstetoursandtravel"><i class="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-fixed header-one">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="/">
                        <img src="img/removebg-preview.png" alt="logo" style={{ width:"200px"}}/>
                    </a>
                    <div class="collapse navbar-collapse my-lg-0" id="navbarNav">
                        <ul id="navbarlinks" class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">Home</a>
                               
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Our Services</a>
                               
                            </li>
           
                            <li class="nav-item">
                                <a class="nav-link" href="#packages">Tour Packages</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#contactus">Contact Us</a>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
                <div style={{width:"165px"}} class="mobile-menu" data-logo="img/removebg-preview.png"></div>
            </div>
        </div>
    </header> 
    </>
  )
}

export default AppBar