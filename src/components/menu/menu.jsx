import React from 'react';
import './menu.css';
import logo from '../../assets/Logo.svg';
import { Search, Phone, LocationOn, ShoppingCart } from '@mui/icons-material'; 


const Menu = () => {
    
return (
    <div className="menu-container">
        {/* parte superior del menu */}
        <div className="menu-item-top">
            <div className="menu-item-contact">
                <p><Phone className="icon" /> <strong>+1 (800) 312 - 2121</strong></p>
                <a href="/"> <img src={logo} alt="Logo" className="logo" /> </a>
                <p><LocationOn className="icon" /> <strong>172 14th Street, Office 503, NY</strong> </p>
            </div>
        </div>

        {/* parte inferior del menu */}
        <div className="menu-item-buttom">
            <div className="menu-item-buttom-elements">
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
            <div className="menu-item-buttom-search">
                <p> Search <Search className='icon'/></p>
            </div>
            <div className="menu-item-buttom-cart-and-points">
                <div className="menu-item-buttom-cart">
                    <ShoppingCart className='icon'/>
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