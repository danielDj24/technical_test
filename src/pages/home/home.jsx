import React, { useRef } from 'react';
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import BannerCarrousel from "../../components/carrousel/Bannercarrousel";
import roseArrangementImage from "../../assets/Grupo -5.png"
import CarrouselProducts from "../../components/carrouselProducts/carrouselProducts";

//aseets images
import saleImage from "../../assets/Grupo -8.png"
import festImage from "../../assets/Grupo -9.png"
import locationImage from "../../assets/7125203.png"
import securrityImage from "../../assets/activo-2.png"

//asests products
import product1 from "../../assets/sieirfhek.png"
import product2 from "../../assets/BF112-11K-23.png"
import product3 from "../../assets/FTD-BD223.png"
import product4 from "../../assets/HOL23_TheMulberry_DL_ARG_334_Web-(1).png"
import product5 from "../../assets/sku10951788.png"
import product6 from "../../assets/ramo-rosas-blancas-rosas.png"
import product7 from "../../assets/sieirfhek.png"
import product8 from "../../assets/3592.png"
import bestProduct1 from "../../assets/Grupo 9122.png"
import bestProduct2 from "../../assets/Grupo 9123.png"
import bestProduct3 from "../../assets/sieirfhek.png"
import bestProduct4 from "../../assets/Grupo 9124.png"

const Home = () => {
    // Lista de diccionarios con los datos de los banners
    const banners = [
        {
            tittle: 'Surprise your favorite person',
            product: 'Rose arrangement with golden vase',
            price: '$99,00',
            picture: roseArrangementImage,
        },
        {
            tittle: 'Surprise your favorite person2',
            product: 'Rose arrangement with golden vase2',
            price: '$90,00',
            picture: bestProduct2,
        },
        {
            tittle: 'Surprise your favorite person3',
            product: 'Rose arrangement with golden vase3',
            price: '$80,00',
            picture: bestProduct4,
        },
    ];

    const prevRef1 = useRef(null);
    const nextRef1 = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);

    const products = [
        {
            product: "Bouquet of Pink a White Roses",
            image: product1,
            price: 109.00,
            percentDiscount: 60,
        },
        {
            product: "Floweer Arrangement and teddy bear",
            image: product2,
            price: 199.00,
            percentDiscount: 20,
        },
        {
            product: "Happy Birthday flower arrangement",
            image: product3,
            price: 109.00,
            percentDiscount: 60,
        },
        {
            product: "Arrangement of yellow and pink roses",
            image: product4,
            price: 109.00,
            percentDiscount: 10,
        },
        {
            product: "Flower Arrangement of the day roses and sunflowers",
            image: product5,
            price: 109.00,
            percentDiscount: 20,
        },
        {
            product: "floral arrangement from funeral",
            image: product6,
            price: 109.00,
            percentDiscount: 20,
        },
        {
            product: "floral bouquet of pink and white roses",
            image: product7,
            price: 109.00,
            percentDiscount: 60,
        },
        {
            product: "Plant arrangement with gray base",
            image: product8,
            price: 109.00,
            percentDiscount: 10,
        },
    ];

    const topSellers = [
        {
            product: "Floral arrangement Roses in lux",
            image: bestProduct1,
            price: 99.00,
            percentDiscount: 0, 
            isNew: true, 
        },
        {
            product: "Floral arrangement of the day roses in black",
            image: bestProduct2,
            price: 89.00,
            percentDiscount: 0,
            isNew: false, 
        },
        {
            product: "floral bouquet of pink and white roses",
            image: bestProduct3,
            price: 109.00,
            percentDiscount: 60, 
            isNew: false, 
        },
        {
            product: "Floral arrangement of the day roses in a golden",
            image: bestProduct4,
            price: 99.00,
            percentDiscount: 0,
            isNew: false, 
        },
        {
            product: "floral bouquet of pink and white roses",
            image: bestProduct3,
            price: 109.00,
            percentDiscount: 60, 
            isNew: false, 
        },
        {
            product: "Floral arrangement of the day roses in a golden",
            image: bestProduct4,
            price: 99.00,
            percentDiscount: 0,
            isNew: false, 
        },
    ];
    

    return (
        <div className="flex flex-col min-h-screen">
            <Menu />
            <div className="flex-grow">
                <div className="content">
                    <BannerCarrousel banners={banners} />
                        
                    {/* Contenedor para las imágenes más pequeñas */}
                    <div className="flex justify-center items-center space-x-8 my-8">
                        <img src={saleImage} alt="Image 1" className="w-2/6 h-auto" />
                        <img src={festImage} alt="Image 2" className="w-2/6 h-auto" />
                    </div>

                    {/* Título y carrusel de productos */}
                    <div className="mt-12">
                    <h2 className="text-center text-2xl font-bold mb-6 h-10 flex items-center justify-center">
                        Top sellers
                    </h2>
                        <div className="px-6">
                            <CarrouselProducts products={topSellers} navigationPrevRef={prevRef1} navigationNextRef={nextRef1} />
                        </div>
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg flex justify-center items-center bg-[#F5F5F5] w-full h-[200px]">
                    <div className="flex items-center mx-4">
                        <img src={locationImage} alt="location image" className="w-[328px] h-[328px] bg-transparent object-contain ml-4" style={{ backgroundImage: "url('img/13.png')" }} />
                        <div className="flex flex-col justify-center mr-8">
                            <p className="text-lg text-pink-500">Flower delivery to:</p>
                            <p className="text-lg">East Hartford, Hartford, Manchester, Glastonbury,</p>
                            <p className="text-lg">Bolton, Willimantic, West Hartford, East Windsor, North Windsor</p>
                            <a href="#" className="underline text-blue-500">Track your order.</a>
                        </div>
                    </div>
                    <div className="flex items-center mx-4">
                        <img src={securrityImage} alt="security image" className="w-[328px] h-[328px] bg-transparent object-contain mr-4" style={{ backgroundImage: "url('img/13.png')" }} />
                        <div className="flex flex-col justify-center mr-8">
                            <p className="text-lg text-pink-500">Our schedule:</p>
                            <p className="text-lg">From 09:00 am to 04:00 pm Monday to Friday</p>
                        </div>
                    </div>
                </div>

                    <div className="mt-12">
                        <h2 className="text-center text-2xl font-bold mb-6">
                            Our Best Deals
                        </h2>
                        <div className="px-6">
                            <CarrouselProducts products={products} navigationPrevRef={prevRef2} navigationNextRef={nextRef2} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
