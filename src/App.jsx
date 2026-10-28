import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";

import Inicio from "./pages/inicio";
import SobreMi from "./pages/sobreMi";
import Habilidades from "./pages/habilidades";
import Proyectos from "./pages/proyectos";
import Contacto from "./pages/contacto";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;