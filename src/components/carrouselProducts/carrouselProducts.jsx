import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Archivo CSS con las clases personalizadas
import "./carrouselProducts.css";

const CarrouselProducts = ({ products, navigationPrevRef, navigationNextRef }) => {
    useEffect(() => {
        if (navigationPrevRef.current && navigationNextRef.current) {
            navigationPrevRef.current.classList.add("custom-swiper-button-prev");
            navigationNextRef.current.classList.add("custom-swiper-button-next");
        }
    }, [navigationPrevRef, navigationNextRef]);

    return (
        <div className="product-carousel relative">
            <Swiper
                spaceBetween={10}
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
                onSwiper={(swiper) => {
                    // Vincula las referencias al swiper cuando esté listo
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.update();
                }}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {products.map((product, index) => {
                    const discountedPrice = product.price * (1 - product.percentDiscount / 100);
                    const backgroundClass = index % 2 === 0 ? "background-color-1" : "background-color-2";

                    return (
                        <SwiperSlide key={index} className="product-slide">
                            <div className="product-item">
                                <img
                                    src={product.image}
                                    alt={product.product}
                                    className="product-image"
                                />
                                <h3 className="product-name">{product.product}</h3>
                                <p
                                    className={`product-price ${
                                        product.percentDiscount === 0 ? "center-price" : ""
                                    }`}
                                >
                                    <span className="discount-price">
                                        <strong>${discountedPrice.toFixed(2)}</strong>
                                    </span>
                                    {product.percentDiscount > 0 && (
                                        <span className="original-price">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    )}
                                </p>
                                {(product.percentDiscount > 0 || product.isNew) && (
                                    <p className="product-discount">
                                        <strong>
                                            {product.percentDiscount > 0
                                                ? `${product.percentDiscount}% off`
                                                : "New"}
                                        </strong>
                                    </p>
                                )}
                                <div className={`${backgroundClass}`}></div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Botones de navegación */}
            <div
                ref={navigationPrevRef}
                className="custom-swiper-button-prev swiper-button-prev"
            ></div>
            <div
                ref={navigationNextRef}
                className="custom-swiper-button-next swiper-button-next"
            ></div>
        </div>
    );
};

export default CarrouselProducts;
