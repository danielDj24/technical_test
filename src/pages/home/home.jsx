import React from "react";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Menu />
            <div className="flex-grow">
                {/* Aquí va el contenido principal */}
                <div className="content">
                    <h1>Main Content</h1>
                    <p>Some content here...</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
