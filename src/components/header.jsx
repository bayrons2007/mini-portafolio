import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Inicio</NavLink>{" "}
        <NavLink to="/sobre-mi">Sobre mí</NavLink>{" "}
        <NavLink to="/habilidades">Habilidades</NavLink>{" "}
        <NavLink to="/proyectos">Proyectos</NavLink>{" "}
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}

export default Header;