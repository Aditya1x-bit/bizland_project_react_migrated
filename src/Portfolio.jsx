import React, { Component } from 'react'
import './Portfolio.css'
import PortfolioItem from './PortfolioItem';
import GLightbox from 'glightbox';
import '../node_modules/glightbox/dist/css/glightbox.min.css'


export class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: 'All',
          appdata: true,
          productdata: true,
          brandingdata: true
        };
        this.lightboxes = {}; 
    }

    componentDidMount() {
        this.lightbox = GLightbox({
            selector: '.glightbox'
        });
    }

    handleFilterClick = (filter) => {
        this.setState({ selected: filter });
        if(filter === 'All'){
            this.setState ({
                appdata: true,
                productdata: true,
                brandingdata: true
            })
        }
        else if(filter === 'App'){
            this.setState ({
                appdata: true,
                productdata: false,
                brandingdata: false
            })
        }
        else if(filter === 'Card'){
            this.setState ({
                appdata: false,
                productdata: true,
                brandingdata: false
            })
        }
        else if(filter === 'Web'){
            this.setState ({
                appdata: false,
                productdata: false,
                brandingdata: true
            })
        }
    };

    

    render() {
        const { selected } = this.state;;
        const filters = ['All', 'App', 'Card', 'Web']

        const AppData = [{
            id: 'App 1',
            image: '/media/images/masonry-portfolio-1.jpg',
            gallery_data: 'app-gallery'
        },
        {
            id: 'App 2',
            image: '/media/images/masonry-portfolio-4.jpg',
            gallery_data: 'app-gallery'
        },
        {
            id: 'App 3',
            image: '/media/images/masonry-portfolio-7.jpg',
            gallery_data: 'app-gallery'
        }]

        const ProductData = [{
            id: 'Product 1',
            image: '/media/images/masonry-portfolio-2.jpg',
            gallery_data: 'product-gallery'
        },
        {
            id: 'Product 2',
            image: '/media/images/masonry-portfolio-5.jpg',
            gallery_data: 'product-gallery'
        },
        {
            id: 'Product 3',
            image: '/media/images/masonry-portfolio-8.jpg',
            gallery_data: 'product-gallery'
        }]

        const BrandingData = [{
            id: 'Branding 1',
            image: '/media/images/masonry-portfolio-3.jpg',
            gallery_data: 'branding-gallery'
        },
        {
            id: 'Branding 2',
            image: '/media/images/masonry-portfolio-6.jpg',
            gallery_data: 'branding-gallery'
        },
        {
            id: 'Branding 3',
            image: '/media/images/masonry-portfolio-9.jpg',
            gallery_data: 'branding-gallery'
        }]

        return (
        <>
            <section id="portfolio" className="justify-content-center">
                <h5 className="text-center my-2"><span className="badge rounded-pill bg-primary-subtle text-primary py-2 px-3 fw-semibold">Portfolio</span></h5>
                <h2 className="text-center mt-2 mb-5"><strong>Check Our <span className="text-primary">Portfolio</span></strong></h2>
                <br />

                <div className="container">
                    <div className='d-flex justify-content-center'>
                        {filters.map((filter) => (
                            <button key={filter} className={`btn px-4 py-1 ${selected === filter ? 'btn-primary' : 'btn-light'} btn-port`} onClick={() => this.handleFilterClick(filter)}>{filter}</button>
                        ))}
                    </div>
                    <br />
                    <div className="row g-4">
                        {
                            this.state.appdata && AppData.map((val, index, array) => {
                                return(
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            id= {val.id}
                                            image={val.image}
                                            gallery_data={val.gallery_data}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            this.state.productdata && ProductData.map((val, index, array) => {
                                return(
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            id= {val.id}
                                            image={val.image}
                                            gallery_data={val.gallery_data}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            this.state.brandingdata && BrandingData.map((val, index, array) => {
                                return(
                                    <div className="col-lg-4 col-md-6">
                                        <PortfolioItem
                                            id= {val.id}
                                            image={val.image}
                                            gallery_data={val.gallery_data}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
        )
    }
}

export default Portfolio

