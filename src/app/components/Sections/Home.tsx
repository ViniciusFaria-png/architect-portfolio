import Image from 'next/image'
import { Montserrat } from 'next/font/google';
import Buttons from '../common/Button'
import Projects from './Projects';
import ScrollLink from '../common/ScrollLink';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {

    const ArrowDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
    )

    return (
      <main className={montserrat.className}>
        <div className='bg-orange-300 overflow-x-hidden'>
            <div className='relative h-screen overflow-hidden'>
                <Image 
                src="/Correções_2 - Foto.png"
                alt="bg-home"
                width={1920}
                height={1080}
                className='absolute inset-0 object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>              
                <div className='absolute inset-0 flex flex-col items-center text-center justify-center text-white p-8 md:p-4'>
                        <h1 className='text-5x1 md:text-5xl font-bold mb-5 mt-5 text-center'>
                            Vitor Hugo Costa de Lara
                        </h1>
                        <h2 className='text-5x1 md:text-5xl font-bold mb-4 text-center'>
                            Arquiteto
                        </h2>
                        <ScrollLink id='Projects' className="animate-bounce w-8 h-8 md:w-12 md:h-12 cursor-pointer">
                          <ArrowDownIcon />
                        </ScrollLink>                  
                </div>
            </div>
        </div>
        <section id="Projects">
          <Projects></Projects>
        </section>
      </main>
    );
  }