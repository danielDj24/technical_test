import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./carrouselProducts.css";

const CarrouselProducts = ({ products, navigationPrevRef, navigationNextRef }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Detectar el tamaño de la pantalla
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 400); 
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="product-carousel relative">
            <Swiper
                spaceBetween={10}
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
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.update();
                }}
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1, // 2 elementos en pantallas muy pequeñas
                    },
                    768: {
                        slidesPerView: 2, // 2 elementos en pantallas medianas (tablets, etc.)
                    },
                    1024: {
                        slidesPerView: 3, // 3 elementos en pantallas grandes
                    },
                    1280: {
                        slidesPerView: 4, // 4 elementos en pantallas muy grandes
                    },
                }}
            >
                {products.map((product, index) => {
                    const discountedPrice = product.price * (1 - product.percentDiscount / 100);
                    const backgroundClass = index % 2 === 0 ? "background-color-1" : "background-color-2";

                    return (
                        <SwiperSlide key={index} className="product-slide">
                            <div className="product-item">
                                <img src={product.image} alt={product.product} className="product-image" />
                                <h3 className="product-name">{product.product}</h3>
                                <p className={`product-price ${product.percentDiscount === 0 ? "center-price" : ""}`}>
                                    <span className="discount-price">
                                        <strong>${discountedPrice.toFixed(2)}</strong>
                                    </span>
                                    {product.percentDiscount > 0 && (
                                        <span className="original-price">${product.price.toFixed(2)}</span>
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

            {/* Botones de navegación, solo visibles si no estamos en pantalla pequeña */}
            {!isSmallScreen && (
                <>
                    <div className="swiper-button-prev" ref={navigationPrevRef}></div>
                    <div className="swiper-button-next" ref={navigationNextRef}></div>
                </>
            )}
        </div>
    );
};

export default CarrouselProducts;
