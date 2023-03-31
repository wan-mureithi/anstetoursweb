import React from 'react'

const Footer = () => {
  return (
    <>
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

export default Footer