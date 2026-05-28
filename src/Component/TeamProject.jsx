import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import portfolio from './team'
import Scroll from '../Header/Scroll';

function TeamProject({reset, activeSlide}) {
  const [active, setActive] = useState('opacity-0 translate-y-10');

  useEffect(() => {
    if (activeSlide === 3) {
      setActive('opacity-100 translate-y-0');
    } else {
      setActive('opacity-0 translate-y-10');
    }
  }, [activeSlide]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className={`relative w-full h-[790px] transition-all duration-[1500ms] ${active}`}>
        <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
        <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 dark:border-slate-800/50 flex flex-col justify-center">
          <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
            The LDH
          </p>
          <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
            Team Project
          </h2>
  
          <div className="flex justify-between items-center px-12 mt-16 gap-8">
          {portfolio.person.slice(0).reverse().map((item, index) => {
              return (
                <div className="relative group w-1/4 h-[450px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/60 dark:border-slate-700/60" key={index}>
                  <Link href={`/portfolio/${item.id}`}  onClick={reset} className="block w-full h-full relative z-10" key={index}  >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url(/images/${item.thumb})`}}></div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>
  
                    <img src={`/images/${item.program}`} alt={item.family} className='absolute top-4 right-4 h-8 w-auto drop-shadow-md z-20 bg-white/20 backdrop-blur-sm p-1 rounded-md'/>
                    
                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0 z-20">
                      <p className='text-primary-light font-bold text-sm tracking-widest mb-1'>{item.family}</p>
                      <p className='text-2xl font-extrabold mb-2'>{item.name}</p>
                      <div className="h-[2px] w-[40px] bg-primary transition-all duration-300 group-hover:w-full"></div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
        <Scroll />
      </div>
    </div>
  );
}

export default TeamProject;