import samuelLuiz from '../../assets/perfil.jpg';

export default function Hero() {
  return (
    <div>
      <section
        id='hero'
        className='bg-light dark:border-b-1 pt-16 dark:text-light dark:bg-dark'
      >
        <div className='grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]'>
          <div className=' flex items-center justify-center p-8 lg:p-16'>
            <div>
              <p className='text-sm md:text-xl lg:text-2xl md:mb-2'>
                Bem-vindo! Me chamo
              </p>
              <h1 className='text-4xl lg:text-6xl font-bold text-foreground md:mb-2'>
                Samuel Luiz
              </h1>
              <p className='text-sm md:text-xl lg:text-2xl md:mb-2'>
                e sou Desenvolvedor Front-end.
              </p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div
              className='w-50 h-50 md:w-70 md:h-70 lg:w-82 lg:h-82 bg-gray-800 
            rounded-full flex items-center justify-center overflow-hidden'
            >
              <img
                src={samuelLuiz}
                alt='Samuel Luiz'
                className='w-45 h-45 md:w-62 md:h-62 lg:w-72 lg:h-72 rounded-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
