import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  return (
    <>
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
    </>
  )
}

export default TopBar