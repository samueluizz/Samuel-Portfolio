import {
  FaLinkedin,
  FaWhatsappSquare,
  FaGithubSquare,
  FaEnvelope,
} from 'react-icons/fa';

export default function contact() {
  return (
    <section id='contact' className='py-10 lg:pb-30 bg-light dark:bg-dark'>
      <div className=' mx-auto my-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
          <a
            href='https://wa.me/5511947916104'
            target='_blank'
            rel='noopener noreferrer'
            className='p-6 dark:bg-black dark:text-light rounded-lg shadow-md dark:hover:shadow-light hover:shadow-dark hover:shadow-lg 
            transition-shadow border-1 border-dark dark:border-light flex flex-col items-center justify-center space-y-4 cursor-pointer'
          >
            <FaWhatsappSquare size={40} />

            <span>WHATSAPP</span>
          </a>
          <a
            href='https://www.linkedin.com/in/samuelluiz/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-6 dark:bg-black dark:text-light rounded-lg shadow-md dark:hover:shadow-light hover:shadow-dark hover:shadow-lg 
            transition-shadow border-1 border-dark dark:border-light flex flex-col items-center justify-center space-y-4 cursor-pointer'
          >
            <FaLinkedin size={40} />

            <span>LINKEDIN</span>
          </a>
          <a
            href='https://github.com/samueluizz'
            target='_blank'
            rel='noopener noreferrer'
            className='p-6 dark:bg-black dark:text-light rounded-lg shadow-md dark:hover:shadow-light hover:shadow-dark hover:shadow-lg 
            transition-shadow border-1 border-dark dark:border-light flex flex-col items-center justify-center space-y-4 cursor-pointer'
          >
            <FaGithubSquare size={40} />

            <span>GITHUB</span>
          </a>
          <a
            href='mailto:s4mueluiz@icloud.com'
            className='p-6 dark:bg-black dark:text-light rounded-lg shadow-md dark:hover:shadow-light hover:shadow-dark hover:shadow-lg 
            transition-shadow border-1 border-dark dark:border-light flex flex-col items-center justify-center space-y-4 cursor-pointer'
          >
            <FaEnvelope size={40} />

            <span>E-MAIL</span>
          </a>
        </div>
      </div>
    </section>
  );
}
