import { useEffect, useState } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa6';

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className='relative w-12 h-12 flex items-center justify-center 
    bg-dark text-light 
    dark:bg-light dark:text-dark 
    hover:bg-light hover:text-dark 
    dark:hover:bg-dark dark:hover:text-light 
    rounded-full transition-all duration-300'
    >
      <FaRegMoon
        className={`w-6 h-6 cursor-pointer absolute transition-all duration-300 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <FaRegSun
        className={`w-6 h-6 cursor-pointer transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  );
};

export default DarkMode;
