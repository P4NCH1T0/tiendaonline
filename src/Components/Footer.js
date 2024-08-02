import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    
<footer class="footer">
    <div class="footer-container">
        <div class="footer-section about">
            <h2 class="logo">TiendaDeLujo</h2>
            <p>Ofrecemos los mejores productos de lujo para nuestros clientes más exigentes.</p>
            <div class="contact">
                <span><i class="fas fa-phone"></i> &nbsp; +123 456 7890</span>
                <span><i class="fas fa-envelope"></i> &nbsp; info@tiendadelujo.com</span>
            </div>
            <div class="socials">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="footer-section links">
            <h2>Links Rápidos</h2>
            <br/>
            <ul>
                <a href="#"><li>Inicio</li></a>
                <a href="#"><li>Productos</li></a>
                <a href="#"><li>Ofertas</li></a>
                <a href="#"><li>Contacto</li></a>
                <a href="#"><li>Sobre Nosotros</li></a>
            </ul>
        </div>
        <div class="footer-section contact-form">
            <h2>Contacto</h2>
            <br/>
            <form action="#" method="post">
                <input type="email" name="email" class="text-input contact-input" placeholder="Tu correo..."/>
                <textarea name="message" class="text-input contact-input" placeholder="Tu mensaje..."></textarea>
                <button type="submit" class="btn btn-big">Enviar</button>
            </form>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 TiendaDeLujo | Diseñado por TiendaDeLujo
    </div>
</footer>

  )
}
