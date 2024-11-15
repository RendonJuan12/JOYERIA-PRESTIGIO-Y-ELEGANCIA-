import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'; // Asegúrate de que esta ruta sea correcta
import Productos from './components/Productos';
import Promociones from './components/Promociones';
import Contacto from './components/Contacto';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          {/* Contenedor del logo y título */}
          <div className="logo-title-container">
            <img 
              src="public/images/logo.png"  // Asegúrate de que la ruta sea correcta
              alt="Joyería Prestigio y Elegancia" 
              className="logo-img" 
            />
            <center><h1>Joyería Prestigio y Elegancia</h1></center>
          </div>

          {/* Navegación */}
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/promociones">Promociones</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer>
          <p>© 2024 Juan Camilo Quintana Rendón, Samuel Acevedo Ramírez Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
