import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <>
      <section id="skills" className="d-flex justify-content-center marg">
        <div className="container mt-4">
            <div className="row">
            <div className="col-md-6">

                <p className="fw-semibold f13"> HTML <span className="float-end">100%</span></p>
                <div className="progress thin-bar">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br />

                <p className="fw-semibold f13">CSS <span className="float-end">90%</span></p>
                <div className="progress thin-bar">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br />

                <p className="fw-semibold f13"> JAVASCRIPT <span className="float-end">75%</span></p>
                <div className="progress thin-bar">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br />
            </div>

            <div className="col-md-6">
                <p className="fw-semibold f13">PHP <span className="float-end">80%</span></p>
                <div className="progress thin-bar">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br />

                <p className="fw-semibold f13"> WORDPRESS/CMS <span className="float-end">90%</span></p>
                <div className="progress thin-bar">
                    <div className="progress-bar bg-primary"  role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br />

                <p className="fw-semibold f13"> PHOTOSHOP <span className="float-end">55%</span></p>
                <div className="progress thin-bar">
                    <div className="progress-bar bg-primary" role="progressbar"  style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br />

            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Skills;

