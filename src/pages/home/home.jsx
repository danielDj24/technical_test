import React, { useRef,useEffect } from 'react';
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import BannerCarrousel from "../../components/carrousel/Bannercarrousel";
import roseArrangementImage from "../../assets/Grupo -5.png"
import CarrouselProducts from "../../components/carrouselProducts/carrouselProducts";
import ImageCarousel from "../../components/carrouselImages/carrouselImages";

//aseets images
import saleImage from "../../assets/Grupo -8.png"
import festImage from "../../assets/Grupo -9.png"
import locationImage from "../../assets/7125203.png"
import securrityImage from "../../assets/activo-2.png"
import shopImage from "../../assets/caida-deja-marco-herbario.png"

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

//asets category
import category1 from "../../assets/ramo-flores-hermosas-espacio-copia-(1).png"
import category2 from "../../assets/caida-deja-marco-herbario.png"
import category3 from "../../assets/flores-blancas-hoja-papel-negro.png";
import category4 from "../../assets/chocolates-redondos-nuez-fondo-pantsdsdalla-rosa-roja.png";

//asets reviews
import review1 from "../../assets/asdiafjiesjfs.png"

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
    const prevRef3 = useRef(null);
    const nextRef3 = useRef(null);
    const prevRef4 = useRef(null);
    const nextRef4 = useRef(null);

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
    
    const imagesCategorys = [
        {
            title: "Flores",
            content: "En ramo de rosas seleccionadas",
            image:category1,
        },
        {
            title: "Thanks giving",
            content: "En ramo de rosas seleccionadas",
            image: category2,
        },
        {
            title: "Condolensia",
            content: "En ramo de rosas seleccionadas",
            image: category3,
        },
        {
            title: "Detalles",
            content: "En ramo de rosas seleccionadas",
            image:category4,
        },
        {
            title: "Condolensia",
            content: "En ramo de rosas seleccionadas",
            image: category3,
        },
        {
            title: "Detalles",
            content: "En ramo de rosas seleccionadas",
            image:category4,
        }
    ];

    const reviews = [
    { 
        review: "Beautiful",
        reviewContent: "Very good service...and help when delivering. They had to wait a few minutes and they waited without problems.",
        person : "Andrea Castaño",
        image: review1,
    }
    ];

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col min-h-screen font-sf-pro">
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
                    <div className="mt-[80px]">
                        <h2 className="text-center text-3xl font-bold mb-6 h-10 flex items-center justify-center">
                            Top sellers
                        </h2>
                        <div className="px-10">
                            <CarrouselProducts products={topSellers} navigationPrevRef={prevRef1} navigationNextRef={nextRef1} />
                        </div>
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg flex justify-center items-center bg-[#F5F5F5] w-full h-[200px]">
                        <div className="flex items-center mx-4">
                            <img src={locationImage} alt="location image" className="w-[328px] h-[328px] bg-transparent object-contain ml-4" />
                            <div className="flex flex-col justify-center mr-8">
                                <p className="text-lg text-pink-500">Flower delivery to:</p>
                                <p className="text-lg">East Hartford, Hartford, Manchester, Glastonbury,</p>
                                <p className="text-lg">Bolton, Willimantic, West Hartford, East Windsor, North Windsor</p>
                                <a href="#" className="underline text-blue-500">Track your order.</a>
                            </div>
                        </div>
                        <div className="flex items-center mx-4">
                            <img src={securrityImage} alt="security image" className="w-[328px] h-[328px] bg-transparent object-contain mr-4" />
                            <div className="flex flex-col justify-center mr-8">
                                <p className="text-lg text-pink-500">Our schedule:</p>
                                <p className="text-lg">From 09:00 am to 04:00 pm Monday to Friday</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[80px] relative">
                        <div className="absolute inset-0 left-[450px] bg-[#F6DCDC] z-[-1] h-[340px] rounded-l-[58px]" />
                        <h2 className="text-center text-3xl font-bold mb-6 relative z-10">
                            Our categories
                        </h2>
                        <div className="px-10">
                            <ImageCarousel images={imagesCategorys} navigationPrevRef={prevRef3} navigationNextRef={nextRef3} />
                        </div>
                    </div>

                    <div className="mt-[80px]">
                        <h2 className="text-center text-3xl font-bold mb-6">
                            Our Best Deals
                        </h2>
                        <div className="px-10">
                            <CarrouselProducts products={products} navigationPrevRef={prevRef2} navigationNextRef={nextRef2} />
                        </div>
                    </div>

                    <div className="bg-gray-300 p-6 rounded-[50px] flex justify-center items-center bg-[#F5F5F5] w-full h-[428px] relative">
                        <div className="absolute top-[50px] left-[102px] w-[50px] h-[164px]">
                            <p className="text-4xl font-extrabold italic text-left" style={{ letterSpacing: "0px", opacity: 1, color: "#FFAA01" }}>
                                Happy Thanksgiving
                            </p>
                        </div>

                        <div className="absolute top-[160px] left-[104px] w-[473px] h-[56px]">
                            <p className="text-lg font-medium text-left text-[#606060]" style={{ letterSpacing: "0px", opacity: 1 }}>
                                See the best decorations for this celebration
                            </p>
                        </div>

                        <div className="absolute top-[240px] left-[102px] w-[240px] h-[54px]">
                            <button className="w-full h-full bg-[#FFAA01] text-[#131313] font-medium rounded-[35px]">
                                Shop Now
                            </button>
                        </div>

                        <div className="absolute top-[50px] left-[552px] flex space-x-6 z-[1]">
                            {products.slice(0, 2).map((product, index) => (
                                <div key={index} className="w-[240px] h-[328px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4 mb-10 relative">
                                    <img src={product.image} alt={`product ${index + 1}`} className="w-[70%] h-[190px] object-cover rounded-t-lg mb-3 z-10" />
                                    <div className={`absolute top-0 left-0 w-full h-[140px] ${index === 0 ? 'bg-[#F7527A]' : 'bg-[#F5F5F5]'} rounded-t-lg z-0`} />
                                    <div className="absolute top-2 left-2 bg-[#FFAA01] text-white text-sm font-medium px-2 py-1 rounded-full z-20">
                                        {product.percentDiscount}% off
                                    </div>
                                    <p className="text-xl font-semibold text-center mt-3">{product.product}</p>
                                    <div className="flex justify-between items-center w-full px-2 mt-2">
                                        <p className="text-lg font-bold text-[#F7527A]">${product.price}</p>
                                        <p className="text-sm text-[#606060]">{product.percentDiscount}% off</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center mx-4">
                            <img
                                src={shopImage}
                                alt="location image"
                                className="w-[100%] h-[428px] bg-transparent object-contain ml-[774px] rotate-[180deg]"
                            />
                        </div>
                    </div>

                    <div className="mt-[80px]">
                        <h2 className="text-center text-3xl font-bold mb-6">
                            Our Best Details
                        </h2>
                        <div className="px-10">
                            <CarrouselProducts products={products} navigationPrevRef={prevRef4} navigationNextRef={prevRef4} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
