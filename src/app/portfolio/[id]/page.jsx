"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import portfoliodata from '../../../Component/portfoliodata.json';
import Scroll from '../../../Header/Scroll';
import { useAppContext } from '../../AppWrapper';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper";
import PortPesronPos from '../../../Header/PortPersonPos';
import PortTeamPos from '../../../Header/PortTeamPos';
import ScrollPf from '../../../Header/ScrollPf';

export default function Portfolio() {
  const { p_slide, setP_slide, isStart, setActiveSlide } = useAppContext();
  const portfolioSwiperRef = useRef(null);
  const [tab, setTab] = useState(0);
  const [tab01, setTab01] = useState(0);
  const [img, setImg] = useState(0);
  const router = useRouter();
  const params = useParams();

  const id = params?.id;
  const productID = Number(id);
  const act = 'active';
  const dis = 'disable';

  const data = JSON.stringify(portfoliodata.portfolio);
  const totaldata = data.replace(/\n/g, "<br>");
  const portfolio = JSON.parse(totaldata);

  const portfolioItem = portfolio.find(item => item.id === productID);

  const reset = () => {
    if (portfolioSwiperRef.current) {
      portfolioSwiperRef.current.swiper.slideTo(0);
    }
    setP_slide(0);
  }

  useEffect(() => {
    if (portfolioSwiperRef.current) {
      portfolioSwiperRef.current.swiper.slideTo(p_slide);
    }
  }, [p_slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevImg) => (prevImg + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const tabChange = (num) => setTab(num);
  const tabChange01 = (num) => setTab01(num);

  const toList = () => {
    setActiveSlide(2);
    router.push('/');
  }
  const toList2 = () => {
    setActiveSlide(3);
    router.push('/');
  }

  if (!portfolioItem) return <div>Loading...</div>;

  return (
    <div className={`w-full mx-auto transition-opacity duration-[2500ms] ${isStart === 'ready' ? 'opacity-0' : 'opacity-100'}`}>
      <Swiper
      touchRatio={0}
      speed={1000}
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      modules={[Mousewheel]}
      ref={portfolioSwiperRef}
      className="!w-[100vw] !h-[100vh] !fixed top-0"
      onSlideChange={(swiper) => setP_slide(swiper.activeIndex)}
    >
      {/* Intro Slide */}
      <SwiperSlide>
        <div className="relative w-full h-full flex items-center justify-center bg-gray-900 overflow-hidden">
          <img src={`/portfolio/${portfolioItem.main_img}`} alt={portfolioItem.name} className='absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay'/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="relative z-10 text-center text-white px-6">
            <p className='text-primary-light font-bold text-xl tracking-[0.3em] uppercase mb-4 drop-shadow-md'>{portfolioItem.family}</p>
            <p className='text-[80px] font-black leading-none mb-6 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'>{portfolioItem.name}</p>
            <p className='text-lg font-light text-gray-300 mb-2'>{portfolioItem.project_date}</p>
            <p className='text-lg font-light text-gray-300 mb-10'>{portfolioItem.project_program}</p>
            <p>
              <a href={portfolioItem.homepage} title="포트폴리오 페이지 가기" className='inline-block px-10 py-4 bg-primary hover:bg-primary-dark transition-colors rounded-full font-bold text-white shadow-lg shadow-primary/30' target="_blank" rel="noopener noreferrer">프로젝트 보기</a>
            </p>
          </div>
          <ScrollPf />
        </div>
      </SwiperSlide>

      {/* Introduce Slide */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-[790px] transition-all duration-[1500ms]">
            <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
            <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
            <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 dark:border-slate-800/50 flex flex-col justify-center">
              <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
                {portfolioItem.name}
              </p>
              <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
                Introduce
              </h2>
              <div className="flex justify-between items-center px-12 mt-16 gap-12">
                <div className="w-1/2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/30 dark:border-slate-700/50">
                  <img src={`/images/${portfolioItem.textimg01}`} alt={portfolioItem.name + '01'} className='w-full object-cover hover:scale-105 transition-transform duration-700'/>
                </div>
                <div className="w-1/2">
                  <p className='text-2xl font-bold text-primary dark:text-primary-light mb-6'>{portfolioItem.Headtitle}</p>
                  <pre className='whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg'>
                  {portfolioItem.text01}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Environment & Design Slide */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-[790px] transition-all duration-[1500ms]">
            <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
            <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
            <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 dark:border-slate-800/50 flex flex-col justify-center">
              <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
                {portfolioItem.name}
              </p>
              <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
                개발환경 및 디자인
              </h2>
              <div className="flex justify-between items-start px-12 mt-20 gap-12 h-[500px]">
  
                <div className="w-1/2 flex flex-col h-full">
                  <ul className='flex gap-4 border-b border-gray-300 dark:border-slate-700 mb-8'>
                    <li className={`pb-4 px-4 text-xl font-bold cursor-pointer transition-colors ${tab01 === 0 ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`} onClick={() => tabChange01(0)}>UI / UX</li>
                    <li className={`pb-4 px-4 text-xl font-bold cursor-pointer transition-colors ${tab01 === 1 ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`} onClick={() => tabChange01(1)}>Library</li>
                  </ul>
                  <div className="relative flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <div className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${tab01 === 0 ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute'}`}>
                      <pre className='whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg'>
                        {portfolioItem.design}
                      </pre>
                    </div>
                    <div className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${tab01 === 1 ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute'}`}>
                      <pre className='whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg'>
                        {portfolioItem.text03}
                      </pre>
                    </div>
                  </div>
                </div>
  
                {/* ID별 예외처리 - Images */}
                <div className="w-1/2 h-full relative rounded-2xl overflow-hidden shadow-xl border border-white/30 dark:border-slate-700/50 bg-white/20 dark:bg-slate-800/30">
                  {['1', '4', '2', '7'].includes(id) && (
                    <>
                      <img src={`/images/${portfolioItem.textimg02}`} alt="" className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${img === 0 ? 'opacity-100' : 'opacity-0'}`}/>
                      <img src={`/images/${portfolioItem.textimg03}`} alt="" className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${img === 1 ? 'opacity-100' : 'opacity-0'}`}/>
                      <img src={`/images/${portfolioItem.textimg04}`} alt="" className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${img === 2 ? 'opacity-100' : 'opacity-0'}`}/>
                    </>
                  )}
  
                  {['3', '6', '5', '8'].includes(id) && (
                    <img src={`/images/${portfolioItem.textimg02}`} alt="" className='absolute inset-0 w-full h-full object-contain'/>
                  )}
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Develop Slide */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-[790px] transition-all duration-[1500ms]">
            <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
            <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
            <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 dark:border-slate-800/50 flex flex-col justify-center">
              <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
                {portfolioItem.name}
              </p>
              <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
                Develop
              </h2>
              
              <div className="flex flex-col px-12 mt-20 h-[500px]">
                <ul className='flex gap-4 border-b border-gray-300 dark:border-slate-700 mb-8'>
                  {[0, 1, 2, 3].map((num) => (
                    <li key={num} className={`pb-4 px-4 text-xl font-bold cursor-pointer transition-colors ${tab === num ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'}`} onClick={() => tabChange(num)}>Chapter 0{num + 1}</li>
                  ))}
                </ul>
                
                <div className="relative flex-1 overflow-hidden">
                  {[
                    { code: portfolioItem.code1, title: portfolioItem.title01, text: portfolioItem.text02_1 },
                    { code: portfolioItem.code2, title: portfolioItem.title02, text: portfolioItem.text02_2 },
                    { code: portfolioItem.code3, title: portfolioItem.title03, text: portfolioItem.text02_3 },
                    { code: portfolioItem.code4, title: portfolioItem.title04, text: portfolioItem.text02_4 }
                  ].map((content, idx) => (
                    <div key={idx} className={`absolute inset-0 flex gap-12 transition-opacity duration-500 ${tab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                      <div className="w-1/2 h-full rounded-2xl overflow-auto bg-slate-900 p-6 shadow-inner custom-scrollbar border border-slate-700">
                        <pre className='text-sm text-green-400 font-mono leading-relaxed whitespace-pre-wrap'>
                          {content.code}
                        </pre>
                      </div>
                      <div className="w-1/2 h-full overflow-y-auto pr-4 custom-scrollbar">
                        <p className='text-2xl font-bold text-primary dark:text-primary-light mb-6'>{content.title}</p>
                        <pre className='whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg'>
                          {content.text}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Review Slide */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-[790px] transition-all duration-[1500ms]">
            <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
            <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
            <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 dark:border-slate-800/50 flex flex-col justify-center">
              <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
                {portfolioItem.name}
              </p>
              <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
                후기 및 느낀점
              </h2>
              
              <div className="flex justify-between items-center px-12 mt-16 gap-12 h-[450px]">
                <div className="w-1/2 h-full overflow-y-auto pr-4 custom-scrollbar">
                  <p className='text-3xl font-bold text-primary dark:text-primary-light mb-8'>총평 및 후기</p>
                  <pre className='whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg'>
                  {portfolioItem.text04}
                  </pre>
                </div>
                <div className="w-1/2 h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/30 dark:border-slate-700/50">
                  <img src={`/images/${portfolioItem.textimg01}`} alt={portfolioItem.name + '01'} className='w-full h-full object-cover'/>
                </div>
              </div>
  
              <button className='absolute bottom-10 left-1/2 -translate-x-1/2 px-10 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all shadow-lg hover:-translate-y-1' onClick={Number(id) < 5 ? toList : toList2}>목록으로 가기</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    {Number(id) < 5 && p_slide > 0 ? (<PortPesronPos id={id} act={act} reset={reset}/>) : (<PortPesronPos dis={dis} id={id} reset={reset}/>)}
    {Number(id) >= 5 && p_slide > 0 ? (<PortTeamPos act={act} id={id} reset={reset}/>) : (<PortTeamPos dis={dis} id={id} reset={reset}/>)}

    </div>
  );
}
