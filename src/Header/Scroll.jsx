import React from 'react';
import './css/scrolls.css';

function Scroll(props) {
  return (
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
        <p className='scroll-text'>scroll</p>
      </div>  
  );
}

export default Scroll;