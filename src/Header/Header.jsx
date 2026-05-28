"use client";
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Menus from './Menus';

function Header( {reset, isStart, setActiveSlide} ) {

  const [toggle, setToggle] = useState('');
  const [menus , setMenus] = useState(false);
  const router = useRouter();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toMainTitle = () => {
    setToggle('');
    setTimeout(() => {
      setMenus(false);
    }, 500);
    setActiveSlide(0);
    router.push('/');
  }

  const menuEvent = () => {
    if (toggle === '') {
      setMenus(true);
      setTimeout(() => {
        setToggle('active');
      }, 0);
    } else {
      setToggle('');
      setTimeout(() => {
        setMenus(false);
      }, 500);
    }
  }

  return (
    <header className={`fixed top-0 w-full h-[60px] z-[9999] transition-all duration-500 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-800 ${isStart === 'ready' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex relative justify-between items-center w-full max-w-[1170px] h-[60px] mx-auto px-6 z-[9999]">
        <h1 onClick={toMainTitle} className="cursor-pointer h-[60px] flex items-center">
          {/* Use brightness invert for dark mode if logo is black, or conditional rendering */}
          <img src={`/images/logo.svg`} alt="로고" className="h-[40px] dark:invert" />
        </h1>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          )}

          <div className={`w-12 h-12 bg-primary cursor-pointer relative flex items-center justify-center`} onClick={menuEvent}>
            <span className={`block w-8 h-[3px] bg-white absolute transition-all duration-300 ${toggle === 'active' ? 'top-[22px] rotate-45' : 'top-[16px]'}`}>&nbsp;</span>
            <span className={`block w-8 h-[3px] bg-white absolute transition-all duration-300 ${toggle === 'active' ? 'top-[22px] -rotate-45' : 'top-[28px]'}`}>&nbsp;</span>
          </div>
        </div>
      </div>
      {menus === true && <Menus setToggle={setToggle} toggle={toggle} setActiveSlide={setActiveSlide} menuEvent={menuEvent} reset={reset}/>}
    </header>
  );
}

export default Header;