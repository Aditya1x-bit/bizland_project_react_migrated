import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                            <form action="forms/newsletter.php" method="post" className="php-email-form">
                                <div className="newsletter-form">
                                    <input type="email" name="email"/>
                                    <input type="submit" value="Subscribe"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        <div className="container footer-top">
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6 footer-about">
                    <a href="/" className="d-flex align-items-center">
                        <span className="sitename">BizLand</span>
                    </a>
                    <div className="footer-contact pt-3">
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                    <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
            </div>
    
            <div className="col-lg-2 col-md-3 footer-links">
                <ul>
                <h4>Useful Links</h4>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/home">Home</NavLink></li>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/about">About us</NavLink></li>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/services">Services</NavLink></li>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/">Terms of service</NavLink></li>
                </ul>
            </div>
    
            <div className="col-lg-2 col-md-3 footer-links">
                <ul>
                <h4>Our Services</h4>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/">Web Design</NavLink></li>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/">Web Development</NavLink></li>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/">Product Management</NavLink></li>
                <li><i className="bi bi-chevron-right"></i> <NavLink to="/">Marketing</NavLink></li>
                </ul>
            </div>
    
            <div className="col-lg-4 col-md-12">
                <h4>Follow Us</h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className="social-links d-flex">
                <NavLink to="/"><i className="bi bi-twitter-x"></i></NavLink>
                <NavLink to="/"><i className="bi bi-facebook"></i></NavLink>
                <NavLink to="/"><i className="bi bi-instagram"></i></NavLink>
                <NavLink to="/"><i className="bi bi-linkedin"></i></NavLink>
                </div>
            </div>
    
            </div>
        </div>

        <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">BizLand</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
        </footer>

        {/* Scroll Top */}
        <NavLink to="/" id="scroll-top" className="btn btn-primary position-fixed bottom-0 end-0 m-3"><i className="bi bi-arrow-up-short fs-4 lh-sm"></i></NavLink>
    </>
  )
}

export default Footer
