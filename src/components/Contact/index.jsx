import {
  FaLinkedin,
  FaWhatsappSquare,
  FaGithubSquare,
  FaEnvelope,
} from 'react-icons/fa';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function contact() {
  const contact = [
    {
      link: 'https://wa.me/5511947916104',
      icon: <FaWhatsappSquare size={40} />,
      title: 'WHATSAPP',
    },
    {
      link: 'https://www.linkedin.com/in/samuelluiz/',
      icon: <FaLinkedin size={40} />,
      title: 'LINKEDIN',
    },
    {
      link: 'https://github.com/samueluizz',
      icon: <FaGithubSquare size={40} />,
      title: 'GITHUB',
    },
    {
      link: 'mailto:s4mueluiz@icloud.com',
      icon: <FaEnvelope size={40} />,
      title: 'E-MAIL',
    },
  ];

  return (
    <section id='contact' className='py-10 lg:pb-30 bg-light dark:bg-dark'>
      <FadeInWhenVisible>
        <div className=' mx-auto my-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
            {contact.map((cont, index) => (
              <FadeInWhenVisible key={cont.title} delay={0.1 + index * 0.2}>
                <a
                  href={cont.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-6 dark:bg-black dark:text-light rounded-lg shadow-md dark:hover:shadow-light hover:shadow-dark hover:shadow-lg 
            transition-shadow border-1 border-dark dark:border-light flex flex-col items-center justify-center space-y-4 cursor-pointer'
                >
                  {cont.icon}
                  <h1 className='text-lg font-bold'>{cont.title}</h1>
                </a>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
