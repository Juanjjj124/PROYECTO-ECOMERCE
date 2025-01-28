import React from 'react';
import '../App.css'
import {imagen1} from '../assets/imagenes/imagenes'

const Footer: React.FC = () => {
  return (
<footer className="footer">
<div className="logo">
          <img src={imagen1} alt="Ambrosía Restaurant" />
        </div>
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Home</h4>
          <ul>
            <li>Recomendaciones</li>
            <li>Categorías</li>
            <li>Ubicanos</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Menu</h4>
          <ul>
            <li>Desayuno</li>
            <li>Almuerzos</li>
            <li>Cena</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>¡Conócenos!</h4>
          <ul>
            <li>Sobre nosotros</li>
            <li>Reservas</li>
            <li>Redes Sociales</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Snapchat">
          <i className="fab fa-snapchat"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>Ambrosía Restaurant © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
