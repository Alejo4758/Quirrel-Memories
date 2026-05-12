import { useState } from "react";
import { Link } from "react-router";

const btnLinkClass = `
  group relative flex items-center px-4 py-2
  font-cinzel text-sm tracking-wider uppercase no-underline
  text-text-secondary hover:text-accent transition-colors duration-300`;

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState (false);

  return (
    <nav className='w-full px-6 py-4 flex items-center justify-between relative bg-bg-navbar border-b border-border-main'>
      <Link to='/' className='flex flex-col leading-tight no-underline'>
        <span className='text-base font-semibold tracking-wider font-cinzel text-text-primary'>
          Quirrel's Memories
        </span>
      </Link>

      <div className='hidden md:flex items-center gap-2'>
        <Link to='/' className={btnLinkClass}>
          <span className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
          Inicio
          <span className='absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-accent opacity-60 transition-all duration-300'></span>
        </Link>

        <Link to='/' className={btnLinkClass}>
          <span className='absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
          Personajes
          <span className='absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-accent opacity-60 transition-all duration-300'></span>
        </Link>
      </div>

      {/* ---- MENU MOBILE ---- */}
      <button className='md:hidden p-2 text-text-primary' onClick={() => setMenuOpen (!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-main to-transparent'></div>

      {menuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 flex flex-col px-6 py-4 gap-2 bg-bg-navbar border-b border-border-main z-50'>
          <Link to='/' className={btnLinkClass}>Inicio</Link>
          <Link to='/characters' className={btnLinkClass}>Personajes</Link>
        </div>
      )}
    </nav>
  )
}