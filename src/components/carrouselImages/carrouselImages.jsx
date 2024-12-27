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
                spaceBetween={0}
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
                className="custom-image-swiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1, // 1 imagen en pantallas pequeñas
                    },
                    768: {
                        slidesPerView: 2, // 2 imágenes en pantallas medianas (tablets)
                    },
                    1024: {
                        slidesPerView: 3, // 3 imágenes en pantallas grandes
                    },
                    1280: {
                        slidesPerView: 4, // 4 imágenes en pantallas muy grandes
                    },
                }}
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
