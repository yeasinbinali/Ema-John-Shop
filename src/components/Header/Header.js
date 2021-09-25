import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-section">
            <div>
                <img className="header-image" src={logo} alt="" />
            </div>
            <div className="header-navbar">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/manage">Manage Inventory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;