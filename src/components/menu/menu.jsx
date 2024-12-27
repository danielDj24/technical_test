import React, { useState } from 'react';
import './menu.css';
import logo from '../../assets/Logo.svg';
import { Search, Phone, LocationOn, ShoppingCart, Close  ,Menu as MenuIcon } from '@mui/icons-material'; // Cambié el nombre del ícono a MenuIcon

const Menu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    
    return (
        <div className="menu-container">
            {/* Menú de escritorio */}
            <div className="menu-desktop">
                <div className="menu-item-top">
                    <div className="menu-item-contact font-sf-pro text-18 leading-32">
                        <p><Phone className="icon" /> <strong>+1 (800) 312 - 2121</strong></p>
                        <a href="/"> <img src={logo} alt="Logo" className="logo" /> </a>
                        <p><LocationOn className="icon" /> <strong>172 14th Street, Office 503, NY</strong></p>
                    </div>
                </div>
                <div className="menu-item-buttom">
                    <div className="menu-item-buttom-elements font-sf-pro text-18 leading-32">
                        <a href="/">Home</a>
                        <a href="/">Products</a>
                        <a href="/">About</a>
                        <a href="/contact_us">Contact</a>
                    </div>
                    <div className="menu-item-buttom-search font-sf-pro text-18 leading-32">
                        <input
                            type="text"
                            placeholder="Search"
                            className="menu-item-buttom-search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Search className="icon" />
                    </div>
                    <div className="menu-item-buttom-cart-and-points font-sf-pro text-18 leading-32">
                        <div className="menu-item-buttom-cart">
                            <ShoppingCart className="icon" />
                            <p><strong>0</strong></p>
                        </div>
                        <div className="menu-item-buttom-points">
                            <span className="point"></span>
                            <span className="point"></span>
                            <span className="point"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            <div className="menu-mobile">
                {/* Teléfono en la parte superior */}
                <div className="menu-phone">
                    <Phone className="icon" />
                    <strong>+1 (800) 312 - 2121</strong>
                </div>

                <div className="menu-mobile-header">
                    {/* Logo en el centro */}
                    <div className="menu-logo">
                        <img src={logo} alt="Logo" className="logo" />
                    </div>

                    {/* Iconos (Carrito y Menú Hamburguesa) */}
                    <div className="menu-mobile-actions">
                        <Search className="icon" />
                        <div className="menu-cart">
                            <ShoppingCart className="icon" />
                            <p><strong>0</strong></p>
                        </div>
                        <MenuIcon className="icon menu-hamburger" onClick={toggleMenu} />
                    </div>
                </div>

                {/* Menú desplegable */}
                <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu-overlay-content">
                        <Close  className="icon close-menu" onClick={closeMenu} />
                        <a href="/">Home</a>
                        <a href="/">Products</a>
                        <a href="/">About</a>
                        <a href="/contact_us">Contact</a>
                        <p className="menu-address">
                            <LocationOn className="icon" />
                            172 14th Street, Office 503, NY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
