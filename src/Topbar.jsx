import React from 'react'
import './Topbar.css'
import { NavLink } from 'react-router-dom';


function Topbar() {
  return (
      <div className="bg-primary text-white text-center py-2">
        <div className="container d-flex justify-content-between">
          <div>
            <span className="me-3"><i className="bi bi-envelope text-white"> </i>
              <a href="mailto:contact@example.com"
                className="text-white text-decoration-none">contact@example.com</a>
            </span>
            <span>
              <i className="bi bi-phone text-white"> </i> +1 5589 55488 55</span>
          </div>
          <div>
            <NavLink to="/" className="text-white-50 me-3 topb"><i className="bi bi-twitter-x"></i></NavLink>
            <NavLink to="/" className="text-white-50 me-3 topb"><i className="bi bi-facebook"></i></NavLink>
            <NavLink to="/" className="text-white-50 me-3 topb"><i className="bi bi-instagram"></i></NavLink>
            <NavLink to="/" className="text-white-50 topb"><i className="bi bi-linkedin"></i>
            </NavLink>
          </div>
        </div>
      </div>
  )
}

export default Topbar;
