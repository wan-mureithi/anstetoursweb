import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTags,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'
import Partners from '../components/Partners'
import TopBar from '../components/TopBar'
import { packages } from '../data/packages'
import { Link } from 'react-router-dom'


const PackageList = () => {
  return (
    <>
    <header>
        <div class="header_top_area type-two">
        <TopBar/>
        </div>
        <div class="header-fixed header-two">
            <MenuBar/>
        </div>
        </header> 
        <section class="same-section-spacing bg-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-box">
                        <h2>Tour Packages</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Tour Packages</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ws-section-spacing bg-gray package-list">
        <div class="container">
            <div class="row">
                { packages.map((item,index)=> (
                    <div key={index} class="col-lg-12 col-md-6 col-sm-12">
                    <div class="single_package">
                        <div class="media">
                            <img src="img/packages/tour1.JPG" alt=""/>
                            <div class="media-body">
                                <span class="direction"><i class="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt} /></i>&nbsp;{item.location}</span>
                                <h3><Link to="/domestic-tours-2">Thrilling experience in capetown</Link></h3>
                                <p>Stay at affordable hotels in Capetown and get to experience once in a lifetime activities like paragliding</p>
                                <div class="duration">
                                    <ul>
                                        <li>
                                            <p> <i class="far fa-clock"><FontAwesomeIcon icon={faClock} /></i> Duration</p>
                                            <h5>{item.duration}</h5>
                                        </li>
                                        <li>
                                            <p> <i class="fas fa-tags"><FontAwesomeIcon icon={faTags} /></i> From</p>
                                            <h5>KES 200,000</h5>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="contact-us.html" class="btn-packlist">Book now</a>
                            </div>
                        </div>
                    </div>
                </div>
                )) }
                
            </div>
        </div>
    </section>
    <Partners/>
    <Footer/>
    </>
  )
}

export default PackageList