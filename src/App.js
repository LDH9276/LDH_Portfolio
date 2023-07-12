import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Index from './Route/Index';
import Header from './Header/Header';
import Portfolio from './Component/Portfolio.jsx';
import NotFound from './Route/NotFound';

function App(props) {
  const [ p_slide, setP_slide ] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isStart, setIsStart] = useState('ready');
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIntro(false);
      setIsStart('');
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //슬라이드 초기화
  const reset = () => {
    setP_slide(0);
  }

  return (
    <>
      <BrowserRouter>
        <Header isStart={isStart} setActiveSlide={setActiveSlide} reset={reset}/>
        <Routes>
          <Route path="/" element={<Index isStart={isStart} setActiveSlide={setActiveSlide} activeSlide={activeSlide} reset={reset}/>} />
          <Route path="/portfolio/:id" element={<Portfolio isStart={isStart} setActiveSlide={setActiveSlide} activeSlide={activeSlide}
          p_slide={p_slide} setP_slide={setP_slide} reset={reset}
          />} />
          <Route path="*" element={<NotFound />} />
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;