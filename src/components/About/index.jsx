export default function About() {
  return (
    <section
      id='about'
      className=' text-dark dark:text-light bg-light dark:bg-dark'
    >
      <div className=' mx-auto md:px-4 px-6 lg:px-8'>
        <h1 className='flex justify-center items-center text-3xl md:text-4xl font-bold py-5 md:py-6 '>
          Sobre Mim:
        </h1>
        <div>
          <p className='md:mb-16 text-center font-light md:text-2xl px-0 py-8'>
            Desenvolvedor front-end apaixonado por criar aplicações web modernas
            e eficientes. Com um olhar atento aos detalhes e um compromisso com
            a excelência, utilizo dos meus conhecimentos em React, Next.js e
            outras tecnologias modernas para construir soluções web robustas e
            escaláveis.
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-3 md:gap-8 p-8'>
        <div
          className='text-center p-4 md:p-8 text-light dark:text-light bg-dark dark:bg-black
         rounded-lg mb-8 md:mx-auto'
        >
          <div
            className=' w-16 h-16 dark:bg-dark bg-light dark:border-2 rounded-full flex items-center 
          justify-center mx-auto mb-6'
          >
            <div className=' w-9 h-9 dark:bg-light bg-dark'></div>
          </div>
          <h3 className='font-bold text-xl'>Front-end</h3>

          <p>
            Desenvolvimento de interfaces web modernas e responsivas utilizando
            as melhores tecnologias do mercado.
          </p>
        </div>

        <div className='text-center p-4 md:p-8 text-light dark:text-light bg-dark dark:bg-black rounded-lg mb-8 md:mx-auto'>
          <div
            className=' w-16 h-16 dark:border-2 dark:bg-dark bg-light rounded-full 
          flex items-center justify-center mx-auto mb-6'
          >
            <div className=' w-9 h-9 dark:bg-light bg-dark clip-triangle'></div>
          </div>
          <h3 className='font-bold text-xl'> Desenvolvimento</h3>

          <p>
            Desenvolvimento web utilizando React, Next.js e outras tecnologias
            modernas para criar aplicações robustas.
          </p>
        </div>

        <div className='text-center p-4 md:p-8 text-light dark:text-light bg-dark dark:bg-black rounded-lg mb-8 md:mx-auto'>
          <div className=' w-16 h-16 dark:bg-dark bg-light dark:border-2 rounded-full flex items-center justify-center mx-auto mb-6'>
            <div className=' w-9 h-9 dark:bg-light bg-dark rounded-full'></div>
          </div>
          <h3 className='font-bold text-xl'> Manutenção</h3>

          <p>
            Manutenção contínua e otimização de websites e sistemas para
            garantir o melhor desempenho.
          </p>
        </div>
      </div>
    </section>
  );
}
