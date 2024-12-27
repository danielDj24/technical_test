import React, { useRef,useEffect } from 'react';

//components
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import BannerCarrousel from "../../components/carrousel/Bannercarrousel";
import CarrouselProducts from "../../components/carrouselProducts/carrouselProducts";
import ImageCarousel from "../../components/carrouselImages/carrouselImages";
import ReviewCarousel from "../../components/carrouselReviews/carrouselReviews";

//data elements
import { banners, topSellers, products, imagesCategorys, reviews } from "./Elemets";

//aseets images
import saleImage from "../../assets/Grupo -8.png"
import festImage from "../../assets/Grupo -9.png"
import locationImage from "../../assets/7125203.png"
import securrityImage from "../../assets/activo-2.png"
import shopImage from "../../assets/caida-deja-marco-herbario.png"
import payment1 from "../../assets/visa.png"
import payment2 from "../../assets/american-express-1.png"
import payment3 from "../../assets/mastercard.png"
import payment4 from "../../assets/paypal-3.png"
import payment5 from "../../assets/discover-2.png"
import payment6 from "../../assets/diners-club-international-2.png"
import payment7 from "../../assets/jcb-emblem-logo.png"
import payment8 from "../../assets/western-union-2.png"

const Home = () => {

    const prevRef1 = useRef(null);
    const nextRef1 = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);
    const prevRef3 = useRef(null);
    const nextRef3 = useRef(null);
    const prevRef4 = useRef(null);
    const nextRef4 = useRef(null);
    const prevRef5 = useRef(null);
    const nextRef5 = useRef(null);

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col min-h-screen font-sf-pro">
            <Menu />
            <div className="flex-grow">
                <div className="content">
                    <BannerCarrousel banners={banners} />
                    
                    {/* Contenedor para las imágenes más pequeñas */}
                    <div className="flex justify-center items-center space-y-8 my-8 flex-col sm:flex-row sm:space-y-0 sm:space-x-8">
                        <img src={saleImage} alt="Image 1" className="w-[370px] sm:w-[300px] h-auto" />
                        <img src={festImage} alt="Image 2" className="w-[370px] sm:w-[300px] h-auto" />
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

                    <div className="bg-gray-300 p-6 rounded-[50px] flex flex-col lg:flex-row justify-center items-center bg-[#F5F5F5] w-full lg:h-[428px] relative overflow-hidden">
    <div className="lg:absolute top-[50px] left-[102px] text-center lg:text-left">
        <p className="text-4xl font-extrabold italic" style={{ letterSpacing: "0px", opacity: 1, color: "#FFAA01" }}>
            Happy Thanksgiving
        </p>
    </div>

    <div className="lg:absolute top-[160px] left-[104px] text-center lg:text-left">
        <p className="text-lg font-medium text-[#606060]" style={{ letterSpacing: "0px", opacity: 1 }}>
            See the best decorations for this celebration
        </p>
    </div>

    <div className="lg:absolute top-[240px] left-[102px]">
        <button className="w-[240px] h-[54px] bg-[#FFAA01] text-[#131313] font-medium rounded-[35px]">
            Shop Now
        </button>
    </div>

    <div className="relative flex flex-col items-center lg:items-start w-full">
        {/* Aquí se ajustan las clases para pantallas pequeñas */}
        <div className="flex flex-col sm:flex-row lg:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-y-0 lg:space-x-6 z-[1] mt-6 lg:mt-0 w-full lg:absolute lg:top-[200px] lg:left-[92%] lg:transform lg:-translate-y-1/2 sm:absolute sm:top-[50%] sm:left-[62%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:z-10">
            {products.slice(0, 2).map((product, index) => (
                <div key={index} className="w-full lg:w-[200px] h-auto lg:h-[300px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4 relative sm:w-[240px] sm:h-[280px]">
                    <img
                        src={product.image}
                        alt={`product ${index + 1}`}
                        className="w-[70%] h-[170px] object-cover rounded-t-lg mb-3 z-10 sm:w-[60%] sm:h-[120px]"
                    />
                    <div className={`absolute top-0 left-0 w-full h-[120px] ${index === 0 ? 'bg-[#F7527A]' : 'bg-[#F5F5F5]'} rounded-t-lg z-0 sm:h-[100px]`} />
                    <div className="absolute top-2 left-2 bg-[#FFAA01] text-white text-sm font-bold px-2 py-1 rounded-full z-20 sm:text-xs">
                        {product.percentDiscount}% off
                    </div>
                    <p className="text-xl font-semibold text-center mt-3 sm:text-lg">{product.product}</p>
                    <div className="flex justify-between items-center w-full px-2 mt-2">
                        <p className="text-lg font-bold text-[#F7527A] sm:text-base">${product.price}</p>
                        <p className="text-sm text-[#606060] sm:text-xs">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Imagen */}
        <img
            src={shopImage}
            alt="location image"
            className="w-full lg:w-[535px] lg:ml-[790px] h-auto bg-transparent object-contain "
        />
    </div>
</div>


                    <div className="mt-[80px]">
                        <h2 className="text-center text-3xl font-bold mb-6">
                            Our Best Details
                        </h2>
                        <div className="px-10">
                            <CarrouselProducts products={products} navigationPrevRef={prevRef4} navigationNextRef={nextRef4} />
                        </div>
                    </div>

                    <div className="mt-[10px] relative">
                        <div className="absolute inset-0 left-[300px] bg-[#F5F5F5] h-[590px] rounded-l-[58px]" />
                        <h2 className="text-center text-2xl font-bold mb-6 relative top-[30px]">
                            <span className="text-yellow-500">★★★★★</span> <span className="text-pink-500">(5-Star)</span> Reviews on Google my Business
                        </h2>
                        <div className="px-10">
                            <ReviewCarousel reviews={reviews} navigationPrevRef={prevRef5} navigationNextRef={nextRef5} />
                        </div>
                        {/* Botón debajo del carrusel, encima del fondo gris */}
                        <div className="flex justify-center mb-20 relative z-10">
                            <button className="bg-[#FFAA01] text-[#131313] font-bold text-[18px] w-[238px] h-[54px] rounded-[35px]">
                                Write a review
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-[90px]">
                        <h2 className="text-center text-3xl font-bold">
                            Our payment methods
                        </h2>
                        {/* Contenedor de las imágenes */}
                        <div className="grid grid-cols-3 gap-12 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-8">
                            {/* Imagen 1 */}
                            <img src={payment1} alt="Payment Method 1" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 2 */}
                            <img src={payment2} alt="Payment Method 2" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 3 */}
                            <img src={payment3} alt="Payment Method 3" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 4 */}
                            <img src={payment4} alt="Payment Method 4" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 5 */}
                            <img src={payment5} alt="Payment Method 5" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 6 */}
                            <img src={payment6} alt="Payment Method 6" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 7 */}
                            <img src={payment7} alt="Payment Method 7" className="w-[120px] h-[120px] object-contain" />
                            {/* Imagen 8 */}
                            <img src={payment8} alt="Payment Method 8" className="w-[120px] h-[120px] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
