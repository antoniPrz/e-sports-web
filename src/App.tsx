import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';

import logo from './assets/logo-web.svg';

function App() {
  return (
    <>
      <div className='max-w-[1344px] mx-auto border border-solid border-blue-100 flex flex-col items-center my-20'>
        <img
          src={logo}
          alt=''
          className='border border-solid border-green-200'
        />
        <h1 className='text-6xl font-black text-white mt-20 border border-solid border-green-200'>
          Seu{' '}
          <span className='bg-nlw-gradient bg-clip-text text-transparent'>
            Duo
          </span>{' '}
          esta aqui.
        </h1>
        <div className='border border-solid border-green-200 grid grid-cols-6 gap-6'>
          <a href=''>
            <img src='/image-1.png' alt='' />
          </a>
          <a href=''>
            <img src='/image-2.png' alt='' />
          </a>
          <a href=''>
            <img src='/image-3.png' alt='' />
          </a>
          <a href=''>
            <img src='/image-4.png' alt='' />
          </a>
          <a href=''>
            <img src='/image-5.png' alt='' />
          </a>
          <a href=''>
            <img src='/image-6.png' alt='' />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
