import React from 'react'
import MenuBar from '../components/MenuBar'
import TopBar from '../components/TopBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import pack2 from "../images/hot-2.jpg"
import place from "../images/place.jpg"
import travel from "../images/travel.jpg"
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'

const PackageDetails = () => {
    const {id} = useParams();
    console.log(id)
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
                                <p class="package-list-duration">1 day From <span
                                        class="rate">$150</span>
                                </p>
                                <h3 class="package-list-title">
                                    <a href="/">Nairobi City Excursion</a>
                                </h3>
                                <a class="package-list-button" href="/">Book Now</a>
                            </div>
                            <span class="off-box">OFF 40%</span>
                        </div>
                        <div class="col-lg-12">
                            <div class="package-info">
                            <p>Experience three top Nairobi destinations in this day tour. 
                                    Nairobi National Park tour, Elephant orphanage tour, Giraffe center tour and Karen Blixen Museum tour. This full-day tour is a perfrect way to begin or end your East Africa safari. Search out the wild life at Nairobi National Park, on the outskirts of Nairobi. Enjoy lunch at a local restaurant then visit the Karen Blixen Museum. Stop by at the giraffe center for a close-up look at the endangered Rothschild giraffe. </p>
                                <p>You'll be picked up from your hotel after breakfast or the airport and proceed immediately to Nairobi National park for close to four hours of intensive game drives.
At 11:30 am, we head to the David Sheldrick Wildlife Trust, known as the Elephant Orphanage for your chance to have an up-close and personal interaction with these adorable orphaned elephants.
Your next stop will be the famous Giraffe Center, where you'll have the rare opportunity to come face to face with these beautiful creatures. Lucky visitors might even get a kiss from these unique creatures.
A brief stop for lunch in any of the nearby restaurants.
You'll wrap up your day with a visit to the famous Karen Blixen Museum. The museum house is in a serene environment that seems to belong to the past, surrounded by a tranquil garden and indigenous forest, with a splendid view of the Ngong Hills.
At the end of the show, you are dropped back to your hotel or airport where our services come to an end.</p>
                                
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