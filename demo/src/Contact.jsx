import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <section id="contact" className="justify-content-center">
      <h5 className="text-center my-2">
        <span
          className="badge rounded-pill bg-primary-subtle text-primary py-2 px-3 fw-semibold"
          >CONTACT</span
        >
      </h5>
      <h2 className="text-center mt-2 mb-5">
        <strong>Need Help? <span className="text-primary">Contact Us</span></strong>
      </h2>
      <br />

      <div className="container">
        <div className="row gy-4">
            <div className="col-lg-5">
                <div className="contact-wrap">
                    <div className="contact-item d-flex">
                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                            <h3>Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className="contact-item d-flex">
                        <i className="bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="contact-item d-flex">
                        <i className="bi bi-envelope flex-shrink-0"></i>
                        <div>
                            <h3>Email Us</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <iframe title='google map Downtown Conference Center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3614657903995!2d-74.0087126239744!3d40.71005857139392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sin!4v1739295074246!5m2!1sen!2sin" width="100%" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="col-lg-7">
                <form action="" className="php-email-form">
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <label for="name-field" className="pb-2">Your Name</label>
                            <input type="text" name="name" id="name-field" className="form-control" required=""/>
                        </div>
                        <div className="col-md-6">
                            <label for="email-field" className="pb-2">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email-field" required=""/>
                        </div>
                        <div className="col-md-12">
                            <label for="subject-field" className="pb-2">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
                        </div>
                        <div className="col-md-12">
                            <label for="message-field" className="pb-2">Message</label>
                            <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary rounded-pill py-2 px-4">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
