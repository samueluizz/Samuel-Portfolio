import { useState } from 'react';
import { Link } from 'react-scroll';
import DarkMode from './DarkMode';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const HEADER_HEIGHT = -80;

  const sections = [
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Tech Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header
      className=' fixed top-0 right-0 w-full h-auto bg-light text-dark dark:bg-dark 
    dark:text-light p-4 z-50 transition-all duration-300 border-b'
    >
      <nav className='flex justify-between items-center gap-4'>
        <div className='cursor-pointer text-bold text-2xl'>
          <Link to='hero'>
            <span className='text-3xl font-bold'>Samuel Luiz</span>
          </Link>
        </div>
        <ul className='hidden md:flex space-x-6'>
          {sections.slice(0, 3).map((section) => (
            <li key={section.id}>
              <Link
                offset={HEADER_HEIGHT}
                to={section.id}
                smooth={true}
                duration={500}
                className='hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer'
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex space-x-4 text-dark dark:text-light'>
          <button
            className='hidden md:block border-2 rounded-2xl p-2 cursor-pointer
           hover:bg-dark hover:text-light
           dark:hover:bg-light dark:hover:text-dark'
          >
            <Link to='contact' smooth={true} duration={500}>
              Contato
            </Link>
          </button>

          <div>
            <DarkMode />
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 focus:outline-none'
            aria-label='Menu'
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`
        md:hidden 
        bg-light dark:bg-dark 
        overflow-hidden 
        transition-all duration-300 ease-in-out 
        ${isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}
      `}
      >
        <div className='border-t border-border pt-2 pb-4'>
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className='block text-center py-3 px-4 text-base font-medium
              text-muted-foreground hover:text-gray-500 dark:hover:text-gray-300 
              cursor-pointer transition-colors'
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
