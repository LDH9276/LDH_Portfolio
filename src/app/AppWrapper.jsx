"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from '../Header/Header';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppWrapper({ children }) {
  const [ p_slide, setP_slide ] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isStart, setIsStart] = useState('ready');
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIntro(false);
      setIsStart('');
    }, []);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const reset = () => {
    setP_slide(0);
  };

  const contextValue = {
    p_slide,
    setP_slide,
    showIntro,
    isStart,
    activeSlide,
    setActiveSlide,
    reset,
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppContext.Provider value={contextValue}>
        <Header isStart={isStart} setActiveSlide={setActiveSlide} reset={reset} />
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}
