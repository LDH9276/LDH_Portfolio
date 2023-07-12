import React from 'react';
import './css/scrolls.css';

function Scroll(props) {
  return (
      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
        <p className='scroll-text'>scroll</p>
      </div>  
  );
}

export default Scroll;