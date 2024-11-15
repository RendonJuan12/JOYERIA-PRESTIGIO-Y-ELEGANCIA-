// src/components/Home.jsx
import React from 'react';
import './Home.css'; // Importamos los estilos

const Home = () => {
  return (
    <div className="home-container">
      <div className="products">
        <div className="product">
          <h2>Relojes</h2>
          <img src="https://i.pinimg.com/736x/ef/ba/d8/efbad86dd6badf1e864b9c870b8ae2cb.jpg" alt="Reloj" />
        </div>
        <div className="product">
          <h2>Anillos</h2>
          <img src="https://okdiario.com/coolthelifestyle/img/2023/04/29/diamante.jpg" alt="Anillo" />
        </div>
        <div className="product">
          <h2>Cadenas</h2>
          <img src="https://i.pinimg.com/originals/98/82/5d/98825db9e90b47ae40385468c8e6694f.jpg" alt="Cadena" />
        </div>
      </div>
    </div>
  );
};

export default Home;
