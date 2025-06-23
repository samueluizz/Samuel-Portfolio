import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer
      className='max-h-30 flex justify-between items-center border-t-2
     text-dark dark:text-light bg-light dark:bg-dark'
    >
      <div className='m-10 md:m-15 text-xs md:text-sm'>
        <p>© 2025 Samuel Luiz. Todos os direitos reservados.</p>
      </div>

      <div
        className='my-10 mr-5 flex justify-center items-center bg-transparent
        md:text-sm text-xs w-50 h-10 md:w-30 md:h-10 border-2 hover:bg-dark dark:hover:bg-light
        hover:text-light dark:hover:text-dark border-dark dark:border-light rounded-full'
      >
        <Link className='cursor-pointer' to='hero' smooth={true} duration={500}>
          Voltar ao topo
        </Link>
      </div>
    </footer>
  );
}
