import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar la suscripción al correo electrónico
        alert(`Correo enviado: ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column footer-social">
                    <h3 className="footer-title">Redes Sociales</h3>
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>
                <div className="footer-column footer-form">
                    <h3 className="footer-title">Suscríbete</h3>
                    <form onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            placeholder="Tu correo electrónico" 
                            value={email}
                            onChange={handleEmailChange}
                            required 
                            className="footer-email-input"
                        />
                        <button type="submit" className="footer-submit-button">Suscribirse</button>
                    </form>
                </div>
                <div className="footer-column footer-info">
                    <h3 className="footer-title">Información</h3>
                    <p className="footer-address">Dirección: Calle Ficticia 123, Ciudad, País</p>
                    <p className="footer-terms">Cláusulas: <a href="#">Términos y Condiciones</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
