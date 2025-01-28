import React from 'react';
import '../App.css';
import { imagen1 } from '../assets/imagenes/imagenes';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
          <img src={imagen1} alt="Ambrosía Restaurant" />
        </div>
        <ul className="nav-links">
<li>
  <Link to="/" >Inicio 🏠</Link>
</li>
<li>
  <Link to="/add-recipe">Agregar 🍽️</Link>
</li>
<li>
  <Link to="/users">Usuarios 👤</Link>
</li>
<li>
  <Link to="/register-user">Registrar 👤</Link>
</li>
</ul>
    </nav>
  );
};

export default Navbar;


