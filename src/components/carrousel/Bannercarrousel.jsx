import React, { useState, useEffect } from "react";
import './Bannercarrousel.css';

const BannerCarrousel = ({ banners }) => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir al siguiente banner
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    // Función para ir al banner anterior
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
        );
    };

    // useEffect para autoplay
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); 

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="banner-carousel-container">
            <div className="carousel-content">
                <div className="carousel-info">
                    <h1 className="banner-title">{banners[currentIndex].tittle}</h1>
                    <p className="banner-product"><strong><span className="new-word">New</span></strong> {banners[currentIndex].product}</p>
                    <p className="banner-price"><strong>{banners[currentIndex].price}</strong></p>
                </div>
                <div className="image-container">
                    <div className="background-layer-one"></div>
                    <div className="image-wrapper">
                        <img src={banners[currentIndex].picture} alt={banners[currentIndex].product} className="banner-image" />
                    </div>
                </div>
            </div>

            <div className="nav-buttons-container">
                {/* Botón de navegación anterior */}
                <div className="nav-button prev" onClick={prevSlide}>←</div>

                {/* Puntos que indican el banner actual */}
                <div className="nav-points-container">
                    {banners.map((_, index) => (
                        <div
                            key={index}
                            className={`nav-point ${index === currentIndex ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>

                {/* Botón de navegación siguiente */}
                <div className="nav-button next" onClick={nextSlide}>→</div>
            </div>
        </div>
    );
};

export default BannerCarrousel;
