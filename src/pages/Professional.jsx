import React from "react";
import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBullhorn, faPlane, faHome, faTicket, faBed, faTags,faMapMarkerAlt, faCheck, 
    faCutlery, faAngleDoubleRight, faClock } from '@fortawesome/free-solid-svg-icons'
import packages  from '../data/packages2.json'
import { Link } from 'react-router-dom'


const hotels = [
    {
        location: 'Upperhill, Nairobi',
        title: 'Mercure Hotel',
        cost: '123 USD per night',
        description: 'Bed and breakfast',
        imaage: 'img/hotels/mercure-1.jpeg'
    },
    {
        location: 'Upperhill, Nairobi',
        title: 'Radisson Blu Hotel',
        cost: '123 USD per night',
        description: 'Bed and breakfast',
        imaage: 'img/hotels/radisson-blu.webp'
    },
    {
        location: 'Upperhill, Nairobi',
        title: 'Eka Hotel',
        cost: '123 USD per night',
        description: 'Bed and breakfast',
        imaage: 'img/hotels/eka-hotel.jpeg'
    },
    {
        location: 'Westlands, Nairobi',
        title: 'Ibis styles Hotel',
        cost: '123 USD per night',
        description: 'Bed and breakfast',
        imaage: 'img/hotels/ibis-styles.jpeg'
    }
]
const Professional = () => {
  return (
    <>
      <header>
        <div class="header_top_area type-two">
          <TopBar />
        </div>
        <div class="header-fixed header-two">
          <MenuBar />
        </div>
      </header>
      <section class="same-section-spacing bg-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-box">
                <h2>Travel Support & Tour Options for Delegates</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Travel Support & Tour Options for Delegates
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ws-section-spacing about-three">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="img-wapper">
                <img src="img/mice.jpeg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <h2>We make the best for all our customers.</h2>
                <p>
                  We are thrilled to offer comprehensive travel support and tour
                  options to ensure that your stay in Kenya is both memorable
                  and comfortable. We understand that delegates arriving from
                  various parts of Africa for the 7th Annual Meeting for
                  ID4Africa have different travel needs, and we are committed to
                  providing customized solutions to meet those needs. Our team
                  is dedicated to providing reliable and efficient ground
                  transportation services, including airport transfers, to
                  ensure that you arrive at your destination comfortably and on
                  time. We also offer hotel reservation services to assist you
                  in finding suitable accommodation in Nairobi during the
                  conference period. Our Nairobi City Tour and Safari Tour
                  options are designed to showcase the best of Kenya's
                  attractions, including the Nairobi National Park, David
                  Sheldrick Elephant Orphanage, Giraffe Center, and Masai Mara
                  National Reserve. We guarantee an enjoyable and seamless
                  experience that will leave you with unforgettable memories of
                  Kenya.
                </p>
                <p>
                  We understand that some delegates may wish to extend their
                  stay in Kenya and explore more of what the country has to
                  offer. As such, we have a team of experienced and
                  knowledgeable travel agents who can offer personalized tour
                  options tailored to your interests and preferences. We are
                  committed to providing safe and enjoyable experiences that
                  meet your needs and exceed your expectations. Our team is
                  available around the clock to assist you with any
                  travel-related needs or inquiries during your stay in Kenya.
                  We guarantee a hassle-free and memorable experience that will
                  make your stay in Kenya a truly unforgettable one.
                </p>
                <ul class="about-listing">
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Ensure that your stay in
                    Kenya is both memorable and comfortable.
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Provide reliable and
                    efficient ground transportation services. As well as assist
                    you in finding suitable accommodation
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Whether you are
                    interested in cultural tours, adventure tours, beach
                    holidays, or other activities, we have got you covered.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section id="packages" class="ws-section-spacing bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-title ">
                        <h2 class="title">Best places to stay</h2>
                        <h4 class="sub-title">Our tours are designed to help you discover the beauty of the world,
                             whether it's through breathtaking landscapes or fascinating cultures.</h4>
                    </div>
                </div>
            </div>
            
            <div class="row small-package-list">
            {hotels.map((item,index)=>(
                <div key={index} class="col-lg-6 col-md-6 col-sm-12">
                <div class="single_package">
                    <div class="media">
                        <img src={item.imaage} alt=""/>
                        <div class="media-body">
                            <span class="direction"><i class="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt}/></i> {item.location} </span>
                            <h3><a href="/">{item.title}</a></h3>
                            <div class="duration">
                                <ul>
                                    
                                    <li>
                                        <p> <i class="fas fa-tags"><FontAwesomeIcon icon={faTags}/></i> From</p>
                                        <h5>{item.cost}</h5>
                                    </li>
                                </ul>
                            </div>
                            <p>{item.description}</p>
                            <Link to="/contact-us" class="btn-packlist"> Book now</Link>
                        </div>
                    </div>
                </div>
            </div>
            ))}
               
            </div>
        </div>
    </section>
        </div>
      </section>
      <section class="service-one ws-section-spacing ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="center-title ">
                <h2 class="title">Why Choose Us</h2>
                <h4 class="sub-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim veniam.
                </h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <img src="img/meeting.jpg" alt="about-2" />
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
                                <h3 class="service-box-title">Accomodation</h3>
                                <p class="service-box-desc">We will work within your budget to get you a safe and comfortable location to stay at.
                                Whether you would prefer a hotel or Airbnb.</p>
                                
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="servicebox-one service-type-two">
                                <div class="service-box-icon"><i class="fas fa-ticket-alt"><FontAwesomeIcon icon={faTicket}/></i></div>
                                <h3 class="service-box-title">Travel Insurance</h3>
                                <p class="service-box-desc">Comprehensive travel insurance that covers unexpected events such as trip cancellations, medical emergencies and lost luggage giving you peace of 
                                    mind and protection while you travel. </p>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
          </div>
        </div>
      </section>
      <section class="ws-section-spacing bg-gray">
        <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <div class="center-title ">
                        <h2 class="title">Top picks</h2>
                        <h4 class="sub-title">Our tours are designed to help you discover the beauty of the world,
                             whether it's through breathtaking landscapes or fascinating cultures.</h4>
                    </div>
                </div>
            </div>
          <div class="row masonry-item">
            {packages.slice(0,6).map((item,i)=> (
                <div class="col-lg-4 col-md-6 col-sm-12 masonry">
                <div class="package-one">
                  <div class="img-wapper">
                    <img src={item.Img} alt="package-img" />
                  </div>
                  <div style={{padding:'25px 20px 60px'}} class="package-content">
                    <h3>
                      <Link to={`/domestic-tours/${item.Id}`}>{item.Title}</Link>
                    </h3>
                    <p>
                    <FontAwesomeIcon icon={faClock}/>&nbsp; {item.Duration}  
                    </p>
                    <ul style={{paddingLeft:'0px'}} class="ct-action">
                      <li>
                        <a href="/" class="booking-btn">
                          Book Now
                        </a>
                      </li>
                      <li><FontAwesomeIcon icon={faTags}/>&nbsp; <span>{item["Cost approximation"]}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="ws-section-spacing blog-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-title ">
                        <h2 class="title">Travel guide and Expert Advice</h2>
                        <h4 class="sub-title">A few tips and tricks to consider while in Nairobi</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="package-one blog-box">
                        <div class="img-wapper">
                            <img src="img/hotels/bnb-1.jpg" alt="package-img"/>
                        </div>
                        <div class="package-content">
                            <h3><Link to="/guide-details">Consider staying at an Airbnb.</Link></h3>
                            <ul style={{ paddingLeft:'0px' }} class="meta-tag">
                                <li><FontAwesomeIcon icon={faBed}/>&nbsp;Furnished home in Thome</li>
                                <li><FontAwesomeIcon icon={faTags}/>&nbsp;$100</li>
                            </ul>
                            <p>Consider staying at an apartment with your family or group of friends.
                                For a peaceful stay in a surbub or in the buzzing city.
                                Breakfast can be provided on request.(at an extra cost)
                            </p>
                            <p href="#" class="read-btn">Read More <FontAwesomeIcon icon={faAngleDoubleRight}/> </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="package-one blog-box">
                        <div class="img-wapper">
                            <img src="img/hotels/carnivore.jpeg" alt="package-img"/>
                        </div>
                        <div class="package-content">
                            <h3>Sample local cuisine.</h3>
                            <ul style={{ paddingLeft:'0px' }} class="meta-tag">
                                <li><FontAwesomeIcon icon={faCutlery}/>&nbsp;Carnivore Nairobi</li>
                                
                            </ul>
                            <p>Erat erat ea amet et amet et lorem at labore invidunt, aliquyam gubergren duo duo dolor
                                ipsum invidunt aliquyam diam.</p>
                            <a href="/" class="read-btn">Read More <FontAwesomeIcon icon={faAngleDoubleRight}/></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="package-one blog-box">
                        <div class="img-wapper">
                            <img src="img/hotels/nairobi-night.jpeg" alt="package-img"/>
                        </div>
                        <div class="package-content">
                            <h3><a href="blog-details.html">Enjoy the night life.</a></h3>
                            <ul style={{ paddingLeft:'0px' }} class="meta-tag">
                                <li><FontAwesomeIcon icon={faCutlery}/>&nbsp;Jhon Doe</li>
                            </ul>
                            <p>Nairobi is known for its bustling nightlife, which offers a diverse range of entertainment options to cater to every taste and preference. From lively nightclubs to cozy bars and restaurants, 
                                Nairobi has something for everyone.</p>
                            <Link to="/guide-details">Read More <FontAwesomeIcon icon={faAngleDoubleRight}/></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <Partners />
      <Footer />
    </>
  );
};

export default Professional;
