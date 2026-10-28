function TarjetaProyecto({ titulo, descripcion, enlace, imagen }) {
  return (
    <article className="tarjeta-proyecto">
      <div className="imagen-proyecto">
        {imagen ? (
          <img src={imagen} alt={`Vista del proyecto ${titulo}`} />
        ) : (
          <span>Imagen del proyecto</span>
        )}
      </div>

      <div className="contenido-proyecto">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>

        {enlace && (
          <a
            className="enlace-proyecto"
            href={enlace}
            rel="noopener noreferrer"
          >
            Ver repositorio ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default TarjetaProyecto;