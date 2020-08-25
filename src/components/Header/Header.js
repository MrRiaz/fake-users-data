import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <h2>Here is some Important Users list</h2>
            <nav>
                <a href="/male ">Male </a>
                <a href="/female"> Female</a> 
                <a href="/lego">Lego</a>
            </nav>
        </div>
    );
};

export default Header;