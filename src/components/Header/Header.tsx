"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { default as logo } from '../Header/assets/logo.png';
import { default as menu } from '../Header/assets/menu.svg';
import { default as cross } from '../Header/assets/cross.svg';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-red border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          MyApp
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors
                    ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Abrir menú"
        >
          {/* Icono hamburguesa */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium
                      ${isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
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
