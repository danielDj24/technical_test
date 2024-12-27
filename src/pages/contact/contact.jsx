import React, { useState } from 'react';

import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";

//assets contact
import contactimage1 from "../../assets/Grupo 9118.png";
import contactimage2 from "../../assets/floreria-cultivos-preparando-flores.png";
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        // Validaciones
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        // Si hay errores, no enviamos el formulario
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Lógica para enviar el formulario
            console.log('Form submitted', formData);
            // Clear errors if valid
            setErrors({});
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex flex-col min-h-screen font-sf-pro">
            <Menu />
            <div className="flex-grow">
                <div className="content">
                    {/* Contenedor principal con flexbox */}
                    <div className="flex justify-center items-center py-4">
                        <div className="w-full max-w-7xl px-4">
                            {/* Contenedor del formulario */}
                            <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">

                                {/* Formulario */}
                                <div className="flex-1 bg-[#F5F5F5] p-6 rounded-lg shadow-md">
                                    <h2 className="relative inline-block text-3xl font-bold text-[#F7527A] mb-4 ml-[50px]">
                                        <span className="before:content-['..'] before:absolute before:left-[-15px] before:top-[-10px] before:text-black before:rotate-45 before:text-[2rem] before:font-bold after:content-['..'] after:absolute after:right-[-15px] after:top-[-12px] after:text-black after:-rotate-45 after:text-[2rem] after:font-bold">
                                            Contact Us
                                        </span>
                                    </h2>
                                    <p className="text-left mb-6 text-[#131313]">
                                        Mia's Florist is here to craft your story with favorite flowers and tailored details for your special occasion in Connecticut. Let us lend a hand in creating the perfect touch just for you.
                                    </p>

                                    <form onSubmit={handleSubmit}>
                                        {/* Campo de Nombre */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-bold text-gray-700" htmlFor="name">
                                                Name
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                className="w-full px-4 py-2 mt-1 border border-[#131313] rounded-[24px]" 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                        </div>

                                        {/* Campos Email y Teléfono en la misma línea */}
                                        <div className="mb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                            <div className="w-full md:w-1/2">
                                                <label className="block text-sm font-bold text-gray-700" htmlFor="email">
                                                    Email
                                                </label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    name="email" 
                                                    className="w-full px-4 py-2 mt-1 border border-[#131313] rounded-[24px]" 
                                                    value={formData.email} 
                                                    onChange={handleChange} 
                                                />
                                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <label className="block text-sm font-bold text-gray-700" htmlFor="phone">
                                                    Phone
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="phone" 
                                                    name="phone" 
                                                    className="w-full px-4 py-2 mt-1 border border-[#131313] rounded-[24px]" 
                                                    value={formData.phone} 
                                                    onChange={handleChange} 
                                                />
                                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                            </div>
                                        </div>

                                        {/* Campo Mensaje */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-bold text-gray-700" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea 
                                                id="message" 
                                                name="message" 
                                                rows="4" 
                                                className="w-full px-4 py-2 mt-1 border border-[#131313] rounded-[24px]" 
                                                value={formData.message} 
                                                onChange={handleChange} 
                                            />
                                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                        </div>

                                        {/* Términos y Condiciones */}
                                        <p className="text-[#131313] text-center mb-4">
                                            By clicking “Send”, you agree to our Terms and Conditions and Privacy Policy.
                                        </p>

                                        {/* Botón Contact Us */}
                                        <button type="submit" className="w-[80%] ml-[60px] bg-[#FFAA01] text-[#131313] py-2 font-bold rounded-[35px]">
                                            Contact Us
                                        </button>
                                    </form>
                                </div>

                                {/* Imagen */}
                                <div className="flex-1">
                                    <img src={contactimage1} alt="Contact" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección adicional para contacto */}
                    <div className="bg-[#F6DCDC] py-8">
                        <div className="w-full max-w-7xl px-6 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Primer div dentro */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-[#F7527A] mb-2">Mia’ Florist</h3>
                                    <p className="text-[#131313]">
                                        <span className="font-bold">Over 10 Years of Expertise</span>, Turning Special Moments into Extraordinary Occasions.
                                    </p>
                                </div>

                                {/* Segundo div dentro */}
                                <div className="text-center max-w-md mx-auto">
                                    <h3 className="text-2xl font-bold text-[#F7527A] mb-2">Our Team</h3>
                                    <p className="text-[#131313]">Experienced florists guarantee that each creation will bring beauty and joy to your moments, creating floral wonders that tell your unique story.</p>
                                </div>

                                {/* Tercer div dentro */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-[#F7527A] mb-2">Contact us</h3>
                                    <div className="text-[#131313]">
                                        <p className="font-bold text-[#F7527A]">T860 796 9144</p>
                                        <p className="font-bold">manager@miasflorist.com</p>
                                        <p className="font-bold">363 park ave East Hartford ct 06108</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center py-8 mb-8">
                        {/* Contenedor principal */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full max-w-7xl px-6">
                            {/* Div con imagen y elemento rosa */}
                            <div className="relative flex flex-col items-center p-4 rounded-[58px] w-full">
                                <img 
                                    src={contactimage2} 
                                    alt="Image" 
                                    className="w-[90%] md:w-[475px] h-auto object-cover rounded-md z-10" 
                                />
                                <div 
                                    className="absolute bottom-[-32px] left-0 w-[90%] md:w-[800px] h-[240px] md:ml-[-125px] bg-[#F6DCDC] rounded-br-[58px] rounded-tr-[58px] z-0" 
                                /> {/* Barra rosa debajo de la imagen */}
                            </div>

                            {/* Div con título y texto */}
                            <div className="flex flex-col justify-center w-full text-center md:text-left md:w-1/2 z-10 mt-8 md:mt-0">
                                <h3 className="text-3xl font-bold text-[#F7527A] mb-4">
                                    <span className="relative inline-block text-3xl font-bold text-[#F7527A] mb-2 ml-[0] md:ml-[50px]">
                                    <span className="before:content-['..'] before:absolute before:left-[-10px] before:top-[-10px] before:text-black before:rotate-45 before:text-[2rem] before:font-bold after:content-['..'] after:absolute after:right-[-10px] after:top-[-10px] after:text-black after:-rotate-45 after:text-[2rem] after:font-bold">
                                        Mia's Florist
                                    </span>
                                    </span>
                                </h3>
                                <p className="text-[#131313] font-bold mb-2 z-10">
                                    Your Best Choice for Delivery in Connecticut
                                </p>
                                <p className="text-[#131313] z-10 mb-8">
                                    We are your premier destination for enchanting floral experiences and fast flower deliveries in East Hartford, Hartford, Manchester, Glastonbury, Bolton, Willimantic, West Hartford, East, Windsor, North Windsor and surrounding areas. Our floral expertise seamlessly blends art with comfort, as we craft meticulously hand-selected arrangements to transform every occasion into a truly memorable one. With Mia's Florist, you can expect fast, hassle-free delivery of fresh flowers straight to your door.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
}

export default ContactUs;
