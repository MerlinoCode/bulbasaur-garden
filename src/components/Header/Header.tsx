"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { default as menu } from '../Header/assets/menu.svg';
import { default as cross } from '../Header/assets/cross.svg';

const Logo = () => (
  <div className="flex items-center gap-4 group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-500/50 transition-all duration-700 rounded-full scale-125" />

      {/* Minimalist bulb SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
      >
        <defs>
          <linearGradient id="bulbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        {/* Geometric Bulb Body */}
        <path
          d="M50 10 C30 10 15 35 15 65 C15 85 30 92 50 92 C70 92 85 85 85 65 C85 35 70 10 50 10Z"
          fill="url(#bulbGradient)"
        />
        {/* Highlight/Leaf Detail */}
        <path
          d="M50 10 C60 10 75 30 75 55 M50 10 C40 10 25 30 25 55"
          stroke="white"
          strokeWidth="3"
          fill="none"
          opacity="0.2"
          strokeLinecap="round"
        />
        {/* Glossy Reflection */}
        <path
          d="M35 60 C35 50 45 40 50 40"
          stroke="white"
          strokeWidth="4"
          fill="none"
          opacity="0.1"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <div className="flex flex-col justify-center">
      <span className="text-xl font-black tracking-tighter text-white leading-[0.85] flex items-center">
        BULBASAUR
      </span>
      <span className="text-[10px] font-black tracking-[0.45em] text-emerald-500 uppercase leading-[0.85] mt-1.5 opacity-80">
        GARDEN
      </span>
    </div>
  </div>
);

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
    <>
      <header className="sticky top-0 z-50 w-full bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="relative transition-all duration-300">
          <Logo />
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

    </header>

    {/* Mobile Navigation Drawer */}
    <div 
      className={`fixed inset-0 top-20 bg-zinc-950 z-40 md:hidden transition-transform duration-300 ease-out ${showNavbar ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <nav className="p-8">
        <ul className="space-y-8 text-center pt-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li 
                key={link.href} 
                onClick={() => setShowNavbar(false)}
                className={`transition-all duration-300 ${showNavbar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: showNavbar ? `${index * 75}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  className={`block text-3xl font-black uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  </>
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