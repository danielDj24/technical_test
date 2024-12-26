import React from "react";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import BannerCarrousel from "../../components/carrousel/Bannercarrousel";
import roseArrangementImage from "../../assets/Grupo -5.png"
import saleImage from "../../assets/Grupo -8.png"
import festImage from "../../assets/Grupo -9.png"

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
            picture: roseArrangementImage,
        },
        {
            tittle: 'Surprise your favorite person3',
            product: 'Rose arrangement with golden vase3',
            price: '$80,00',
            picture: roseArrangementImage,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Menu />
            <div className="flex-grow">
                <div className="content">
                    <BannerCarrousel banners={banners} />
                        
                    {/* Contenedor para las imágenes más pequeñas */}
                    <div className="flex justify-center items-center space-x-8">
                        <img src={saleImage} alt="Image 1" className="w-2/6 h-auto" />
                        <img src={festImage} alt="Image 2" className="w-2/6 h-auto" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
