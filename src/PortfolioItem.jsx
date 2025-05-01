import React from 'react'
import { NavLink } from 'react-router-dom'

function PortfolioItem(props) {

  const { id, image, gallery_data} =props;

  return (
    <>
      
        <div className="portfolio-item">
          <img src={image} className="img-fluid" alt={id}/>
          <div className="portfolio-info">
            <h4>{id}</h4>
            <p>Lorem ipsum, dolor sit</p>
            <NavLink to={image} title={id} className="glightbox preview-link" data-gallery= {gallery_data}>
              <i className="bi bi-zoom-in text-secondary"></i>
            </NavLink>
            <a href="./portfolio-details.html" title="More Details" className="details-link">
              <i className="bi bi-link-45deg text-secondary"></i>
            </a>
          </div>
        </div>
      
    </>
  )
}

export default PortfolioItem
