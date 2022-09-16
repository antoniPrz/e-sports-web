import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';

import logo from './assets/logo-web.svg';

function App() {
  return (
    <>
      <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <img src={logo} alt='' />
        <h1 className='text-6xl text-white mt-20 font-black'>
          Seu <span className='text-purple-400'>duo</span> esta aquí
        </h1>
        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/image-1.png' alt='' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
              <strong className='font-bold text-white block'>
                league of legends
              </strong>
              <span className='text-zinc-300 text-sm block '>4 anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/image-2.png' alt='' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
              <strong className='font-bold text-white block'>
                league of legends
              </strong>
              <span className='text-zinc-300 text-sm block '>4 anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/image-3.png' alt='' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
              <strong className='font-bold text-white block'>
                league of legends
              </strong>
              <span className='text-zinc-300 text-sm block '>4 anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/image-4.png' alt='' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
              <strong className='font-bold text-white block'>
                league of legends
              </strong>
              <span className='text-zinc-300 text-sm block '>4 anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/image-5.png' alt='' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
              <strong className='font-bold text-white block'>
                league of legends
              </strong>
              <span className='text-zinc-300 text-sm block '>4 anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-lg overflow-hidden'>
            <img src='/image-6.png' alt='' />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
              <strong className='font-bold text-white block'>
                league of legends
              </strong>
              <span className='text-zinc-300 text-sm block '>4 anuncios</span>
            </div>
          </a>
        </div>

        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
          <div className='bg-[#242634] px-8 py-6 flex justify-between items-center'>
            <div>
              <strong className='text-2xl text-white font-black block'>
                No encontro sue duo?
              </strong>
              <span className='text-zinc-400 block '>
                Publique un anuncio para encontrar nuevos jugadores
              </span>
            </div>
            <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
              <MagnifyingGlassPlus size={24} />
              Publicar anuncio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
