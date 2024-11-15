// src/components/Promociones.jsx
import React from 'react';
import './Promociones.css';

const Promociones = () => {
  return (
    <div className="promociones-container">
      <h2>Promociones Especiales</h2>
      <div className="promotion-list">
        <div className="promotion-item">
          <h3>Descuento en Relojes</h3>
          <p>20% de descuento en todos los relojes de lujo.</p>
        </div>
        <div className="promotion-item">
          <h3>Compra 2 Anillos y Obtén 1 Gratis</h3>
          <p>Aplica para anillos seleccionados.</p>
        </div>
        <div className="promotion-item">
          <h3>Envío Gratis en Compras Mayores a $100</h3>
          <p>Disponible para todas las joyas.</p>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
