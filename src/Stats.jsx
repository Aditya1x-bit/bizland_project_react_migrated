import React from 'react'
import './Stats.css'
import { useEffect } from 'react'



function Stats() {

  
    useEffect(() => {
        const items = document.querySelectorAll("#clientCarousel.carousel .carousel-item");
        const minPerSlide = 6;
        
        items.forEach((el) => {
          let next = el.nextElementSibling;
          for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
              // Wrap carousel by using first child
              next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
          }
        });
    },)
  return (
    <>
        <section id="stats" className="justify-content-center ms-5">
            <div className="container py-5 text-center">
                <div className="row g-4">
                    <div className="col-md-3 col-sm-6">
                        <div className="position-relative w-100">
                            <i className="bi bi-emoji-smile icon-beautify-blue"></i>
                            <div className="d-flex flex-column justify-content-center bg-primary py-4 w-100 opaq-bg">
                                <div className="fw-bold fs-1 text-dark-emphasis mt-3">232</div>
                                <p className="mb-0 text-muted fst-normal fs-5">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="position-relative w-100">
                            <i className="bi bi-journal-richtext icon-beautify-blue"></i>
                            <div className="d-flex flex-column justify-content-center bg-primary py-4 w-100 opaq-bg">
                                <div className="fw-bold fs-1 text-dark-emphasis mt-3">521</div>
                                <p className="mb-0 text-muted fst-normal fs-5">Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="position-relative w-100">
                            <i className="bi bi-headset icon-beautify-blue"></i>
                            <div className="d-flex flex-column justify-content-center bg-primary py-4 w-100 opaq-bg">
                                <div className="fw-bold fs-1 text-dark-emphasis mt-3">1463</div>
                                <p className="mb-0 text-muted fst-normal fs-5">Hours Of Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="position-relative w-100">
                            <i className="bi bi-people icon-beautify-blue"></i>
                            <div className="d-flex flex-column justify-content-center bg-primary py-4 w-100 opaq-bg">
                                <div className="fw-bold fs-1 text-dark-emphasis mt-3">15</div>
                                <p className="mb-0 text-muted fst-normal fs-5">Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center my-3 m-0 bg-primary opaq-bg">
                <div className="row mx-auto my-auto justify-content-center">
                    <div id="clientCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            {/* Slide 1  */}
                            <div className="carousel-item active">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-1.png" alt="myob"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-2.png" alt="Belimo"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 3  */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-3.png" alt="LifeGroups"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 4 */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-4.png" alt="Grabyo"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 5 */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-5.png" alt="Citrus"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 6 */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-6.png" alt="Trustly"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 7 */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-7.png" alt="Oldendorff"/>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 8 */}
                            <div className="carousel-item">
                                <div className="col-md-2">
                                    <div className="card border-0 bg-transparent">
                                        <img className="client-logo img-fluid" src="./media/images/client-8.png" alt="Lilly"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Stats
