import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#">LuxFashion</a>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                </div>
                <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
                    <li className="navbar-item"><a href="#">Hombre</a></li>
                    <li className="navbar-item"><a href="#">Mujer</a></li>
                    <li className="navbar-item"><a href="#">Colección</a></li>
                    <li className="navbar-item"><a href="#">Ofertas</a></li>
                    <li className="navbar-item"><a href="#">Sobre Nosotros</a></li>
                    <li className="navbar-item"><a href="#">Cuenta</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
