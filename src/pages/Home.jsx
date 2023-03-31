import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { packages } from '../data/packages';

const Home = () => {
  return (
    <>
        <header class="header-type-three">
        <div class="header_top_area">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="contact_wrapper_top">
                            <ul class="header_top_contact">
                                <li><i class="fa fa-phone" aria-hidden="true"></i>+254 777 991597</li>
                                <li><i class="fa fa-envelope" aria-hidden="true"></i>anstetours@anstegroup.com</li>
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
    <main class="hero-slide-three ">
        
        <div class="item">
            <img src="img/index_bg2.jpg" alt="hero-1"/>
            <div class="hero-slider__content-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12">
                            <div class="hero-slider__content">
                                <h2 class="hero-slider__title">Adventure awaits, let's explore together</h2>
                                <p class="hero-slider__text">Embark on unforgettable journeys with our expertly curated 
                                    tours and immerse yourself in new cultures and experiences.</p>
                                <a class="hero-slider__btn" href="#contactus"> Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    <section id="home" class="ws-section-spacing">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="video-img-box">
                        <img src="img/travel.jpg" alt=""/>
                       
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-content">
                        <h2>We make the best for all our customers.</h2>
                        <p>At our tour agency, our customers are at the heart of everything we do. 
                            That's why we're dedicated to providing you with the best possible travel experiences,
                             tailored to your needs and preferences. Whether you're looking for an adventure-packed itinerary or a relaxing getaway, our team of experts will work with you to create a personalized tour that meets your expectations and exceeds them. We take care of every detail, from transport and accommodation to activities and dining, so that you can focus on enjoying your trip. 
                             </p>
                        <p>With us, you can be confident that you'll receive exceptional service, high-quality experiences, and unforgettable memories that will last a lifetime. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="services" class="service-one ws-section-spacing bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-title ">
                        <h2 class="title">Our services</h2>
                        <h4 class="sub-title">Our tours are designed to inspire, challenge, and amaze you. Come with us and discover the extraordinary.</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <img src="img/travel_plan.jpg" alt="about-2"/>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 masonry">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fas fa-bullhorn"></i></div>
                                <h3 class="service-box-title">Itinerary curation</h3>
                                <p class="service-box-desc">We will work with you to create a customized itinerary that matches your travel preferences,
                                     interests and budget ensuring that your trip is a memorable and stress-free experience.</p>
                                
                            </div>
                           
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 masonry">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fab fa-avianex"></i></div>
                                <h3 class="service-box-title">Visa Application </h3>
                                <p class="service-box-desc">We ensure that you have all the necessary documentation and 
                                    information to apply for a visa and that the process is as smooth and hassle-free as possible.
                                </p>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 masonry">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fa fa-home"></i></div>
                                <h3 class="service-box-title">Travel Insurance</h3>
                                <p class="service-box-desc">Comprehensive travel insurance that covers unexpected events such as trip cancellations, medical emergencies and lost luggage giving you peace of 
                                    mind and protection while you travel.</p>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 masonry">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fas fa-ticket-alt"></i></div>
                                <h3 class="service-box-title">M.I.C.E Facilitation</h3>
                                <p class="service-box-desc">We provide Meetings, Incentives, Conferences and Exhibitions (M.I.C.E). Business tourism at its best. We bring together professional from different industries 
                                in an enhanced, tailor-made hospitality setting. </p>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="packages" class="ws-section-spacing bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-title ">
                        <h2 class="title">Popular Tour Package</h2>
                        <h4 class="sub-title">Our tours are designed to help you discover the beauty of the world,
                             whether it's through breathtaking landscapes or fascinating cultures.</h4>
                    </div>
                </div>
            </div>
            
            <div class="row small-package-list">
            {packages.map((item,index)=>(
                <div key={index} class="col-lg-4 col-md-6 col-sm-12 masonry">
                <div class="single_package">
                    <div class="media">
                        <img src="img/packages/marina.jpg" alt=""/>
                        <div class="media-body">
                            <span class="direction"><i class="fas fa-map-marker-alt"></i> {item.location}</span>
                            <h3><a href="/">{item.title}</a></h3>
                            <div class="duration">
                                <ul>
                                    <li>
                                        <p> <i class="far fa-clock"></i> Duration</p>
                                        <h5>4 Days</h5>
                                    </li>
                                    <li>
                                        <p> <i class="fas fa-tags"></i> From</p>
                                        <h5>KES 30,000</h5>
                                    </li>
                                </ul>
                            </div>
                            <a href="#contactus" class="btn-packlist">Book now</a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
               
            </div>
        </div>
    </section>
    <section class="same-section-spacing bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-title ">
                        <h2 class="title">Our Partners</h2>
                        <h4 class="sub-title">We partner with various companies to offer our clients the best prices and experiences.</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="client-slide">
                       <>
                       <div class="item" style={{ display:'inline-block', width:'100%' }}>
                            <div class="img-wapper">
                                <img src="img/tralogo.png" alt=""/>
                            </div>
                        </div>
                        <div class="item" style={{ display:'inline-block', width:'100%' }}>
                            <div class="img-wapper">
                                <img src="img/logo_kata.png" alt=""/>
                            </div>
                        </div>
                        <div class="item" style={{ display:'inline-block', width:'100%' }}>
                            <div class="img-wapper">
                                <img src="img/ecotourism.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="item" style={{ display:'inline-block', width:'100%' }}>
                            <div class="img-wapper">
                                <img src="img/kato_bonded logo.png" alt=""/>
                            </div>
                        </div>
                       
                       </>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="contactus" class="ws-section-spacing img-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="footer-widget">
                        <div class="title">
                            <h3>About Us</h3>
                        </div>
                        <p>We offer tailor-made East African safaris and international travels. Our team welcomes you with warm hospitality and offers you an immersive, genuine and remarkable safari experience you’ll never forget.</p>
                        <ul class="footer-icon">
                            <li><a href="https://twitter.com/anstetours"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/anstetoursandtravel"><i class="fab fa-facebook-f"></i></a></li>
                        </ul>

                    </div>
                </div>
                
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="footer-widget">
                        <div class="title">
                            <h3>Contact Info</h3>
                        </div>
                        <div class="contact-info-two">
                            <ul>
                                <li>
                                    <h4 style={{color:'white'}}>Address</h4>
                                    <p>ANSTE TOURS & TRAVEL LTD
                                        P.O Box 70351- 00400
                                        NAIROBI, Kenya.
</p>
                                </li>
                                <li>
                                    <h4 style={{color:'white'}}>Mobile</h4>
                                    <p>+254 777 991597</p>
                                    
                                </li>
                                <li>
                                    <h4 style={{color:'white'}}>Email</h4>
                                    <p>anstetours@anstegroup.com</p>
                                </li>
                                <li>
                                    <h4 style={{color:'white'}}>Operating Hours:</h4>
                                    <p>Mon-Fri 0830hrs – 1700hrs (EAT)</p>
                                </li>
                            </ul>
    
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-bottom text-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="left-text">
                        Copyright © 2023 Anste Tours & Travel Ltd | All Rights Reserved.
                    </div>
                </div>

            </div>
        </div>
    </div> 
    </>
  )
}

export default Home