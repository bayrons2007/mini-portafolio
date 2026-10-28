import { useState } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    setConfirmacion("");

    const nuevosErrores = {};

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "Ingresa tu nombre.";
    }

    if (correo.trim() === "") {
      nuevosErrores.correo = "Ingresa tu correo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      nuevosErrores.correo = "Ingresa un correo válido.";
    }

    if (mensaje.trim() === "") {
      nuevosErrores.mensaje = "Escribe un mensaje.";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setConfirmacion(
        `Gracias, ${nombre.trim()}. El formulario se completó correctamente. Este envío es de prueba y no envía correos.`
      );

      setNombre("");
      setCorreo("");
      setMensaje("");
    }
  }

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          required
          value={nombre}
          onChange={(evento) => {
            setNombre(evento.target.value);
            setConfirmacion("");
          }}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className="error" role="alert">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          autoComplete="email"
          required
          value={correo}
          onChange={(evento) => {
            setCorreo(evento.target.value);
            setConfirmacion("");
          }}
          aria-invalid={Boolean(errores.correo)}
          aria-describedby={errores.correo ? "error-correo" : undefined}
        />
        {errores.correo && (
          <p id="error-correo" className="error" role="alert">
            {errores.correo}
          </p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          rows={5}
          required
          value={mensaje}
          onChange={(evento) => {
            setMensaje(evento.target.value);
            setConfirmacion("");
          }}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="error" role="alert">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button type="submit">Enviar mensaje</button>

      {confirmacion && (
        <p className="confirmacion" role="status">
          {confirmacion}
        </p>
      )}
    </form>
  );
}

export default FormularioContacto;