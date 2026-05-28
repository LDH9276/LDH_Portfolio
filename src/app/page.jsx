"use client";
import React, { useRef, useEffect } from "react";

import Banner from '../Component/Banner';
import About from '../Component/About';
import PersonProject from '../Component/PersonProject';
import TeamProject from '../Component/TeamProject';
import Contact from "../Component/Contact";
import Pos from '../Header/Pos';
import { useAppContext } from './AppWrapper';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper";

export default function Home() {
  const { reset, isStart, activeSlide, setActiveSlide } = useAppContext();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setActiveSlide(swiperRef.current.swiper.realIndex);
      });
    }
  }, [setActiveSlide]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeSlide);
    }
  }, [activeSlide]);

  const handleSlideNavigation = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveSlide(index);
    }
  };

  return (
    <div className={`w-full mx-auto transition-opacity duration-[2500ms] ${isStart === 'ready' ? 'opacity-0' : 'opacity-100'}`}>
      <Pos handleSlideNavigation={handleSlideNavigation} activeSlide={activeSlide}/>
      <Swiper
        touchRatio={0}
        speed={1000}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        ref={swiperRef}
        className="!w-[100vw] !h-[100vh] !fixed top-0"
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
