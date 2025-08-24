import React from 'react';
import Footer from '../components/Footer';
import '../styles/Home.css';

function HomePage() {
  const categorias = [
    { link: "#", categoria: "Ropa" },
    { link: "#", categoria: "Tecnología" },
    { link: "#", categoria: "Decoración y Hogar" },
    { link: "#", categoria: "Deportes" }
  ];

  return (
    <>
      <section id="categorias" className="mis-categorias seccion-clara d-flex flex-column align-items-center justify-content-center">
        <div className="container text-center categorias-contenedor">
          <div className="row">
            {categorias.map((espacio, index) => (
              <div key={index} className="col-12 col-md-6 mb-4">
                <a href={espacio.link} target="_blank" rel="noopener noreferrer">
                  <div className={`proyecto ${espacio.categoria.replace(/\s+/g, '-')}`}>
                    <div className="overlay">
                      <p>{espacio.categoria}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
