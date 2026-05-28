import React, {useState, useEffect} from 'react';
import Scroll from '../Header/Scroll';

function About( {activeSlide} ) {
  const [active, setActive] = useState('opacity-0 translate-y-10');

  useEffect(() => {
    if (activeSlide === 1) {
      setActive('opacity-100 translate-y-0');
    } else {
      setActive('opacity-0 translate-y-10');
    }
  }, [activeSlide]);

  return (
    <div className={`absolute w-full h-[790px] top-1/2 -translate-y-1/2 transition-all duration-[1500ms] ${active}`}>
      <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
      <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
      
      <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/30 dark:border-slate-800/60 flex flex-col justify-center">
        <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
          The LDH
        </p>
        <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white'>
          About Me
        </h2>
        
        <div className="flex justify-between items-center px-12 pt-16">
          <div className="w-1/2 z-10">
            <h2 className='text-[42px] font-extrabold text-gray-900 dark:text-white leading-tight mb-8'>
              프론트엔드 개발자 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">이동헌</span>입니다.
            </h2>
            <p className='text-[18px] leading-relaxed text-gray-700 dark:text-gray-300 font-light mb-8'>
              웹 퍼블리셔를 넘어 <br />
              프론트엔드 영역까지 열심히 달려왔습니다. <br />
              이제 프론트엔드에서의 더 큰 영역에서 <br />
              뛰어들 준비가 끝났습니다.
            </p>
            <ul className='space-y-4'>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-primary w-[120px]">2016 - 2020</span>
                <span>책나무출판사 (북디자이너)</span>
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-primary w-[120px]">2020 - 2022</span>
                <span>케이패밀리코퍼레이션 (영상디자이너)</span>
              </li>
              <li className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-primary w-[120px]">LICENSE</span>
                <span>웹디자인기능사</span>
              </li>
            </ul>
          </div>
          
          <div className="w-1/2 flex justify-end relative">
            <div className={`w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-800/50 shadow-2xl transition-transform duration-1000 transform hover:scale-105 ${activeSlide === 1 ? 'scale-100' : 'scale-90 opacity-0'}`}> 
              <img src={`/images/thumb.webp`} alt="프로필 사진" className="w-full h-full object-cover" />
            </div>
            {/* 장식용 유리 원형 */}
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-primary/20 backdrop-blur-xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-[150px] h-[150px] rounded-full bg-primary-light/20 backdrop-blur-xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        <ul className="flex justify-between mt-16 px-12 gap-6">
          {[
            { icon: 'item03.svg', title: 'HTML / CSS', subtitle: '프론트엔드 기본 중의 기본', text: '이전 홈페이지 퍼블리싱을 담당해오면서 기본적으로 쓰기가 가능합니다.' },
            { icon: 'item04.svg', title: 'JAVASCRIPT', subtitle: '동적인 ES6 사용가능', text: '제이쿼리 뿐만 아니라 이제는 ES6 문법을 어느정도 할 수 있게 되었습니다.' },
            { icon: 'item02.svg', title: 'PHP / SQL', subtitle: 'DB기초를 다룰줄 아는 개발자', text: '서버사이드 언어를 다루며 DB 연동이 가능할 정도의 실력을 가지고 있습니다.' },
            { icon: 'item01.svg', title: 'REACT.JS / NEXT', subtitle: '준비된 리액트 개발자', text: '리액트로 DB까지 출력해서 쇼핑몰 하나를 만들 수 있을 정도로 성장했습니다.' }
          ].map((item, idx) => (
            <li key={idx} className="w-1/4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50 dark:border-slate-700/50 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-default">
              <div className="w-[60px] h-[60px] bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <img src={`/images/${item.icon}`} alt={item.title} className='h-8 w-8'/>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.title}</h3>
              <p className='text-sm text-primary dark:text-primary-light font-medium mb-3'>{item.subtitle}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <Scroll />
    </div>
  );
}

export default About;