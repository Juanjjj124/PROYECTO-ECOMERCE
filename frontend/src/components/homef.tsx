import React from 'react';
import '../App.css'
import {imagen3, imagen4, imagen5} from '../assets/imagenes/imagenes'
const Homef: React.FC = () => {
    return (
    <>
      <section id="recomend" className="recomend">
        <h2 className="section-title">¡Recomendaciones de Hoy!</h2>
        <div className="menu-items">
        <div className="menu-item">
          <img src={imagen3} alt="Dish 1" />
          <h3>PANCAKES</h3>
          <p>Una mezcla de sabores exquisitos.</p>
          <span className="price">$75.000</span>
        </div>
        <div className="menu-item">
          <img src={imagen4} alt="Dish 2" />
          <h3>BULFISH</h3>
          <p>Perfectamente elaborada para tu paladar.</p>
          <span className="price">$98.900</span>
        </div>
        <div className="menu-item">
          <img src={imagen5} alt="Dish 3" />
          <h3>GREEN ICE CREAM</h3>
          <p>Paraíso de sabores suaves y extravagantes.</p>
          <span className="price">$75.000</span>
        </div>
      </div>
      </section>
      <section id="menu" className="menu">
      <h2 className="section-title">¡Menu!</h2>
      </section>
    </>
    );
  };
  
  export default Homef;