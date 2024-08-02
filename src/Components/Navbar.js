import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav class="navbar">
        <a href="#" class="logo">TiendaOnline</a>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
        </ul>
        <div class="search-box">
            <input type="text" placeholder="Buscar..."/>
            <button type="submit">Buscar</button>
        </div>
    </nav>
  )
}
