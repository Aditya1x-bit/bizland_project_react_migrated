import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pricing.css'

function Pricing() {
  return (
    <section id="pricing" className="justify-content-center">
      <br />
      <br />
      <h5 className="text-center my-2">
        <span className="badge rounded-pill bg-primary-subtle text-primary py-2 px-3 fw-semibold">PRICING</span>
      </h5>
      <h2 className="text-center mt-2 mb-5">
        <strong>Check Our <span className="text-primary">Pricing</span></strong>
      </h2>
      <br />
      <div className="container text-center">
        <div className="row gy-3">
          <div className="col-xl-3 col-lg-6 pricing-item">
            <div className="card">
              <div className="card-header text-secondary">
                <h3>Free</h3>
              </div>
              <div className="card-body">
                <h4><sup>$</sup>0<span> / month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
              </div>
              <div className="card-footer">
                <NavLink to="/" className="btn btn-primary px-4 my-2">Buy Now</NavLink>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 pricing-item">
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Bussiness</h3>
              </div>
              <div className="card-body">
                <h4><sup>$</sup>19<span> / month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
              </div>
              <div className="card-footer">
                <NavLink to="/" className="btn btn-primary px-4 my-2">Buy Now</NavLink>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 pricing-item">
            <div className="card">
              <div className="card-header text-secondary">
                <h3 >Developer</h3>
              </div>
              <div className="card-body">
                <h4><sup>$</sup>29<span> / month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
              </div>
              <div className="card-footer">
                <NavLink to="/" className="btn btn-primary px-4 my-2">Buy Now</NavLink>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 pricing-item">
            <div className="card overflow-hidden">
              <div className="card-header text-secondary ">
                <span className="advanced text-bg-primary">Advanced</span>
                <h3>Ultimate</h3>
              </div>
              <div className="card-body">
                <h4><sup>$</sup>49<span> / month</span></h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
              </div>
              <div className="card-footer">
                <NavLink to="/" className="btn btn-primary px-4 my-2">Buy Now</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section> 
  )
}

export default Pricing
