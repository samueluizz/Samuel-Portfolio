import todolist from '../../assets/gerenciador-de-tarefas.png';
import naruto from '../../assets/naruto-infos.png';
import samSaturn from '../../assets/sam-saturn.png';
import LoginSimples from '../../assets/login-page-simples.png';
import SamTi from '../../assets/sam-ti.png';
import SamFlix from '../../assets/sam-flix.png';

export default function Projects() {
  const projects = [
    {
      name: 'NEXT - Login + Dashboard Page reponsiva',
      image: SamTi,
      link: 'https://sam-ti.vercel.app/',
    },
    {
      name: 'REACT - Gerenciador de Tarefas',
      image: todolist,
      link: 'https://gerenciador-de-tarefas-navy.vercel.app/',
    },
    {
      name: 'REACT - Plataforma de filmes responsiva',
      image: SamFlix,
      link: 'https://sam-flix-theta.vercel.app/',
    },
    {
      name: 'HTML/TAILWIND - Login Page responsiva simples',
      image: LoginSimples,
      link: 'https://responsive-login-page-pi.vercel.app/',
    },
    {
      name: 'JAVASCRIPT/CSS - Site fictício sobre planetas',
      image: samSaturn,
      link: 'https://sam-saturn.vercel.app/index.html',
    },
    {
      name: 'HTML/CSS - Site fictício sobre o anime Naruto',
      image: naruto,
      link: 'https://naruto-infos.vercel.app/',
    },
  ];

  return (
    <section
      id='projects'
      className='pt-5 md:py-20 bg-light dark:bg-dark text-dark dark:text-light'
    >
      <div>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl font-bold text-foreground mb-8'>
            Projects
          </h1>
        </div>

        <div className='mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-9 mb-12'>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative overflow-hidden rounded-lg bg-dark dark:bg-black
              aspect-square hover:shadow-xl hover:shadow-dark dark:hover:shadow-light
              transition-all duration-300 block cursor-pointer'
            >
              <img
                src={project.image}
                alt={`Projeto ${project.name}`}
                className='w-full h-full object-cover group-hover:scale-110 
                transition-transform duration-300 '
              />
              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <h3 className='text-xl font-bold mb-2'>{project.name}</h3>
                  <span className='text-sm'>Ver Detalhes</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className='text-center'>
          <p className='text-lg text-foreground font-medium'>
            E muito mais por vir!
          </p>
        </div>
      </div>
    </section>
  );
}
