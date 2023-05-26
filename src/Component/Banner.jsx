import React, {useEffect, useState} from 'react';
import './css/banner.css'
import Scroll from '../Header/Scroll';

function Banner({activeSlide}) {

  const [active, setActive] = useState('ready');

  useEffect(() => {
  if (activeSlide === 0) {
    setActive('');
  } else {
    setActive('ready');
  }}, [activeSlide]);

  return (
    <div className={`main-comp banner ${active}`}>
      <div className="main-line">&nbsp;</div>
      <div className="main-line02">&nbsp;</div>
      <div className="main-index-wrap" id='banner'>
        <p className='main-subtitle'>
          The LDH
        </p>
        <h2 className='main-title'>
          Introduce
        </h2>
        <div className="banner-wrap">
          <video src={`${process.env.PUBLIC_URL}/videos/introduce.mp4`} autoPlay loop muted className='main-banner'></video>
          <p className='main-banner-subtitle'>Front-end DEVELOPER</p>
          <p className='main-banner-title'>Portfolio</p>
          <p className='main-banner-subtitle2'>The Frontier - 디자인을 넘어서</p>
        </div>
      </div>
      <Scroll />
    </div>
  );
}

export default Banner;