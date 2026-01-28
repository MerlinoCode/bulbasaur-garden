"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { default as logo } from '../Header/assets/logo.png';
import { default as menu } from '../Header/assets/menu.svg';
import { default as cross } from '../Header/assets/cross.svg';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [changeIconMenu, setChangeIconMenu] = useState(true)

  const handleShowNavbar = () => { setShowNavbar(!showNavbar) }
  const handleChangeIconMenu = () => { setChangeIconMenu(!changeIconMenu) }

  return (
    <header className=" flex justify-between text-white bg-emerald-950 relative mx-4 mt-4 mb-0">
      <Image loading='eager' src={logo} alt="Logo" width={150} height={50} />
      <nav className="flex" onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }}>

        <div className='hidden sm:flex'>
          <ul className='flex gap-8 items-center p-4'>
            <Link href="/">Inicio</Link>
            <Link href="/Garden">Jardín</Link>
            <Link href="/Pokedex">Pokedex</Link>
            <Link href="/Contact">Contacto</Link>
          </ul>
        </div>
        <div className='flex sm:hidden'>
          <div className="flex" onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }}>
            {
              changeIconMenu ? <Image style={{height: 'auto'}} src={menu} alt='menu-icon'></Image> : <Image style={{height: 'auto'}} src={cross} alt='cross-icon'></Image>
            }
          </div>
          {showNavbar && (
              <ul className='absolute top-16 right-0 bg-emerald-950 w-full flex flex-col items-center p-4 gap-16 z-10'>
                <Link href="/">Inicio</Link>
                <Link href="/Garden">Jardín</Link>
                <Link href="/Pokedex">Pokedex</Link>
                <Link href="/Contact">Contacto</Link>
              </ul>
          )}
        </div>
      </nav>
    </header>
  );
}


/*export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [changeIconMenu, setChangeIconMenu] = useState(true);

  const pathname = usePathname();
  const isActive = pathname === '/';

  const handleShowNavbar = () => { setShowNavbar(!showNavbar) }
  const handleChangeIconMenu = () => { setChangeIconMenu(!changeIconMenu) }
  return (
    <header className="header">
      <nav className="navbar">
        <div className="menu-navbar" onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }}>
          {
            changeIconMenu ?
                <div className='menu-icon'>
                  <a><Image src={menu} alt='menu-icon' /></a>
                </div>
              : 
                <div className='menu-icon'>
                  <a><Image src={cross} alt='cross-icon' /></a>
                </div>
          }
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <Link onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }} href="/" className={isActive ? 'active-link' : ''}>Inicio</Link>
            <Link onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }} href="/Garden" className={isActive ? 'active-link' : ''}>Jardín</Link>
            <Link onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }} href="/Pokedex" className={isActive ? 'active-link' : ''}>Pokedex</Link>
            <Link onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }} href="/Contact" className={isActive ? 'active-link' : ''}>Contacto</Link>
          </ul>
        </div>
      </nav>
    </header >
  );
}*/