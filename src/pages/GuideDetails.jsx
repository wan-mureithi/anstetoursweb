import React from "react";
import MenuBar from "../components/MenuBar";
import TopBar from "../components/TopBar";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const GuideDetails = () => {
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
                <h2>package Details</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      package Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ws-section-spacing bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="place-details">
                <div class="wapper-img">
                  <img style={{height:'500px'}} src="img/hotels/bnb-1.jpg" alt="place" />
                </div>
                <div class="place-content">
                  <h3>AMERICA : Loss Angeles California</h3>
                  <p>
                    {" "}
                    we are excited to offer you an alternative to staying at a
                    hotel during your visit to Kenya. We understand that some
                    customers may prefer more space, privacy, and flexibility
                    when it comes to accommodation, which is why we have a
                    beautiful three-bedroom apartment in the suburb of Thome.
                    The apartment is fully furnished and equipped with modern
                    amenities, including a fully equipped kitchen, spacious
                    living room, and comfortable bedrooms with cozy beds and
                    ample storage space. The apartment is ideal for families,
                    groups of friends, or individuals who want to experience the
                    local lifestyle and culture in a comfortable and convenient
                    setting.
                  </p>
                  <p>
                    Located in the serene suburb of Thome, the apartment offers
                    a tranquil and relaxing environment away from the hustle and
                    bustle of the city. The apartment is strategically located
                    with easy access to various amenities, including
                    supermarkets, restaurants, banks, and hospitals. The
                    apartment is also conveniently located near public
                    transport, making it easy to explore the city and its
                    attractions. Whether you are in Nairobi for business or
                    leisure, our three-bedroom apartment in Thome is a perfect
                    choice for those seeking a comfortable and affordable
                    alternative to staying at a hotel. We guarantee a memorable
                    and enjoyable experience that will make you feel at home
                    away from home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="servicebox-one ">
                <img src="img/hotels/bnb-6.jpg" alt="bnb" />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="servicebox-one ">
                <img src="img/hotels/bnb-2.jpg" alt="bnb" />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="servicebox-one ">
                <img src="img/hotels/bnb-3.jpg" alt="bnb" />
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

export default GuideDetails;
