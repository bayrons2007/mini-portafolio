function SobreMi() {
  const foto = "";

  return (
    <section>
      <div className="sobre-presentacion">
        <div className="foto-personal">
          {foto ? (
            <img src={foto} alt="Mi fotografía" />
          ) : (
            <span>Tu foto aquí</span>
          )}
        </div>

        <div>
          <p className="etiqueta">CONÓCEME</p>
          <h1>Sobre mí</h1>
          <p>Voy en primer año de Ingeniería Civil Informática, tengo 19 años y me 
            apasiona la programación.</p>
        </div>
      </div>

      <div className="bloque">
        <h2>¿Qué estudio?</h2>
        <p>Estudio Ingeniería Civil Informática en la Universidad de catolica de temuco.</p>
      </div>

      <div className="bloque">
        <h2>¿Qué me interesa?</h2>
        <ul className="lista">
          <li>Ciber Seguridad</li>
          <li>Programacion de base de datos</li>
          <li>Inteligencia Artificial</li>
        </ul>
      </div>

      <div className="bloque">
        <h2>¿Hacia dónde quiero ir?</h2>
        <p>Quiero especializarme en el área de ciberseguridad y 
          contribuir al desarrollo de soluciones tecnológicas que protejan la información y 
          los sistemas digitales.</p>
      </div>
    </section>
  );
}

export default SobreMi;