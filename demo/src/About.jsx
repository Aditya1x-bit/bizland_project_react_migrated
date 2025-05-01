import React from 'react'
import './About.css'
import Skills from './Skills'
import Stats from './Stats'

function About() {
  return (
    <>
        <section id="about" className="d-flex justify-content-center bg-light">
            <div className="container">
                <h4 className="text-center my-3">
                <span className="badge rounded-pill bg-primary-subtle text-primary p-3">About</span>
                </h4>
                <h2 className="text-center mt-2 mb-5">
                <strong>Find Out More <span className="text-primary">About Us</span></strong>
                </h2>
                <div className="row mb-5">
                <div className="col-6">
                    <img className="img-fluid m-2" src="./media/images/about.jpg" alt="about-image"/>
                </div>
                <div className="col-6">
                    <div className="ms-4 my-5">
                        <h3 className="pt-4">Vero, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <blockquote className="blockquote mb-0 fs-6">
                        <i>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus nostrum qui quisquam odit a nisi id iusto, soluta
                        voluptatibus totam.</i>
                        </blockquote>
                        <br /><br />
                        <div className="d-inline-flex">
                            <i className="bi bi-diagram-3 text-primary bg-white icon-beautify"></i>
                            <div>
                                <b className="fs-5">Lorem ipsum dolor sit amet consectetur.</b>
                                <blockquote className="blockquote mb-0 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem accusamus?</blockquote>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="d-inline-flex">
                            <i className="bi bi-fullscreen-exit text-primary bg-white icon-beautify"></i>
                            <div>
                                <b className="fs-5">Lorem ipsum dolor sit amet consectetur.</b>
                                <blockquote className="blockquote mb-0 fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, esse. At!</blockquote>
                            </div>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed architecto,mollitia aliquid et error saepe perferendis beatae. Architecto numquam obcaecati exercitationem veniam corporis. Distinctio id laborum numquam tenetur nostrum minima possimus eaque doloremque</p>
                    </div>
                </div>
            </div>
        </section> 
        <Skills/>
        <Stats/>
    </>
  )
}

export default About
