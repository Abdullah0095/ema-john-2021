import React from 'react';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div id="header">
            <img src={logo} />
            <nav id="header-nav">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;