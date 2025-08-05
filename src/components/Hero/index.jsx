import samuelLuiz from '../../assets/perfil.jpg';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

export default function Hero() {
  return (
    <div>
      <section
        id='hero'
        className='bg-light dark:border-b-1 pt-10 md:pt-16 dark:text-light dark:bg-dark py-4'
      >
        <div className='flex flex-col justify-center items-center gap-y-4 sm:grid sm:grid-cols-2 min-h-[calc(100vh-4rem)] max-w-7xl sm:mx-auto'>
          <div className='flex items-center justify-center'>
            <div>
              <FadeInWhenVisible delay={0.2}>
                <p className='text-sm md:text-xl lg:text-2xl xl:text-4xl md:mb-2'>
                  Bem-vindo! Me chamo
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground md:mb-2'>
                  Samuel Luiz
                </h1>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.6}>
                <p className='text-sm md:text-xl lg:text-2xl xl:text-4xl md:mb-2'>
                  e sou Desenvolvedor Front-end.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>

          <FadeInWhenVisible delay={0.8}>
            <div className='flex items-center justify-center'>
              <div
                className='w-50 h-50 md:w-70 md:h-70 lg:w-82 lg:h-82 xl:w-[350px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[600px] 
              border-20 2xl:border-[40px] border-gray-800 rounded-full flex items-center justify-center overflow-hidden'
              >
                <img
                  src={samuelLuiz}
                  alt='Samuel Luiz'
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
