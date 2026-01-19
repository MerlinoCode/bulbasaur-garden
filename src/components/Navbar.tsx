import Link from 'next/link';
import Image from 'next/image'
import {default as logo} from '../assets/logo.png'

export default function Navbar() {
  return (
    <header>
      <div className='main-logo'>
        <Image src={logo} width={190} height={90} alt="Main logo" />
      </div>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link href="/">Inicio</Link>{' '}
        <Link href="/Garden">Jardín</Link>{' '}
        <Link href="/Pokedex">Pokedex</Link>{' '}
        <Link href="/Contact">Contacto</Link>{' '}
      </nav>
    </header>
  );
}
