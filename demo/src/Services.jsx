import React from 'react'
import { NavLink } from 'react-router-dom'
import './Services.css'
import Testimonials from './Testimonials'

function Services() {
  return (
    <>
      <section id="services" className="d-flex justify-content-center">
      <div className="container text-center">
        <br />
        <br />
        <h5 className="text-center my-2">
          <span className="badge rounded-pill bg-primary-subtle text-primary py-2 px-3 fw-semibold">SERVICES</span>
        </h5>
        <h2 className="text-center mt-2 mb-5">
          <strong>Check Our <span className="text-primary">Services</span></strong>
        </h2>

        <br />
        <div className="row mb-4">
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="card-link-1">
              <div className="card">
                <i className="bi bi-activity i_serv card-top text-center align-self-center"></i>
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text text-decoration-none">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="card-link-1">
              <div className="card">
                <i className="bi bi-broadcast i_serv card-top text-center align-self-center"></i>
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text text-decoration-none">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="card-link-1">
              <div className="card">
                <i className="bi bi-easel i_serv card-top text-center align-self-center"></i>
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text text-decoration-none">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="card-link-1">
              <div className="card">
                <i className="bi bi-bounding-box-circles i_serv card-top text-center align-self-center"></i>
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text text-decoration-none">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="card-link-1">
              <div className="card">
                <i className="bi bi-calendar-week i_serv card-top text-center align-self-center"></i>
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text text-decoration-none">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="card-link-1">
              <div className="card">
                <i className="bi bi-chat-square-text i_serv card-top text-center align-self-center"></i>
                <div className="card-body">
                  <h3 className="card-title">Card title</h3>
                  <p className="card-text text-decoration-none">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    <Testimonials/>
    </>
  )
}

export default Services
