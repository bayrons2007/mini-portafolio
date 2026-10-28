import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />

      <main className="contenedor">
        <Outlet />
      </main>

      <Footer nombre="Bayron Salgado" />
    </>
  );
}

export default Layout;