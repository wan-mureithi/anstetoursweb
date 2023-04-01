import React from 'react'
import MenuBar from '../components/MenuBar'
import TopBar from '../components/TopBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import pack2 from "../images/hot-2.jpg"
import place from "../images/place.jpg"
import travel from "../images/travel.jpg"
import Footer from '../components/Footer'

const PackageDetails = () => {
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
                            <img src={place} class="img-fluid" alt="det-img"/>
                            <div class="package-list-content">
                                <p class="package-list-duration">3Days, 4 NIghts Start From <span
                                        class="rate">$350</span>
                                </p>
                                <h3 class="package-list-title">
                                    <a href="/">Four Seasons America</a>
                                </h3>
                                <a class="package-list-button" href="/">Book Now</a>
                            </div>
                            <span class="off-box">OFF 40%</span>
                        </div>
                        <div class="col-lg-12">
                            <div class="package-info">
                                <p>Sed et rebum et et est eirmod diam. Sanctus et takimata tempor eos, takimata duo kasd
                                    amet
                                    voluptua ipsum amet dolor dolor et. Lorem at takimata eos no et consetetur, amet et
                                    accusam
                                    est diam dolore stet ea invidunt. Eos et accusam no ut amet tempor ut labore.
                                    Dolores
                                    clita
                                    kasd gubergren ate ipsum amet sea ipsum. Justo dolores dolores est magna sit eos
                                    justo
                                    dolore, ipsum sadipscing rebum lorem elitr, et no eos aliquyam gubergren set at
                                    magna,
                                    ipsum at sadipscing at consetetur vero ipsum lorem dolores, et et justo ipsum amet
                                    rebum lorem ut sadipscing, magna eirmod sanctus.</p>
                                <p>Nonumy est ut voluptua kasd justo sit. Voluptua est consetetur et amet no ipsum
                                    takimata
                                    sit.
                                    Voluptua nonumy diam sit clita. Sea dolor amet sit ut voluptua takimata, labore kasd
                                    elitr
                                    sadipscing consetetur aliquyam dolore lorem amet ipsum, lorem aliquyam gubergren ea
                                    nonumy
                                    duo sit nonumy amet dolor. Ut amet ea ea dolores gubergren eirmod aliquyam. Ea ipsum
                                    diam no
                                    elitr accusam clita lorem diam at. </p>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-lg-5">
                                <div class="hotel-diss">
                                    <h4>HOTELS TO STAY</h4>
                                    <h3>Loss Angeles California hotel</h3>
                                    <p>Travel quia tempore, ex delectus rerum option's sapiente, magnam ptate reiciendis
                                        eligendi cupiditate optimal.</p>
                                    <div class="rating">
                                        <span class="fa fa-star"><FontAwesomeIcon icon={faStar}/></span>
                                        <span class="fa fa-star"><FontAwesomeIcon icon={faStar}/></span>
                                        <span class="fa fa-star"><FontAwesomeIcon icon={faStar}/></span>
                                        <span class="fa fa-star-half-empty"><FontAwesomeIcon icon={faStarHalf}/></span>
                                        <span class="fa  fa-star-o"></span>
                                        <span>(3 Ratings)</span>
                                    </div>
                                    <a class="map-viw" href="/"><i class="fa fa-map-marker"></i> View on Map</a>
                                    <a href="/contact-us" class="h-book">Booking Now</a>
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