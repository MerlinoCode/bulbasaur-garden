export default function Navbar() {
  return (<footer style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: '2rem', textAlign: 'center' }}>
    &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
  </footer>);
};