import React from 'react'
import { NavLink } from 'react-router-dom'
import './Team.css'

function Team() {
  return (
    <section id="team" className="justify-content-center bg-light">
      <br />
      <br />
      <h5 className="text-center my-2">
        <span className="badge rounded-pill bg-primary-subtle text-primary py-2 px-3 fw-semibold">TEAM</span>
      </h5>
      <h2 className="text-center mt-2 mb-5">
        <strong>Our Hardworking <span className="text-primary">Team</span></strong>
      </h2>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="carousel">
                <img src="./media/images/team-1.jpg" className="card-img-top" alt="team-1"/>
                <div className="carousel-caption w-100">
                  <NavLink to="/" className="me-3"><i className="bi bi-twitter-x text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-facebook text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-instagram text-dark"></i></NavLink>
                  <NavLink to="/" className=""><i className="bi bi-linkedin text-dark"></i></NavLink>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark-emphasis">Walter White</h5>
                <p className="card-subtitle text-secondary">Chief Executive officer</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="carousel">
                <img src="./media/images/team-2.jpg" className="card-img-top" alt="team-1"/>
                <div className="carousel-caption w-100">
                  <NavLink to="/" className="me-3"><i className="bi bi-twitter-x text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-facebook text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-instagram text-dark"></i></NavLink>
                  <NavLink to="/" className=""><i className="bi bi-linkedin text-dark"></i></NavLink>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark-emphasis">Sarah Jhonson</h5>
                <p className="card-subtitle text-secondary">Product Manager</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="carousel">
                <img src="./media/images/team-3.jpg" className="card-img-top" alt="team-1"/>
                <div className="carousel-caption w-100">
                  <NavLink to="/" className="me-3"><i className="bi bi-twitter-x text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-facebook text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-instagram text-dark"></i></NavLink>
                  <NavLink to="/" className=""><i className="bi bi-linkedin text-dark"></i></NavLink>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark-emphasis">William Anderson</h5>
                <p className="card-subtitle text-secondary">CTO</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="carousel">
                <img src="./media/images/team-4.jpg" className="card-img-top" alt="team-1"/>
                <div className="carousel-caption w-100">
                  <NavLink to="/" className="me-3"><i className="bi bi-twitter-x text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-facebook text-dark"></i></NavLink>
                  <NavLink to="/" className="me-3"><i className="bi bi-instagram text-dark"></i></NavLink>
                  <NavLink to="/" className=""><i className="bi bi-linkedin text-dark"></i></NavLink>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-dark-emphasis">Amanda Jepson</h5>
                <p className="card-subtitle text-secondary">Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
     </section>
  )
}

export default Team
