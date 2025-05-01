import React from 'react'
import './Featured.css'
function Featured() {
  return (
    <>
        <section id="featured-services" className="text-center w-100">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-3 d-flex">
                    <div className="card text-center p-3 shadow-sm w-100">
                        <div className="card-body">
                        <div className="fs-3 text-primary">&#x1F4A1;</div>
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">
                            Voluptatum deleniti atque corrupti quos dolores et quas
                            molestias excepturi
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 d-flex">
                    <div className="card text-center p-3 shadow-sm w-100">
                        <div className="card-body">
                        <div className="fs-3 text-primary">&#x1F4CB;</div>
                        <h5 className="card-title">Sed ut perspic</h5>
                        <p className="card-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 d-flex">
                    <div className="card text-center p-3 shadow-sm w-100">
                        <div className="card-body">
                        <div className="fs-3 text-primary">&#x1F4C5;</div>
                        <h5 className="card-title">Magni Dolores</h5>
                        <p className="card-text">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 d-flex">
                    <div className="card text-center p-3 shadow-sm w-100">
                        <div className="card-body">
                        <div className="fs-3 text-primary">&#x1F4E2;</div>
                        <h5 className="card-title">Nemo Enim</h5>
                        <p className="card-text">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
        </section>
    </>
  )
}

export default Featured
