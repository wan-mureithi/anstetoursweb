import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBullhorn, faPlane, faHome, faTicket, faClock, faTags,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { packages } from '../data/packages';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <>
  <AppBar/>
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
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fas fa-bullhorn"><FontAwesomeIcon icon={faBullhorn}/></i></div>
                                <h3 class="service-box-title">Itinerary curation</h3>
                                <p class="service-box-desc">We will work with you to create a customized itinerary that matches your travel preferences,
                                     interests and budget ensuring that your trip is a memorable and stress-free experience.</p>
                                
                            </div>
                           
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fab fa-avianex"><FontAwesomeIcon icon={faPlane}/></i></div>
                                <h3 class="service-box-title">Visa Application </h3>
                                <p class="service-box-desc">We ensure that you have all the necessary documentation and 
                                    information to apply for a visa and that the process is as smooth and hassle-free as possible.
                                </p>
                                
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fa fa-home"><FontAwesomeIcon icon={faHome}/></i></div>
                                <h3 class="service-box-title">Travel Insurance</h3>
                                <p class="service-box-desc">Comprehensive travel insurance that covers unexpected events such as trip cancellations, medical emergencies and lost luggage giving you peace of 
                                    mind and protection while you travel.</p>
                                
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fas fa-ticket-alt"><FontAwesomeIcon icon={faTicket}/></i></div>
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
                <div key={index} class="col-lg-6 col-md-6 col-sm-12">
                <div class="single_package">
                    <div class="media">
                        <img src={item.image} alt=""/>
                        <div class="media-body">
                            <span class="direction"><i class="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt}/></i> {item.location} </span>
                            <h3><a href="/">{item.title}</a></h3>
                            <div class="duration">
                                <ul>
                                    <li>
                                        <p> <i class="far fa-clock"><FontAwesomeIcon icon={faClock}/></i> Duration</p>
                                        <h5>5 Days</h5>
                                    </li>
                                    <li>
                                        <p> <i class="fas fa-tags"><FontAwesomeIcon icon={faTags}/></i> From</p>
                                        <h5>KES 50,000</h5>
                                    </li>
                                </ul>
                            </div>
                            <button class="btn-packlist">Book now</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
               
            </div>
        </div>
    </section>
    <Partners/>
   <Footer/>
    </>
  )
}

export default Home