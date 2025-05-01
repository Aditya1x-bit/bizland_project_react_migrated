import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <>
        <div id="testimonial-carousel" class="carousel slide testimonial" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="0" class="active btn-test rounded-circle"></button>
                 <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="1" class="btn-test rounded-circle"></button>
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="2" class="btn-test rounded-circle"></button>
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="3" class="btn-test rounded-circle"></button>
                <button type="button" data-bs-target="#testimonial-carousel" data-bs-slide-to="4" class="btn-test rounded-circle"></button>
            </div>
            <div class="carousel-inner w-100 test-bg">
                <div class="carousel-item active">
                    <div class="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                        <img src="./media/images/testimonials-1.jpg" alt="testimonials-1" class="rounded-circle img-test" width="100"/>
                        <h5 class="card-title">Saul Goodman</h5>
                        <h6 class="card-subtitle text-secondary">CEO & Founder</h6>
                        <br />
                        <div class="ratings">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <br />
                        <p class="test-text">
                        <i class="bi bi-quote quote-icon-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita rerum fuga hic, architecto facilis recusandae facere magni dolorem nulla harum ullam qui ducimus mollitia.<i class="bi bi-quote quote-icon-right"></i>
                        </p>
                    </div>
                 </div>
            <div class="carousel-item">
                <div class="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-2.jpg" alt="testimonials-2" class="rounded-circle img-test" width="100"/>
                    <h5 class="card-title">Sara Wilson</h5>
                    <h6 class="card-subtitle text-secondary">Designer</h6>
                    <br />
                    <div class="ratings">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p class="test-text">
                    <i class="bi bi-quote quote-icon-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eveniet eos deleniti vitae enim aliquid voluptas provident necessitatibus? Repellendus aspernatur, excepturi est nobis sint ad?<i class="bi bi-quote quote-icon-right"></i>
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-3.jpg" alt="testimonials-3" class="rounded-circle img-test" width="100"/>
                    <h5 class="card-title">Jena Karlis</h5>
                    <h6 class="card-subtitle text-secondary">Store Owner</h6>
                    <br />
                    <div class="ratings">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p class="test-text">
                    <i class="bi bi-quote quote-icon-left"></i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatibus quos, aliquid dicta odio voluptates esse et debitis, facere, tenetur alias atque id tempora? Aperiam.<i class="bi bi-quote quote-icon-right"></i>
                    </p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-4.jpg" alt="testimonials-4" class="rounded-circle img-test" width="100" />
                    <h5 class="card-title">Matt Brandon</h5>
                    <h6 class="card-subtitle text-secondary">Freelancer</h6>
                    <br />
                    <div class="ratings">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p class="test-text">
                    <i class="bi bi-quote quote-icon-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam voluptatum quod. Neque iure assumenda corporis non, tempore quos, eius atque vel minima, inventore ut?<i class="bi bi-quote quote-icon-right"></i></p>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card p-3 text-center px-4 bg-transparent align-items-center text-bg-dark">
                    <img src="./media/images/testimonials-5.jpg" alt="testimonials-5" class="rounded-circle img-test" width="100"/>
                    <h5 class="card-title">John Larson</h5>
                    <h6 class="card-subtitle text-secondary">Entrepreneur</h6>
                    <br />
                    <div class="ratings">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <br />
                    <p class="test-text">
                    <i class="bi bi-quote quote-icon-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsam adipisci tempore nobis minus aliquam incidunt. Asperiores officia cumque atque. In iure quas quam. Aliquid?<i class="bi bi-quote quote-icon-right"></i>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials
