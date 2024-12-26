import React from "react";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import BannerCarrousel from "../../components/carrousel/Bannercarrousel";
import roseArrangementImage from "../../assets/Grupo -5.png"

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
                {/* Aquí va el contenido principal */}
                <div className="content">

                    {/* Pasamos los banners como prop al componente BannerCarrousel */}
                    <BannerCarrousel banners={banners} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
