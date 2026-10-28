import TarjetaProyecto from "../components/TarjetaProyecto";

function Proyectos() {
  return (
    <section>
      <p className="etiqueta">MI TRABAJO</p>
      <h1>Mis proyectos</h1>
      <p>algunos de los trabajos que he realizado.</p>

      <div className="proyectos">
        <TarjetaProyecto
          titulo="Menu"
          descripcion="Un menu de un reustaurante inventado, que usa css, html y 
          javascript, para poder mostrar un menu de comida, con sus precios y una 
          imagen de cada plato."
          enlace="/menu/index.html"
          imagen="/public/imagenes/menu.png"
        />

        <TarjetaProyecto
          titulo="Tetris"
          descripcion="Un juego de lógica clásico implementado en JavaScript, 
          con un diseño responsive y controles intuitivos, ademas de css y html, para 
          poder jugarlo en cualquier dispositivo."
          enlace="/tetris/index.html"
          imagen="/public/imagenes/tetris.png"
        />
      </div>
    </section>
  );
}

export default Proyectos;