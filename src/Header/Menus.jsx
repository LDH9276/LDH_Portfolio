"use client";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

function Menus( {reset, toggle, setToggle, setActiveSlide, menuEvent} ) {
  const [menu01, setMenu01] = useState('');
  const [menu02, setMenu02] = useState('');
  const router = useRouter();

  const menuOpen01 = () => {
    if (menu01 === '') {
      setMenu01('active');
      setMenu02('');
    } else {
      setMenu01('');
    }
  }
  const menuOpen02 = () => {
    if (menu02 === '') {
      setMenu02('active');
      setMenu01('');
    } else {
      setMenu02('');
    }
  }

  const gnbHandleEvent = (index) => {
    setToggle('');
    menuEvent();
    setActiveSlide(index);
    router.push('/');
  }

  const toPortfolio = (index) => {
    setToggle('');
    menuEvent();
    reset();
    router.push(`/portfolio/${index}`);
  }

  return (
    <div className={`fixed w-full h-screen flex justify-center pt-[140px] opacity-0 transition-opacity duration-700 bg-primary/95 dark:bg-slate-900/95 backdrop-blur-md ${toggle === 'active' ? 'opacity-100 z-[9900] pointer-events-auto' : 'pointer-events-none'}`}>
      <nav className='z-10'>
        <ul className="leading-[48px] text-[32px] font-semibold text-white">
          <li className="block w-[280px] py-5 cursor-pointer hover:text-gray-200 transition-colors" onClick={() => gnbHandleEvent(0)}>
              Introduce
          </li>
          <li className="block w-[280px] py-5 cursor-pointer hover:text-gray-200 transition-colors" onClick={() => gnbHandleEvent(1)}>
            About Me
          </li>
          <li className="block w-[280px] py-5 cursor-pointer select-none" onClick={menuOpen01}>
            <div className="flex justify-between items-center hover:text-gray-200 transition-colors">
              Person Project
              <img src={`/images/lnb_toggle.svg`} alt="toggle" className={`h-[32px] w-[23px] transition-transform duration-300 ${menu01 === 'active' ? 'rotate-180' : ''}`} />
            </div>
            <ul className={`overflow-hidden transition-all duration-500 ${menu01 === 'active' ? 'h-[250px] opacity-100 mt-2' : 'h-0 opacity-0'}`}>
              <li className="text-[18px] font-normal leading-[50px] hover:text-gray-300" onClick={() => gnbHandleEvent(2)}>개인 프로젝트 한 눈에 보기</li>
              <li>
                <button onClick={() => toPortfolio(4)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  무인양품 프로젝트
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(3)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  나만의 가계부 프로젝트
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(2)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  B&O 리뉴얼 프로젝트
                </button>
              </li>
              <li>                
                <button onClick={() => toPortfolio(1)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  사세 적응형 프로젝트
                </button>
              </li>
            </ul>
          </li>
          <li className="block w-[280px] py-5 cursor-pointer select-none" onClick={menuOpen02}>
            <div className="flex justify-between items-center hover:text-gray-200 transition-colors">
              Team Project
              <img src={`/images/lnb_toggle.svg`} alt="toggle" className={`h-[32px] w-[23px] transition-transform duration-300 ${menu02 === 'active' ? 'rotate-180' : ''}`} />
            </div>
            <ul className={`overflow-hidden transition-all duration-500 ${menu02 === 'active' ? 'h-[250px] opacity-100 mt-2' : 'h-0 opacity-0'}`}>
              <li className="text-[18px] font-normal leading-[50px] hover:text-gray-300" onClick={() => gnbHandleEvent(3)}>팀 프로젝트 한 눈에 보기</li>
              <li>
                <button onClick={() => toPortfolio(8)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  LMS프로젝트 - 유저
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(7)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  LMS프로젝트 - 관리자
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(6)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  넷마블 브랜드 프로젝트
                </button>
              </li>
              <li>                
                <button onClick={() => toPortfolio(5)} className='w-full text-left text-[18px] font-normal leading-[50px] text-white hover:text-gray-300 transition-colors'>
                  시드물 반응형 프로젝트
                </button>
              </li>
            </ul>
          </li>
          <li className="block w-[280px] py-5 cursor-pointer hover:text-gray-200 transition-colors" onClick={() => gnbHandleEvent(4)}>
            Contact
          </li>
        </ul>
      </nav>
      <img src={`/images/logo-white.svg`} alt="" className='absolute w-[80%] max-w-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] mix-blend-overlay opacity-5 pointer-events-none' />
    </div>
  );
}

export default Menus;