import React, { useState } from 'react';
import './menu.css';
import logo from '../../assets/Logo.svg';
import { Search, Phone, LocationOn, ShoppingCart } from '@mui/icons-material';

const Menu = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="menu-container">
            {/* Parte superior del menú */}
            <div className="menu-item-top">
                <div className="menu-item-contact font-sf-pro text-18 leading-32">
                    <p><Phone className="icon" /> <strong>+1 (800) 312 - 2121</strong></p>
                    <a href="/"> <img src={logo} alt="Logo" className="logo" /> </a>
                    <p><LocationOn className="icon" /> <strong>172 14th Street, Office 503, NY</strong> </p>
                </div>
            </div>

            {/* Parte inferior del menú */}
            <div className="menu-item-buttom">
                <div className="menu-item-buttom-elements  font-sf-pro text-18 leading-32">
                    <a href="/">Home</a>
                    <a href="/">Products</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
                <div className="menu-item-buttom-search font-sf-pro text-18 leading-32">
                    <input
                        type="text"
                        placeholder="Search"
                        className="menu-item-buttom-search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Actualiza el estado con el texto ingresado
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
    );
};

export default Menu;
