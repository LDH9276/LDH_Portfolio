import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import portfoliodata from './portfoliodata.json';
import '../Route/css/main.css';
import './css/portfolio.css';
import Scroll from '../Header/Scroll';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper";
import PortPesronPos from '../Header/PortPersonPos';
import PortTeamPos from '../Header/PortTeamPos';

function Portfolio( {p_slide, setP_slide, isStart, setActiveSlide} ) {
  const portfolioSwiperRef = useRef(null);
  const [tab, setTab] = useState(0);
  const [tab01, setTab01] = useState(0);
  const [img, setImg] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();
  const productID = Number(id);
  const act = 'active';
  const dis = 'disable';

  const data = JSON.stringify(portfoliodata.portfolio);
  const totaldata = data.replace(/\n/g, "<br>");
  const portfolio = JSON.parse(totaldata)

  const portfolioItem = portfolio.find(item => item.id === productID);

  //슬라이드 초기화
  const reset = () => {
    portfolioSwiperRef.current.swiper.slideTo(0);
    setP_slide(0);
  }

  useEffect(() => {
    portfolioSwiperRef.current.swiper.slideTo(p_slide);
  }, [p_slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevImg) => (prevImg + 1) % 3); // 현재 이미지의 인덱스에 1을 더한 값으로 변경 3으로 나눈 나머지 값이 0, 1, 2가 된다.
    }, 4500); // 4.5초마다 실행
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  const tabChange = (num) => {
    setTab(num);
  }
  const tabChange01 = (num) => {
    setTab01(num);
  }

  const toList = () => {
    setActiveSlide(2);
    navigate('/');
  }
  const toList2 = () => {
    setActiveSlide(3);
    navigate('/');
  }


  return (
    <div className={`main ${isStart}`}>
      <Swiper
      touchRatio={0}
      speed={1000}
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      modules={[Mousewheel]}
      ref={portfolioSwiperRef}
      className="main-contain"
      onSlideChange={(swiper) => setP_slide(swiper.activeIndex)}
    >
      <SwiperSlide>
        <div className="portfolio-intro">
          <img src={`${process.env.PUBLIC_URL}/portfolio/${portfolioItem.main_img}`} alt={portfolioItem.name} className='intro-main'/>
          <div className="text-wrap">
            <p className='intro-subtitle'>{portfolioItem.family}</p>
            <p className='intro-title'>{portfolioItem.name}</p>
            <p className='intro-subtitle'>{portfolioItem.project_date}</p>
            <p className='intro-subtitle'>{portfolioItem.project_program}</p>
            <p className='intro-btn-wrap'>
              <a href={portfolioItem.homepage} title="포트폴리오 페이지 가기" className='portfolio-btn'  target="_blank" rel="noopener noreferrer">페이지 이동</a>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`main-comp banner`}>
          <div className="main-line">&nbsp;</div>
          <div className="main-line02">&nbsp;</div>
          <div className="main-index-wrap" id='banner'>
              {portfolioItem.name}
            <h2 className='main-title'>
              Introduce
            </h2>
            <div className="portfolio-info">
              <img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg01}`} alt={portfolioItem.name + '01'} className='portfolio-mainimg01'/>
              <div>
                <p className='portfolio-item-title'>{portfolioItem.Headtitle}</p>
                <pre className='portfolio-text'>
                {portfolioItem.text01}
                </pre>
              </div>
            </div>
            <Scroll />
          </div>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`main-comp banner`}>
          <div className="main-line">&nbsp;</div>
          <div className="main-line02">&nbsp;</div>
          <div className="main-index-wrap" id='banner'>
              {portfolioItem.name}
            <h2 className='main-title'>
              개발환경 및 디자인
            </h2>
            <div className="portfolio-info">

              <div className="design-wrap">
                <ul className='dev-chapter'>
                  <li className={`dev-chapter-btn ${tab01 === 0 ? 'active' : ''}`} onClick={() => tabChange01(0)}>UI / UX</li>
                  <li className={`dev-chapter-btn ${tab01 === 1 ? 'active' : ''}`} onClick={() => tabChange01(1)}>Library</li>
                </ul>
                <ul className="portfolio-item-wrap">
                  <li className={`design-item ${tab01 === 0 ? 'active' : ''}`}>
                  <pre className='portfolio-text'>
                    {portfolioItem.design}
                  </pre>
                  </li>
                  <li className={`design-item ${tab01 === 1 ? 'active' : ''}`}>
                  <pre className='portfolio-text'>
                    {portfolioItem.text03}
                  </pre>
                  </li>
                </ul>
              </div>


              {/* ID별 예외처리 */}
              {id === '1' || id === '4' || id === '2' || id === '7' ? (<div className="design-img_wrap">
                {img === 0 ? (<img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg02}`} alt="" className='design-image'/>) : (<img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg02}`} alt="" className='design-image disabled'/>)}
                {img === 1 ? (<img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg03}`} alt="" className='design-image'/>) : (<img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg03}`} alt="" className='design-image disabled'/>)}
                {img === 2 ? (<img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg04}`} alt="" className='design-image'/>) : (<img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg04}`} alt="" className='design-image disabled'/>)}
              </div>) : ('')}

              {id=== '3' || id === '6' || id === '5' || id === '8' ? (
              <div className="design-img_wrap">
                <img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg02}`} alt="" className='design-image'/>
              </div>) : ('')}

            </div>
          </div>
          <Scroll />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`main-comp banner`}>
          <div className="main-line">&nbsp;</div>
          <div className="main-line02">&nbsp;</div>
          <div className="main-index-wrap" id='banner'>
            <p className='main-subtitle'>
              {portfolioItem.name}
            </p>
            <h2 className='main-title'>
              Develope
            </h2>
            <div className="portfolio-developer">
              <ul className='dev-chapter'>
                <li className={`dev-chapter-btn ${tab === 0 ? 'active' : ''}`} onClick={() => tabChange(0)}>Chapter01</li>
                <li className={`dev-chapter-btn ${tab === 1 ? 'active' : ''}`} onClick={() => tabChange(1)}>Chapter02</li>
                <li className={`dev-chapter-btn ${tab === 2 ? 'active' : ''}`} onClick={() => tabChange(2)}>Chapter03</li>
                <li className={`dev-chapter-btn ${tab === 3 ? 'active' : ''}`} onClick={() => tabChange(3)}>Chapter04</li>
              </ul>
              <ul className='portfolio-developer-item'>
                <li className={`portfolio-item ${tab === 0 ? 'active' : ''}`}>
                  <pre className='portfolio-code'>
                    {portfolioItem.code1}
                  </pre>
                  <div className="portfolio-item-wrap">
                    <p className='portfolio-item-title'>{portfolioItem.title01}</p>
                    <pre className='portfolio-text'>
                      {portfolioItem.text02_1}
                    </pre>
                  </div>

                </li>
                <li className={`portfolio-item ${tab === 1 ? 'active' : ''}`}>
                  <pre className='portfolio-code'>
                    {portfolioItem.code2}
                  </pre>
                  <div className="portfolio-item-wrap">
                    <p className='portfolio-item-title'>{portfolioItem.title02}</p>
                    <pre className='portfolio-text'>
                      {portfolioItem.text02_2}
                    </pre>
                  </div>
                </li>
                <li className={`portfolio-item ${tab === 2 ? 'active' : ''}`}>
                  <pre className='portfolio-code'>
                    {portfolioItem.code3}
                  </pre>
                  <div className="portfolio-item-wrap">
                    <p className='portfolio-item-title'>{portfolioItem.title03}</p>
                    <pre className='portfolio-text'>
                      {portfolioItem.text02_3}
                    </pre>
                  </div>
                </li>
                <li className={`portfolio-item ${tab === 3 ? 'active' : ''}`}>
                  <pre className='portfolio-code'>
                    {portfolioItem.code4}
                  </pre>
                  <div className="portfolio-item-wrap">
                    <p className='portfolio-item-title'>{portfolioItem.title04}</p>
                    <pre className='portfolio-text'>
                      {portfolioItem.text02_4}
                    </pre>
                  </div>
                </li>
              </ul>

            </div>
          </div>
          <Scroll />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`main-comp banner`}>
          <div className="main-line">&nbsp;</div>
          <div className="main-line02">&nbsp;</div>
          <div className="main-index-wrap" id='banner'>
            <p className='main-subtitle'>
              {portfolioItem.name}
            </p>
            <h2 className='main-title'>
              후기 및 느낀점
            </h2>
            <div className="portfolio-info">
              <div>
                <p className='portfolio-item-title'>총평 및 후기</p>
                <pre className='portfolio-text'>
                {portfolioItem.text04}
                </pre>
              </div>
              <img src={`${process.env.PUBLIC_URL}/images/${portfolioItem.textimg01}`} alt={portfolioItem.name + '01'} className='portfolio-mainimg01'/>
            </div>
          </div>
          {id < 5 ? (<button className='portfolio-tolist' onClick={toList}>목록으로</button>) : (<button className='portfolio-tolist 2' onClick={toList2}>목록으로</button>)}
          
        </div>
      </SwiperSlide>
    </Swiper>

    {id < 5 && p_slide > 0 ? (<PortPesronPos id={id} act={act} reset={reset}/>) : (<PortPesronPos dis={dis} id={id} reset={reset}/>)}
    {id >= 5 && p_slide > 0 ? (<PortTeamPos act={act} id={id} reset={reset}/>) : (<PortTeamPos dis={dis} id={id} reset={reset}/>)}

    </div>
  );
}

export default Portfolio;
