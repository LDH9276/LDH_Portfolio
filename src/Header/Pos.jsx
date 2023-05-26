import React, {useState} from 'react';

function Pos( {handleSlideNavigation, activeSlide} ) {

  const Position = window.scrollY;
  for(let i = 0; i < 5; i++) {
    if (activeSlide === i) {
      var navBtn = ['', '', '', '', ''];
      navBtn[i] = 'active';
    }
  }

  return (
    <nav className='sidebar'>
      <button className={`sidebar-btn ${navBtn[0]}`} onClick={() => handleSlideNavigation(0)}>
      <span className='sidebar-progress'>&nbsp;</span>
        Introduce
      </button>
      <button className={`sidebar-btn ${navBtn[1]}`} onClick={() => handleSlideNavigation(1)}>
      <span className='sidebar-progress'>&nbsp;</span>
        About Me
      </button>
      <button className={`sidebar-btn ${navBtn[2]}`} onClick={() => handleSlideNavigation(2)}>
      <span className='sidebar-progress'>&nbsp;</span>
        Person Project
      </button>
      <button className={`sidebar-btn ${navBtn[3]}`} onClick={() => handleSlideNavigation(3)}>
      <span className='sidebar-progress'>&nbsp;</span>
        Team Project
      </button>
      <button className={`sidebar-btn ${navBtn[4]}`} onClick={() => handleSlideNavigation(4)}>
      <span className='sidebar-progress'>&nbsp;</span>
        Contact
      </button>
    </nav>
  );
}

export default Pos;