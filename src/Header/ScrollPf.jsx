import React from 'react';
import './css/scrolls_pf.css';

function ScrollPf(props) {
  return (
      <div className="main-scroll-downs">
        <div className="main-mousey">
          <div className="main-scroller"></div>
        </div>
        <p className='main-scroll-text'>scroll</p>
      </div>  
  );
}

export default ScrollPf;