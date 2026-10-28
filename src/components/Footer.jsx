const currentYear = new Date().getFullYear();

function Footer({ nombre }) {
  return (
    <footer>
      <p>© {currentYear} — {nombre}</p>
    </footer>
  );
}

export default Footer;