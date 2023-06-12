import React, {useState, useEffect} from 'react';
import './css/about.css'
import Scroll from '../Header/Scroll';

function About( {activeSlide} ) {

  const [active, setActive] = useState('ready');
  const [isScroll, setIsScroll] = useState('');

  useEffect(() => {
  if (activeSlide === 1) {
    setActive('');
    setIsScroll('');
  } else {
    setActive('ready');
    setIsScroll('active');
  }}, [activeSlide]);



  return (
    <div className={`main-comp about-me ${active}`}>
      <div className="main-line">&nbsp;</div>
      <div className="main-line02">&nbsp;</div>
      <div className="main-index-wrap">
        <p className='main-subtitle'>
          The LDH
        </p>
        <h2 className='main-title'>
          About Me
        </h2>
        <div className="about-wrap">
          <div className="about-title-wrap">
            <div className="about-informantion">
              <h2 className='about-title'>프론트엔드 개발자 <br/>이동헌입니다.</h2>
              <div className="about-text-wrap">
                <p className='about-text-info'>
                  웹 퍼블리셔를 넘어 <br />
                  프론트엔드 영역까지 열심히 달려왔습니다. <br />
                  이제 프론트엔드에서의 더 큰 영역에서 <br />
                  뛰어들 준비가 끝났습니다.
                </p>
                <ul className='about-text-career'>
                  <li><span>2016 - 2020</span>책나무출판사 (북다지이너)</li>
                  <li><span>2020 - 2022</span>케이패밀리코퍼레이션 (영상디자이너)</li>
                  <li><span>LICENSE</span>웹디자인기능사</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-box-wrap">
            <div className={`about-bg-1 ${isScroll}`}> 
            <img src={`${process.env.PUBLIC_URL}/images/thumb.webp`} alt="메인" />
            </div>
            <div className={`about-bg-2 ${isScroll}`}>
              <div className="about-box">
              </div>
              <div className="about-box01">
              </div>
            </div>


          </div>
        </div>

        <ul className="info_graphic">
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/item03.svg`} alt="HTML" className='info_graphic_icon'/>
          <p>
            <span className="info_graphic_title">HTML / CSS</span>
            <span className='info_graphic_subtitle'>프론트엔드 기본 중의 기본</span>
            <span className="info_graphic_text">프론트엔드 입문에서는 당연히 기본으로 다룰 줄 알아야하는 것이 HTML / CSS입니다. 이전 홈페이지 퍼블리싱을 담당해오면서 기본적으로 쓰기가 가능합니다.</span>
          </p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/item04.svg`} alt="HTML" className='info_graphic_icon'/>
          <p>
            <span className="info_graphic_title">JAVASCRIPT</span>
            <span className='info_graphic_subtitle'>동적인 ES6 사용가능</span>
            <span className="info_graphic_text">자바스크립트는 이전에는 제이쿼리만 사용해왔으나 이제는 ES6 문법을 어느정도 할 수 있게 되었습니다. 바로 다음 리엑트에서 자세히 말할 수 있을 것 같네요!</span>
          </p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/item02.svg`} alt="HTML" className='info_graphic_icon'/>
          <p>
            <span className="info_graphic_title">PHP / SQL</span>
            <span className='info_graphic_subtitle'>DB기초를 다룰줄 아는 개발자</span>
            <span className="info_graphic_text">서버사이드 언어를 다룰 수 있습니다. DB를 출력해서 리액트와 Html 모두 연동이 가능할 정도의 실력을 가지고 있습니다. 아래의 포트폴리오를 같이 보시죠!</span>
          </p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/item01.svg`} alt="HTML" className='info_graphic_icon'/>
          <p>
            <span className="info_graphic_title">REACT.JS</span>
            <span className='info_graphic_subtitle'>준비된 주니어 리액트 개발자</span>
            <span className="info_graphic_text">ES6를 마스터한 이유는 바로 리액트를 위해서였습니다! 리액트로 DB까지 출력해서 쇼핑몰 하나를 만들 수 있을 정도로 성장했습니다.</span>
          </p>
        </li>
      </ul>
      </div>
      <Scroll />
    </div>
  );
}

export default About;