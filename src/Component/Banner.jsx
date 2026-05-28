import React, {useEffect, useState} from 'react';
import Scroll from '../Header/Scroll';

function Banner({activeSlide}) {
  const [active, setActive] = useState('opacity-0');

  useEffect(() => {
    if (activeSlide === 0) {
      setActive('opacity-100');
    } else {
      setActive('opacity-0');
    }
  }, [activeSlide]);

  return (
    <div className={`absolute w-full h-[790px] top-1/2 -translate-y-1/2 transition-opacity duration-[1800ms] ${active}`}>
      <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
      <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
      
      <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-slate-800/50">
        <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
          The LDH
        </p>
        <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
          Introduce
        </h2>
        
        <div className="absolute w-full h-full top-[20px] left-0 overflow-hidden rounded-b-2xl">
          <video src={`/videos/introduce.mp4`} autoPlay loop muted className='absolute bottom-[40px] w-[92%] left-0 -translate-x-[50px] z-0 rounded-2xl shadow-2xl'></video>
          
          <div className="absolute right-[100px] top-[140px] text-right z-20">
            <p className='text-xl font-light text-gray-600 dark:text-gray-300 mb-2'>Front-end DEVELOPER</p>
            <p className='text-[82px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark mb-4 drop-shadow-sm'>Portfolio</p>
            <p className='text-2xl font-light text-gray-700 dark:text-gray-200'>The Frontier - 디자인을 넘어서</p>
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
}

export default Banner;