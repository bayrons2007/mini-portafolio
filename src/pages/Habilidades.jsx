function Habilidades() {
  const habilidades = [
    { nombre: "Python", nivel: "Intermedio", porcentaje: 70 },
    { nombre: "JavaScript", nivel: "Básico", porcentaje: 50 },
    { nombre: "React", nivel: "Básico", porcentaje: 40 },
    { nombre: "Node.js", nivel: "Básico", porcentaje: 30 },
    { nombre: "CSS", nivel: "Intermedio", porcentaje: 60 },
    { nombre: "HTML", nivel: "Avanzado", porcentaje: 80 },
  ];

  const herramientas = [  
    "React",
    "TypeScript",
    "Git",
  ];

  return (
    <section>
      <p className="etiqueta">LO QUE ESTOY APRENDIENDO</p>
      <h1>Habilidades y lenguajes</h1>
      <p>Actualmente estoy desarrollando mis habilidades en diversas tecnologías y 
        lenguajes de programación, estas son algunas de las que he estado trabajando.</p>

      <h2>Tecnologías</h2>

      <div className="habilidades-grid">
        {habilidades.map((habilidad) => (
          <article className="habilidad" key={habilidad.nombre}>
            <span className="icono-tecnologia" aria-hidden="true">
              {"</>"}
            </span>

            <h3>{habilidad.nombre}</h3>
            <p>{habilidad.nivel}</p>

            <progress
              value={habilidad.porcentaje}
              max="100"
              aria-label={`Nivel de ${habilidad.nombre}`}
            />

            <span className="porcentaje">
              {habilidad.porcentaje}%
            </span>
          </article>
        ))}
      </div>

      <p className="nota">Niveles estimados mediante autoevaluación.</p>

      <h2>Herramientas</h2>

      <ul className="herramientas">
        {herramientas.map((herramienta) => (
          <li key={herramienta}>{herramienta}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;