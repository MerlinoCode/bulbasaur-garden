export default function Footer() {
  return (<footer className="p-4 mt-4 text-center text-white" style={{borderTop: '1px solid #ccc'}}>
    &copy; {new Date().getFullYear()} Jardín Bulbasaur. Todos los derechos reservados.
  </footer>);
};