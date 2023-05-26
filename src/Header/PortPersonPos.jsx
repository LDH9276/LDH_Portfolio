import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'

function PortPesronPos( {act, dis, id, reset} ) {

  const [navBtn, setNavBtn] = useState(['', '', '', '']);


  useEffect(() => {
    if (id === '1') {
      setNavBtn(['active', '', '', '']);
    } else if (id === '2') {
      setNavBtn(['', 'active', '', '']);
    } else if (id === '3') {
      setNavBtn(['', '', 'active', '']);
    } else if (id === '4') {
      setNavBtn(['', '', '', 'active']);
    }
  }, [id]);


  return (
    <nav className={`sidebar ${dis} ${act}`}>
      <span className='port-sidebarText'>개인 포트폴리오 목록</span>
      <Link to="/portfolio/1" className={`sidebar-btn ${navBtn[0]}`} onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        사세 적응형 프로젝트
      </Link>
      <Link to="/portfolio/2" className={`sidebar-btn ${navBtn[1]}`}onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        B&O 리뉴얼 프로젝트
      </Link>
      <Link to="/portfolio/3" className={`sidebar-btn ${navBtn[2]}`}onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        나만의 가계부 프로젝트
      </Link>
      <Link to="/portfolio/4" className={`sidebar-btn ${navBtn[3]}`}onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        무인양품 리뉴얼 프로젝트
      </Link>
    </nav>
  );
}

export default PortPesronPos;