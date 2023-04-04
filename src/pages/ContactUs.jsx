import React,{useState} from 'react'
import TopBar from '../components/TopBar';
import MenuBar from '../components/MenuBar';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const initialUserInfo = {
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
    comment: ''
}
const ContactUs = () => {
const [userMessage, setUserMessage] = useState(initialUserInfo);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userMessage)
}
const handleFormInput = (e) => {
    const value = e.target.name;
   setUserMessage({[value]:e.target.value})
    
}
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
    {/* banner */}
    <section class="same-section-spacing bg-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-box">
                        <h2>Contact Us</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="same-section-spacing contact-two-page">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-5 col-md-12">
                    <div class="contact-info-two">
                        <h3 class="title-left">Contact Info</h3>
                        <ul>
                            <li>
                                <h4>Address</h4>
                                <p>Nairobi, Kenya Stream Dive, SD 79</p>
                            </li>
                            <li>
                                <h4>Mobile</h4>
                                <p>+254 777 991597</p>
                            </li>
                            <li>
                                <h4>Email</h4>
                                <p>anstetours@anstegroup.com</p>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="col-lg-7 col-md-12">
                    <h3 class="title-left">Book with Us</h3>
                    <form class="contact-form">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" value={userMessage.name} onChange={handleFormInput} class="form-control" placeholder="Name" name="name"
                                        required />
                                </div>

                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="email" value={userMessage.email} onChange={handleFormInput}  class="form-control" placeholder="Email"
                                        name="email" required />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" value={userMessage.subject} onChange={handleFormInput}  class="form-control" placeholder="Subject" name="subject"
                                        required/>
                                </div>

                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" value={userMessage.phoneNumber} onChange={handleFormInput}  class="form-control" id="pwd" placeholder="Phone"
                                        name="phone"/>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <textarea value={userMessage.comment} onChange={handleFormInput}  class="form-control" rows="5" name="comment"
                                    placeholder="Your Comment"></textarea>
                            </div>
                        </div>

                        <button type="submit" onClick={handleSubmit} class="btn-1">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Partners/>
    <Footer/>
    </>
  )
}

export default ContactUs