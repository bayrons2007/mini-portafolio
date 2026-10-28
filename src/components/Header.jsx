import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="barra">
        <NavLink to="/" className="marca">
          MiPortafolio
        </NavLink>

        <nav>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;