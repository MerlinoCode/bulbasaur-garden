import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Inicio</Link>{' '}
      <Link href="/Garden">Jardín</Link>{' '}
      <Link href="/Pokedex">Pokedex</Link>{' '}
      <Link href="/Contact">Contacto</Link>{' '}
    </nav>
  );
}
