import FormularioContacto from "../components/FormularioContacto";

function Contacto() {
  return (
    <section className="pagina-contacto">
      <p className="etiqueta">HABLEMOS</p>
      <h1>Contacto</h1>
      <p>¿Tienes un proyecto en mente? ¿Quieres saber más sobre mi trabajo? ¡Contáctame!</p>

      <FormularioContacto />

      <p className="nota">
        Formulario de demostración: no envía correos reales.
      </p>
    </section>
  );
}

export default Contacto;