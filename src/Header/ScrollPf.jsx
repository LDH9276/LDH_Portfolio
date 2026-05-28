import React from 'react';

function ScrollPf(props) {
  return (
    <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20'>
      <div className="w-[30px] h-[45px] rounded-full border-2 border-white relative">
        <span className="block w-[4px] h-[8px] bg-white rounded-full absolute top-[8px] left-1/2 -translate-x-1/2 animate-ping"></span>
      </div>
      <p className='text-white mt-2 text-sm font-semibold tracking-widest'>SCROLL</p>
    </div>
  );
}

export default ScrollPf;