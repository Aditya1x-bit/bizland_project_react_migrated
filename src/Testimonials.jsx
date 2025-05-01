import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <>
        <div id="testimonial-carousel" className="carousel slide testimonial" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="0" className="active btn-test rounded-circle"></button>
                 <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="1" className="btn-test rounded-circle"></button>
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="2" className="btn-test rounded-circle"></button>
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="3" className="btn-test rounded-circle"></button>
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="4" className="btn-test rounded-circle"></button>
            </div>
            <div className="carousel-inner w-100 test-bg">
                <div className="carousel-item active">
                    <div className="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                        <img src="./media/images/testimonials-1.jpg" alt="testimonials-1" className="rounded-circle img-test" width="100"/>
                        <h5 className="card-title">Saul Goodman</h5>
                        <h6 className="card-subtitle text-secondary">CEO & Founder</h6>
                        <br />
                        <div className="ratings">
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <br />
                        <p className="test-text">
                        <i className="bi bi-quote quote-icon-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita rerum fuga hic, architecto facilis recusandae facere magni dolorem nulla harum ullam qui ducimus mollitia.<i className="bi bi-quote quote-icon-right"></i>
                        </p>
                    </div>
                 </div>
            <div className="carousel-item">
                <div className="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-2.jpg" alt="testimonials-2" className="rounded-circle img-test" width="100"/>
                    <h5 className="card-title">Sara Wilson</h5>
                    <h6 className="card-subtitle text-secondary">Designer</h6>
                    <br />
                    <div className="ratings">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p className="test-text">
                    <i className="bi bi-quote quote-icon-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eveniet eos deleniti vitae enim aliquid voluptas provident necessitatibus? Repellendus aspernatur, excepturi est nobis sint ad?<i className="bi bi-quote quote-icon-right"></i>
                    </p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-3.jpg" alt="testimonials-3" className="rounded-circle img-test" width="100"/>
                    <h5 className="card-title">Jena Karlis</h5>
                    <h6 className="card-subtitle text-secondary">Store Owner</h6>
                    <br />
                    <div className="ratings">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p className="test-text">
                    <i className="bi bi-quote quote-icon-left"></i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatibus quos, aliquid dicta odio voluptates esse et debitis, facere, tenetur alias atque id tempora? Aperiam.<i className="bi bi-quote quote-icon-right"></i>
                    </p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-4.jpg" alt="testimonials-4" className="rounded-circle img-test" width="100" />
                    <h5 className="card-title">Matt Brandon</h5>
                    <h6 className="card-subtitle text-secondary">Freelancer</h6>
                    <br />
                    <div className="ratings">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p className="test-text">
                    <i className="bi bi-quote quote-icon-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam voluptatum quod. Neque iure assumenda corporis non, tempore quos, eius atque vel minima, inventore ut?<i className="bi bi-quote quote-icon-right"></i></p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-5.jpg" alt="testimonials-5" className="rounded-circle img-test" width="100"/>
                    <h5 className="card-title">John Larson</h5>
                    <h6 className="card-subtitle text-secondary">Entrepreneur</h6>
                    <br />
                    <div className="ratings">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p className="test-text">
                    <i className="bi bi-quote quote-icon-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsam adipisci tempore nobis minus aliquam incidunt. Asperiores officia cumque atque. In iure quas quam. Aliquid?<i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials
