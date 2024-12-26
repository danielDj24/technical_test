import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./carrouselImages.css"; 

const ImageCarousel = ({ images }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className="image-carousel">
        <Swiper
    spaceBetween={-40}
    slidesPerView={4}
    loop={true}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }}
    onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
    }}
    modules={[Navigation, Pagination, Autoplay]}
    className="image-swiper"
>
    {images.map((image, index) => (
        <SwiperSlide key={index} className="image-slide">
            <div className="image-item">
                <img
                    src={image.image}
                    alt={image.title}
                    className="carousel-image"
                />
                <div className="text-container">
                    <h3 className="image-title">{image.title}</h3>
                    <p className="image-content">{image.content}</p>
                </div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>

<div className="swiper-button-prev" ref={navigationPrevRef}></div>
<div className="swiper-button-next" ref={navigationNextRef}></div>

        </div>
    );
};

export default ImageCarousel;