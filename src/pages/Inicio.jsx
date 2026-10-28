import { Link } from "react-router-dom";

function Inicio() {
  const imagen = "/public/imagenes/polar.jpeg";

  return (
    <section>
      <div className="presentacion">
        <div>
          <p className="etiqueta">MI PORTAFOLIO PERSONAL</p>
          <h1>Hola, soy Bayron Salgado</h1>
          <p className="subtitulo">Estudiante de Ingeniería Civil Informática</p>
          <p>
            Bienvenido a mi portafolio personal, donde comparto mis proyectos y
            experiencias en el mundo de la programación y el desarrollo de software, quiero
            mostrarles mis trabajos al ser un estudiante de primer año
            de Ingeniería Civil Informática, y mi objetivo es seguir aprendiendo 
            y creciendo en este campo.
          </p>

          <Link to="/proyectos" className="boton">
            Explorar proyectos →
          </Link>
        </div>

        <div className="imagen-presentacion">
          {imagen ? (
            <img src={imagen} alt="Presentación personal" />
          ) : (
            <span></span>
          )}
        </div>
      </div>

      <div className="destacados">
        <article className="destacado">
          <span className="simbolo" aria-hidden="true">{"</>"}</span>
          <h2>Me interesa programar, siempre e sentido que es unico</h2>
        </article>

        <article className="destacado">
          <span className="simbolo" aria-hidden="true">▣</span>
          <h2>Proyectos de programacion realizados durante mi formacion</h2>
        </article>

        <article className="destacado">
          <span className="simbolo" aria-hidden="true">↗</span>
          <h2>Poder llegar a aprender de todo y elegir mi camino para dedicarme.</h2>
        </article>

        <article className="destacado">
          <span className="simbolo" aria-hidden="true">★</span>
          <h2>Poder llegar a hacer los trabajos hasta terminarlos</h2>
        </article>
      </div>
    </section>
  );
}

export default Inicio;