import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function Skills() {
  const techSkills = [
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Tailwind',
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Shadcn',
      icon: 'https://ui.shadcn.com/apple-touch-icon.png',
    },
  ];

  return (
    <section id='skills'>
      <div className='flex items-center justify-center min-h-[500px] bg-light dark:bg-dark text-dark dark:text-light mx-auto md:py-4 px-6 md:px-4 lg:px-8 '>
        <div className='space-y-12'>
          <div>
            <div>
              <h2 className='flex justify-center items-center md:mb-15 text-3xl md:text-4xl font-bold py-5 md:py-6'>
                Tech skills
              </h2>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3'>
              {techSkills.map((skill, index) => (
                <FadeInWhenVisible key={skill.name} delay={0.1 + index * 0.2}>
                  <div
                    className='text-center w-20 sm:w-30 p-2 bg-dark dark:bg-black text-light dark:text-light rounded-lg  
                  shadow-sm hover:shadow-md hover:shadow-dark dark:hover:shadow-light transition-shadow'
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className='w-20 h-20 mx-auto mb-3 object-contain'
                    />
                    <p className='text-xs sm:text-sm font-medium text-foreground'>
                      {skill.name}
                    </p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
