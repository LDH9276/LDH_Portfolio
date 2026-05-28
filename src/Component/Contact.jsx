import React, {useEffect, useState} from 'react';

function Contact({activeSlide}) {
  const [active, setActive] = useState('opacity-0 translate-y-10');

  useEffect(() => {
    if (activeSlide === 4) {
      setActive('opacity-100 translate-y-0');
    } else {
      setActive('opacity-0 translate-y-10');
    }
  }, [activeSlide]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className={`relative w-full h-[790px] transition-all duration-[1500ms] ${active}`}>
        <div className="absolute w-full h-[1px] bg-primary top-[25px] -z-10">&nbsp;</div>
        <div className="absolute w-full h-[1px] bg-primary bottom-[25px] -z-10">&nbsp;</div>
        
        <div className="w-[1170px] mx-auto px-6 h-full relative text-left bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/40 dark:border-slate-800/60 overflow-hidden flex flex-col justify-center">
          {/* Background Decorative Graphic */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10"></div>
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/20 backdrop-blur-3xl -z-10"></div>
  
          <p className='absolute right-[100px] top-[15px] font-semibold text-primary uppercase tracking-widest z-20'>
            The LDH
          </p>
          <h2 className='absolute right-[100px] top-[40px] text-5xl font-extrabold text-gray-900 dark:text-white z-20'>
            Contact
          </h2>
  
          <div className="flex justify-between items-center px-12 pt-16 z-10 h-[500px]"> 
            <div className="w-1/2 flex flex-col justify-center h-full">
              <p className='text-[26px] leading-tight font-light text-gray-800 dark:text-gray-200 mb-12'>
                포트폴리오를 감상해주셔서 감사합니다.<br/>
                궁금하신 사항이 있으시면 <strong className="font-bold text-primary dark:text-primary-light">언제든지 연락주세요.</strong>
              </p>
  
              <div className="space-y-8">
                <div className="group">
                  <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1'>Mail Address</p>
                  <p className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer'>leedh9276@naver.com</p>
                </div>
                <div className="group">
                  <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1'>Kakao Address</p>
                  <p className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer'>dhlee9207@gmail.com</p>
                </div>
                <div className="group">
                  <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1'>Github Address</p>
                  <p className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer'>LDH9276</p>
                </div>
              </div>
  
              <div className="mt-auto pt-8 border-t border-gray-200/50 dark:border-slate-700/50">
                <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>해당 포트폴리오 사이트에 저장된 이미지의 저작권은 포트폴리오 사이트에 명기했습니다.</p>
                <p className='text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wider'>COPYRIGHT &copy; LDH 2023</p>
              </div>
            </div>
            
            <div className="w-1/2 h-full flex justify-end items-end relative">
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-10 pointer-events-none rounded-br-3xl"></div>
              <img src={`/images/profile.webp`} alt="프로필" className='h-[110%] w-auto object-cover object-bottom drop-shadow-2xl translate-y-[5%] z-0'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;