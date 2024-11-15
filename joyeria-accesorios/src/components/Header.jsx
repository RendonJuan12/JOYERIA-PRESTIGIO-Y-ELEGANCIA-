// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Asegúrate de tener tus estilos aquí

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Ruta al logo */}
        <img src="public/images/logo.png" alt="Logo" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
