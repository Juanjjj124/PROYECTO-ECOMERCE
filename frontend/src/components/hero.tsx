import React from 'react';
import '../App.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="section-ti">BIENVENIDO A AMBROSÍA</h1>
        <a href="#menu" className="btn"><b>🥢Menu</b></a>
      </div>
    </section>
  );
};

export default Hero;
