import React, { useState, useEffect } from "react";
import './Bannercarrousel.css';

const BannerCarrousel = ({ banners }) => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
        );
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); 

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="banner-carousel-container">
            <div className="carousel-content">
                <div className="carousel-info">
                    <h1 className="banner-title"><strong>{banners[currentIndex].tittle}</strong></h1>
                    <p className="banner-product"><strong><span className="new-word">New</span></strong> {banners[currentIndex].product}</p>
                    <p className="banner-price"><strong>{banners[currentIndex].price}</strong></p>
                    <button className="shop-now-button">Shop Now</button>
                </div>
                <div className="image-container">
                    <div className="background-layer-one"></div>
                    <div className="image-wrapper">
                        <img src={banners[currentIndex].picture} alt={banners[currentIndex].product} className="banner-image" />
                    </div>
                </div>
            </div>

            <div className="nav-buttons-container">
                <div className="nav-button prev" onClick={prevSlide}>←</div>
                <div className="nav-points-container">
                    {banners.map((_, index) => (
                        <div
                            key={index}
                            className={`nav-point ${index === currentIndex ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
                <div className="nav-button next" onClick={nextSlide}>→</div>
            </div>
        </div>
    );
};

export default BannerCarrousel;
