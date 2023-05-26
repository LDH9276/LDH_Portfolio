import React, { useState, useRef, useEffect } from "react";
import './css/main.css'
import Banner from '../Component/Banner';
import About from '../Component/About';
import PersonProject from '../Component/PersonProject';
import TeamProject from '../Component/TeamProject';
import Contact from "../Component/Contact";
import Pos from '../Header/Pos';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper";



function Index({reset, isStart, activeSlide, setActiveSlide}) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setActiveSlide(swiperRef.current.swiper.realIndex);
      });
    }
  }, []);

  useEffect(() => {
    swiperRef.current.swiper.slideTo(activeSlide);
  }, [activeSlide]);

  const handleSlideNavigation = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveSlide(index);
    }
  };
  return (

    <div className={`main ${isStart}`}>
    <Pos handleSlideNavigation={handleSlideNavigation} activeSlide={activeSlide}/>
    <Swiper
      touchRatio={0}
      speed={1000}
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      modules={[Mousewheel]}
      ref={swiperRef}
      className="main-contain"
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
    >
      <SwiperSlide><Banner activeSlide={activeSlide}/></SwiperSlide>
      <SwiperSlide><About activeSlide={activeSlide}/></SwiperSlide>
      <SwiperSlide><PersonProject activeSlide={activeSlide} reset={reset}/></SwiperSlide>
      <SwiperSlide><TeamProject activeSlide={activeSlide} reset={reset}/></SwiperSlide>
      <SwiperSlide><Contact activeSlide={activeSlide}/></SwiperSlide>
    </Swiper>
    </div>
  );
}

export default Index;