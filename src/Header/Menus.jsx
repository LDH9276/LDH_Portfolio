import React, {useState} from 'react';
import './css/menu.css'
import { useNavigate } from 'react-router-dom';

function Menus( {reset, toggle, setToggle, setActiveSlide, menuEvent} ) {

  const [menu01, setMenu01] = useState('');
  const [menu02, setMenu02] = useState('');
  const navigate = useNavigate();

  const menuOpen01 = () => {
    if (menu01 === '') {
      setMenu01('active');
      setMenu02('');
    } else {
      setMenu01('');
    }
  }
  const menuOpen02 = () => {
    if (menu02 === '') {
      setMenu02('active');
      setMenu01('');
    } else {
      setMenu02('');
    }
  }

  const gnbHandleEvent = (index) => {
    setToggle('');
    menuEvent();
    setActiveSlide(index);
    navigate('/');
  }

  const toPortfolio = (index) => {
    setToggle('');
    menuEvent();
    reset();
    navigate(`/portfolio/${index}`);
  }


  return (
    <div className={`totalmenu ${toggle}`}>
      <nav className='gnb'>
        <ul>
          <li onClick={() => gnbHandleEvent(0)}>
              Introduce
          </li>
          <li onClick={() => gnbHandleEvent(1)}>
            About Me
          </li>
          <li onClick={menuOpen01}>Person Project
            <img src={`${process.env.PUBLIC_URL}/images/lnb_toggle.svg`} alt="toggle" className={`lnb-toggle ${menu01}`} />
            <ul className={`lnb ${menu01}`}>
              <li onClick={() => gnbHandleEvent(2)}>개인 프로젝트 한 눈에 보기</li>
              <li>
                <button onClick={() => toPortfolio(4)} className='lnb-item'>
                  무인양품 프로젝트
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(3)} className='lnb-item'>
                  나만의 가계부 프로젝트
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(2)} className='lnb-item'>
                  B&O 리뉴얼 프로젝트
                </button>
              </li>
              <li>                
                <button onClick={() => toPortfolio(1)} className='lnb-item'>
                  사세 적응형 프로젝트
                </button>
              </li>
            </ul>
          </li>
          <li onClick={menuOpen02}>
            Team Project
            <img src={`${process.env.PUBLIC_URL}/images/lnb_toggle.svg`} alt="toggle" className={`lnb-toggle ${menu02}`} />
            <ul className={`lnb ${menu02}`}>
              <li onClick={() => gnbHandleEvent(3)}>팀 프로젝트 한 눈에 보기</li>
              <li>
                <button onClick={() => toPortfolio(8)} className='lnb-item'>
                  LMS프로젝트 - 유저
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(7)} className='lnb-item'>
                  LMS프로젝트 - 관리자
                </button>
              </li>
              <li>
                <button onClick={() => toPortfolio(6)} className='lnb-item'>
                  넷마블 브랜드 프로젝트
                </button>
              </li>
              <li>                
                <button onClick={() => toPortfolio(5)} className='lnb-item'>
                  시드물 반응형 프로젝트
                </button>
              </li>
            </ul>
          </li>
          <li onClick={() => gnbHandleEvent(4)}>
            Contact
          </li>
        </ul>
      </nav>
      <img src={`${process.env.PUBLIC_URL}/images/logo-white.svg`} alt="" className='menu-logo-bg' />
    </div>
  );
}

export default Menus;