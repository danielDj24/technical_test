import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./carrouselReviews.css"; 

const ReviewCarousel = ({ reviews }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className="review-carousel-container">
            <Swiper
                spaceBetween={14} 
                loop={true}
                autoplay={{
                    delay: 5000, 
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
                className="review-swiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1, // 1 elemento en pantallas pequeñas
                    },
                    768: {
                        slidesPerView: 2, // 2 elementos en pantallas medianas (tablets)
                    },
                    1024: {
                        slidesPerView: 3, // 3 elementos en pantallas grandes
                    },
                    1280: {
                        slidesPerView: 4, // 4 elementos en pantallas muy grandes
                    },
                }}
            >

                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="review-slide">
                    <div className="review-item-container">
                        <div className="review-item-wrapper-background">
                            <div className="review-item">
                                <div className="review-background"></div>
                                <div className="review-image-container">
                                    <img 
                                        src={review.image} 
                                        alt={review.person} 
                                        className="review-image" 
                                    />
                                </div>
                                <div className="review-text">
                                    <h3 className="review-title">{review.review}</h3>
                                    <p className="review-content">{review.reviewContent}</p>
                                    <p className="review-person"><strong>{review.person}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        
            {/* Botones de navegación */}
            <div className="swiper-button-prev" ref={navigationPrevRef}></div>
            <div className="swiper-button-next" ref={navigationNextRef}></div>
        </div>
    );
};

export default ReviewCarousel;
