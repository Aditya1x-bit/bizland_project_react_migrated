import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-2" to="./">BizLand </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">Team</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Dropdown 1</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="/">Deep Dropdown</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/">Dropdown 2</a></li>
                  <li><a className="dropdown-item" href="/">Dropdown 3</a></li>
                  <li><a className="dropdown-item" href="/">Dropdown 4</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
