import React from 'react'

export default function ImageCard(props) {

    return (
        <div>
            <div className="card">
                <div className="image-container">
                    <div className="first">
                        <div className="d-flex justify-content-between align-items-center"> <span className="discount">{props.picture.date}</span> <span className="wishlist"><i className="fa fa-globe"></i></span> </div>
                    </div>
                    <img src={props.picture.hdurl} alt={props.picture.title} className="img-fluid rounded thumbnail-image"/>
                </div>
                <div className="product-detail-container p-2">
                    <div className="d-flex justify-content-between align-items-center left">
                        <h5 className="dress-name">{props.picture.title}</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-1">
                        <div> <i className="fa fa-star-o rating-star"></i></div>
                        <span className="buy">{props.picture.copyright}</span>
                    </div>
                </div>
            </div>
            <div className="mt-3">
            </div>
        </div>
        );
  }

