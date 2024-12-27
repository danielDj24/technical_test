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
        <div className="custom-image-carousel">
            <Swiper
                spaceBetween={-30}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl2: navigationPrevRef.current,
                    nextEl2: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl2 = navigationPrevRef.current;
                    swiper.params.navigation.nextEl2 = navigationNextRef.current;
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="custom-image-swiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="custom-image-slide">
                        <div className="custom-image-item">
                            <img
                                src={image.image}
                                alt={image.title}
                                className="custom-carousel-image"
                            />
                            <div className="custom-text-container">
                                <h3 className="custom-image-title">{image.title}</h3>
                                <p className="custom-image-content">{image.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-swiper-button-prev" ref={navigationPrevRef}></div>
            <div className="custom-swiper-button-next" ref={navigationNextRef}></div>
        </div>
    );
};

export default ImageCarousel;
