import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'

function PortTeamPos( {act, dis, id, reset} ) {

  const [navBtn, setNavBtn] = useState(['', '', '', '']);


  useEffect(() => {
    if (id === '5') {
      setNavBtn(['active', '', '', '']);
    } else if (id === '6') {
      setNavBtn(['', 'active', '', '']);
    } else if (id === '7') {
      setNavBtn(['', '', 'active', '']);
    } else if (id === '8') {
      setNavBtn(['', '', '', 'active']);
    }
  }, [id]);


  return (
    <nav className={`sidebar ${dis} ${act}`}>
      <span className='port-sidebarText'>팀 포트폴리오 목록</span>
      <Link to="/portfolio/5" className={`sidebar-btn ${navBtn[0]}`} onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        시드물 반응형 프로젝트
      </Link>
      <Link to="/portfolio/6" className={`sidebar-btn ${navBtn[1]}`}onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        넷마블 브랜드 프로젝트
      </Link>
      <Link to="/portfolio/7" className={`sidebar-btn ${navBtn[2]}`}onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        LMS프로젝트 - 관리자
      </Link>
      <Link to="/portfolio/8" className={`sidebar-btn ${navBtn[3]}`}onClick={reset}>
      <span className='sidebar-progress'>&nbsp;</span>
        LMS프로젝트 - 유저
      </Link>
    </nav>
  );
}

export default PortTeamPos;