import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FiArrowRight, FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';

import todolist from '../../assets/gerenciador-de-tarefas.png';
import naruto from '../../assets/naruto-infos.png';
import samSaturn from '../../assets/sam-saturn.png';
import LoginSimples from '../../assets/login-page-simples.png';
import SamTi from '../../assets/sam-ti.png';
import SamFlix from '../../assets/sam-flix.png';
import Sam_Commerce from '../../assets/sam-commerce.png';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      name: 'NEXT - E-commerce com várias funcionalidades',
      image: Sam_Commerce,
      deploy: 'https://sam-commerce-beryl.vercel.app/',
      github: 'https://github.com/samueluizz/Sam-Commerce',
    },
    {
      name: 'NEXT - Login + Dashboard Page reponsiva',
      image: SamTi,
      deploy: 'https://sam-ti.vercel.app/',
      github: 'https://github.com/samueluizz/SamTI',
    },

    {
      name: 'REACT - Plataforma de filmes responsiva',
      image: SamFlix,
      deploy: 'https://sam-flix-theta.vercel.app/',
      github: 'https://github.com/samueluizz/SamFlix',
    },
    {
      name: 'REACT - Gerenciador de Tarefas',
      image: todolist,
      deploy: 'https://gerenciador-de-tarefas-navy.vercel.app/',
      github: 'https://github.com/samueluizz/gerenciador-de-tarefas',
    },
    {
      name: 'HTML/TAILWIND - Login Page responsiva simples',
      image: LoginSimples,
      deploy: 'https://responsive-login-page-pi.vercel.app/',
      github: 'https://github.com/samueluizz/login-page-simples',
    },
    {
      name: 'JAVASCRIPT/CSS - Site fictício sobre planetas',
      image: samSaturn,
      deploy: 'https://sam-saturn.vercel.app/index.html',
      github: 'https://github.com/samueluizz/sam-saturn',
    },
    {
      name: 'HTML/CSS - Site fictício sobre o anime Naruto',
      image: naruto,
      deploy: 'https://naruto-infos.vercel.app/',
      github: 'https://github.com/samueluizz/naruto-infos',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section
      id='projects'
      className='pt-5 md:py-20 bg-light dark:bg-dark text-dark dark:text-light'
    >
      <FadeInWhenVisible>
        <div className='container mx-auto px-4'>
          <FadeInWhenVisible delay={0.2}>
            <div className='text-center mb-12'>
              <h1 className='text-3xl md:text-4xl font-bold text-foreground'>
                Projetos
              </h1>
              <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-center'>
                <FiArrowRight className='mr-1 animate-pulse' /> Arraste para ver
                mais
              </p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <Swiper
              modules={[EffectCoverflow, Pagination]}
              effect={'coverflow'}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className='projects-swiper pb-16'
            >
              {projects.map((project) => (
                <SwiperSlide key={project.name}>
                  <div
                    onClick={() => handleProjectClick(project)}
                    className='group relative overflow-hidden rounded-lg bg-dark dark:bg-black
                aspect-square hover:shadow-xl hover:shadow-dark dark:hover:shadow-light
                transition-all duration-300 block cursor-pointer h-full'
                  >
                    <img
                      src={project.image}
                      alt={`Projeto ${project.name}`}
                      className='w-full h-full object-cover group-hover:scale-110 
                  transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      <div className='text-center text-white p-4'>
                        <h3 className='text-xl font-bold mb-2'>
                          {project.name}
                        </h3>
                        <span className='text-sm'>Ver Opções</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <AnimatePresence>
              {showModal && selectedProject && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className='bg-light dark:bg-dark rounded-lg p-6 max-w-md w-full relative'
                  >
                    <button
                      onClick={closeModal}
                      className='absolute top-4 right-4 text-dark dark:text-light hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer'
                    >
                      <FiX size={24} />
                    </button>

                    <h3 className='text-xl font-bold mb-4'>
                      {selectedProject.name}
                    </h3>
                    <p className='mb-6'>Onde você deseja abrir este projeto?</p>

                    <div className='flex flex-col space-y-3'>
                      <a
                        href={selectedProject.deploy}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 bg-dark dark:bg-light text-light dark:text-dark
                  px-4 py-2 rounded hover:bg-opacity-90 transition-colors'
                      >
                        <FiExternalLink /> Ver Deploy
                      </a>

                      <a
                        href={selectedProject.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-dark dark:text-light
                  px-4 py-2 rounded hover:bg-opacity-90 transition-colors'
                      >
                        <FiGithub /> Ver Código no GitHub
                      </a>

                      <button
                        onClick={closeModal}
                        className='mt-4 text-dark dark:text-light hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer'
                      >
                        Cancelar
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.6}>
            <div className='text-center mt-8'>
              <p className='text-lg text-foreground font-medium'>
                E muito mais por vir!
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
