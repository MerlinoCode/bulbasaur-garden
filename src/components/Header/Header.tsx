"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { default as logo } from '../Header/assets/logo.png';
import { default as menu } from '../Header/assets/menu.svg';
import { default as cross } from '../Header/assets/cross.svg';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Jardín', href: '/Garden' },
    { name: 'Pokedex', href: '/Pokedex' },
    { name: 'Contacto', href: '/Contact' },
  ];

  const handleToggle = () => setShowNavbar(!showNavbar);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="relative transition-transform duration-300 hover:scale-105">
          <Image loading='eager' src={logo} alt="Logo" width={140} height={40} className="filter brightness-0 invert" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-white ${isActive ? 'text-white' : 'text-zinc-500'}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          <Image src={showNavbar ? cross : menu} alt='menu-toggle' width={24} height={24} className="filter brightness-0 invert" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 top-20 bg-zinc-950/95 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden ${showNavbar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <nav className="p-8">
          <ul className="space-y-8 text-center pt-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} onClick={() => setShowNavbar(false)}>
                  <Link
                    href={link.href}
                    className={`block text-3xl font-black uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-700 hover:text-zinc-500'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
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