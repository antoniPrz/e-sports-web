import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';

import logo from './assets/logo-web.svg';

function App() {
  return (
    <>
      <div className='max-w-[1344px] mx-auto  flex flex-col items-center my-20'>
        <img src={logo} alt='' className='' />
        <h1 className='text-[4rem]  font-black text-white mt-20 '>
          Seu{' '}
          <span className='bg-nlw-gradient bg-clip-text text-transparent'>
            Duo
          </span>{' '}
          esta aqui.
        </h1>
        <div className=' grid grid-cols-6 gap-6 mt-16'>
          <a href='' className='relative rounded-md overflow-hidden'>
            <img src='/image-1.png' alt='' />
            <div className=' bg-game-gradient w-full absolute bottom-0 right-0 left-0 px-4 pb-4  pt-16 '>
              <strong className='text-white font-bold block'>
                League of legends
              </strong>
              <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-md overflow-hidden'>
            <img src='/image-2.png' alt='' />
            <div className=' bg-game-gradient w-full absolute bottom-0 right-0 left-0 px-4 pb-4  pt-16 '>
              <strong className='text-white font-bold block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-md overflow-hidden'>
            <img src='/image-3.png' alt='' />
            <div className=' bg-game-gradient w-full absolute bottom-0 right-0 left-0 px-4 pb-4  pt-16 '>
              <strong className='text-white font-bold block'>
                Counter Strike
              </strong>
              <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-md overflow-hidden'>
            <img src='/image-4.png' alt='' />
            <div className=' bg-game-gradient w-full absolute bottom-0 right-0 left-0 px-4 pb-4  pt-16 '>
              <strong className='text-white font-bold block'>
                Apex Legends
              </strong>
              <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-md overflow-hidden'>
            <img src='/image-5.png' alt='' />
            <div className=' bg-game-gradient w-full absolute bottom-0 right-0 left-0 px-4 pb-4  pt-16 '>
              <strong className='text-white font-bold block'>Fornite</strong>
              <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
            </div>
          </a>
          <a href='' className='relative rounded-md overflow-hidden'>
            <img src='/image-6.png' alt='' />
            <div className=' bg-game-gradient w-full absolute bottom-0 right-0 left-0 px-4 pb-4 pt-16 '>
              <strong className='text-white font-bold block'>
                World of Warcraft
              </strong>
              <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
