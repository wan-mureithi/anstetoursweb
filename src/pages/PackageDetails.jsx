import React from 'react'
import MenuBar from '../components/MenuBar'
import TopBar from '../components/TopBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import pack2 from "../images/hot-2.jpg"
import travel from "../images/travel.jpg"
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import packages  from '../data/packages2.json'

const PackageDetails = () => {
    const {id} = useParams();
    const packageItem = packages.find((item)=>item.Id === id)
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
                        <h2>package Details</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">package Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ws-section-spacing bg-gray ">
        <div class="container">

            <div class="row masonry-item">
                <div class="col-lg-12 col-md-12 col-sm-12 masonry">
                    <div class="package-detail">
                        <div class="package-list-wrap ">
                            <img src={`/${packageItem.Img}`} class="img-fluid" alt="det-img"/>
                            <div class="package-list-content">
                                <p class="package-list-duration">{packageItem.Duration} From <span
                                        class="rate">{packageItem['Cost approximation']}</span>
                                </p>
                                <h3 class="package-list-title">
                                    <a href="/">{packageItem.Title}</a>
                                </h3>
                                <Link class="package-list-button" to="/contact-us">Book Now</Link>
                            </div>
                            {/* <span class="off-box">OFF 40%</span> */}
                        </div>
                        <div class="col-lg-12">
                            <div class="package-info">
                            <p>{packageItem['Short description']} </p>
                                <p>{packageItem['Long description']}</p>
                                
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-lg-5">
                                <div class="hotel-diss">
                                    <h4>HOTELS TO STAY</h4>
                                    {/* <h3>Loss Angeles California hotel</h3> */}
                                    <p>{packageItem.Hotels}</p>
                                    <div class="rating">
                                        <span class="fa fa-star"><FontAwesomeIcon icon={faStar}/></span>
                                        <span class="fa fa-star"><FontAwesomeIcon icon={faStar}/></span>
                                        <span class="fa fa-star"><FontAwesomeIcon icon={faStar}/></span>
                                        <span class="fa fa-star-half-empty"><FontAwesomeIcon icon={faStarHalf}/></span>
                                        <span class="fa  fa-star-o"></span>
                                        <span>(3 Ratings)</span>
                                    </div>
                                    <Link to='/contact-us' class="h-book">Booking Now</Link>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 ">
                                        <div class="hotel-pics-one">
                                            <img src={pack2} alt="pack-1"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="hotel-pics-two">
                                            <img src={pack2} alt="pack-1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="other-packages">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="title">Other Packages</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="package-list-wrap ">
                            <img src={travel} class="img-fluid" alt=""/>
                            <div class="package-list-content">
                                <p class="package-list-duration">3Days, 4 NIghts Start From $350</p>
                                <h3 class="package-list-title">
                                    <a href="/">Four Seasons America</a>
                                </h3>
                                <button class="package-list-button" >Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <Footer/>
    </>
  )
}

export default PackageDetails