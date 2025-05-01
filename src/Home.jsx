import React from 'react'
import './Home.css'
import Featured from './Featured'
import Pricing from './Pricing'
import FAQ from './FAQ'

const Home = () => {
  return (
    <>
    <section id="home" className="hero d-flex">
      <div className="d-flex hero1">
        <div className="container">
          <div className="hero2">
            <h1 className="display-5">
              Welcome to <span className="text-primary">BizLand</span>
            </h1>
            <p className="lead">
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div>
              <a href="/services" className="btn btn-primary btn-lg me-2">Get Started</a>
              <a href="/" className="btn btn-dark-0 btn-lg"><i className="bi bi-play-circle text-primary"> </i><b>Watch Video</b></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Featured />
    <Pricing />
    <FAQ />
    </>
  )
}

export default Home
