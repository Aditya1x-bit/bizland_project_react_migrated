import React from 'react'
import './PortDetails.css'
function PortDetails() {
  return (
    <>
        <section id="portfolio-details-title" className="bg-light py-4">
            <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index-bizland_bootstrap_template.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Portfolio Details</li>
                    </ol>
            </div>
        </section>

        <section id="portfolio-details-body" className="my-5">
            <div className="container py-2">
                <div className="row gy-4">
                
                    <div className="col-lg-8">
                        <div id="portfolio-carousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators"> 
                              <button type="button" data-bs-target="#portfolio-carousel" data-bs-slide-to="0" className="active"></button>
                              <button type="button" data-bs-target="#portfolio-carousel" data-bs-slide-to="1"></button>
                              <button type="button" data-bs-target="#portfolio-carousel" data-bs-slide-to="2"></button>
                              <button type="button" data-bs-target="#portfolio-carousel" data-bs-slide-to="3"></button>
                            </div>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src="./media/images/app-1.jpg" className="d-block w-100" alt=""/>
                              </div>
                              <div className="carousel-item">
                                <img src="./media/images/product-1.jpg" className="d-block w-100" alt=""/>
                              </div>
                              <div className="carousel-item">
                                <img src="./media/images/branding-1.jpg" className="d-block w-100" alt=""/>
                              </div>
                              <div className="carousel-item">
                                <img src="./media/images/books-1.jpg" className="d-block w-100" alt=""/>
                              </div>
                            </div>
                        </div> 
                    </div>
                   

                    <div className="col-lg-4">
                      <div className="p-info">
                        <h3>Project information</h3>
                        <hr />
                        <ul className="text-body-secondary">
                          <li className="mt-2"><strong>Category</strong>: Web design</li>
                          <li className="mt-2"><strong>Client</strong>: ASU Company</li>
                          <li className="mt-2"><strong>Project date</strong>: 01 March, 2020</li>
                          <li className="mt-2"><strong>Project URL</strong>: <a href="/" className="text-decoration-none">www.example.com</a></li>
                        </ul>
                      </div>
                      <div className="mt-3">
                        <h2 className="fs-4 fw-bold" style={{marginBottom: "20px"}}>Exercitationem repudiandae officiis neque suscipit</h2>
                        <p className="text-body-secondary">
                          Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PortDetails
