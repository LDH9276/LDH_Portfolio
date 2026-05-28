import React from 'react';

function Scroll(props) {
  return (
    <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20'>
      <div className="w-[30px] h-[45px] rounded-full border-2 border-primary relative">
        <span className="block w-[4px] h-[8px] bg-primary rounded-full absolute top-[8px] left-1/2 -translate-x-1/2 animate-ping"></span>
      </div>
      <p className='text-primary mt-2 text-sm font-semibold tracking-widest'>SCROLL</p>
    </div>
  );
}

export default Scroll;