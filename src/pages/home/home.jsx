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

                    <div className="bg-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-center items-center bg-[#F5F5F5] w-full h-auto">
    <div className="flex items-center mx-4 mb-4 sm:mb-0 sm:max-w-[600px]">
        <img src={locationImage} alt="location image" className="w-[200px] sm:w-[328px] h-[200px]   bg-transparent object-contain ml-2 sm:ml-4" />
        <div className="flex flex-col justify-center sm:ml-6">
            <p className="text-lg text-[#F7527A]">Flower delivery to:</p>
            <p className="text-lg">East Hartford, Hartford, Manchester, Glastonbury,</p>
            <p className="text-lg">Bolton, Willimantic, West Hartford, East Windsor, North Windsor</p>
            <a href="#" className="underline text-[#F7527A]">Track your order.</a>
        </div>
    </div>
    <div className="flex items-center mx-4 sm:max-w-[600px]">
        <img src={securrityImage} alt="security image" className="w-[200px] sm:w-[328px] h-[200px]  bg-transparent object-contain mr-2 sm:mr-4" />
        <div className="flex flex-col justify-center sm:ml-6">
            <p className="text-lg text-[#F7527A]">Our schedule:</p>
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
                                    <div className="absolute top-2 left-2 bg-[#FFAA01] text-white text-sm font-bold px-2 py-1 rounded-full z-20">
                                        {product.percentDiscount}% off
                                    </div>
                                    <p className="text-xl font-semibold text-center mt-3">{product.product}</p>
                                    <div className="flex justify-between items-center w-full px-2 mt-2">
                                        <p className="text-lg font-bold text-[#F7527A]">${product.price}</p>
                                        <p className="text-sm text-[#606060]">{product.price}</p>
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
                        <h2 className="text-center text-3xl font-bold ">
                            Our payment methods
                        </h2>
                        {/* Contenedor de las imágenes */}
                        <div className="grid grid-cols-3 gap-12 sm:grid-cols-2 lg:grid-cols-3">
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
