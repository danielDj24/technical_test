import React, { useState } from "react";
import './footer.css';
import footerLogo from '../../assets/Logo White.svg';
import { LocationOn, Email } from '@mui/icons-material'; 

const Footer = () => {
    // Estado para manejar el valor del email y el estado de error
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Función para manejar la validación y el envío
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (email.trim() === '') {
            setError('Please enter your email'); 
        } else {
            setError(''); 
            alert('Thank you for subscribing!'); 
        }
    };

    return (
        <div className="footer-container">
            <div className="footer-top-logo">
                <img src={footerLogo} alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-items-top">
                <div className="footer-links-elements">
                    <a href="/" className="font-sf-pro text-18 leading-32">Products</a>
                    <a href="/" className="font-sf-pro text-18 leading-32">About Us</a>
                    <a href="/" className="font-sf-pro text-18 leading-32">Contact</a>
                    <a href="/" className="font-sf-pro text-18 leading-32">Frequent questions</a>
                    <a href="/" className="font-sf-pro text-18 leading-32">Visit our blog</a>
                    <div className="footer-login">
                        <button className="footer-login-button font-sf-pro text-18 leading-32"><strong>Login System</strong></button>
                    </div>
                </div>
                <div className="footer-subscribe-elements">
                    <p className="font-sf-pro text-18 leading-32"><strong>Subscribe for Exclusive Email Offers</strong></p>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className={`footer-email-input ${error ? 'border-red-500' : ''}`} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Mostrar mensaje de error si está vacío */}
                    <div className="footer-subscribe">
                        <button 
                            className="footer-subscribe-button font-sf-pro text-18 leading-32"
                            onClick={handleSubmit} // Llama a handleSubmit cuando se hace click en el botón
                        >
                            <strong>Sign me up</strong>
                        </button>
                    </div>
                </div>
                <div className="footer-contact-elements">
                    <div className="footer-contact-location">
                        <p className="font-sf-pro text-18 leading-32"><LocationOn className="icon" /> <strong>Location</strong></p>
                        <p className="font-sf-pro text-18 leading-32">35 Pearl St suite 103, New Britain, CT 06051</p>
                        <p className="font-sf-pro text-18 leading-32"><Email className="icon" /> <strong>Email</strong> </p>
                        <p className="font-sf-pro text-18 leading-32">info@wiseatp.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-elements">
                <div className="footer-copyright">
                    <p className="font-sf-pro text-18 leading-32">Terms & Conditions</p>
                    <p className="font-sf-pro text-18 leading-32">Privacy Policy 2021</p>
                </div>
                <p className="font-sf-pro text-18 leading-32 mt-2">Copyright © Ingenuity & Solutions</p>
            </div>
        </div>
    );
}

export default Footer;
