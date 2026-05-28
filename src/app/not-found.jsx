import React from 'react';

export default function NotFound() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gray-900 relative overflow-hidden'>
      <h2 className="text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light z-10 drop-shadow-2xl mb-8 mix-blend-screen">404 NOT FOUND</h2>
      <p className="text-white text-2xl font-light z-10">요청하신 페이지를 찾을 수 없습니다.</p>
      <video src={`/videos/introduce.mp4`} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none'></video>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 pointer-events-none"></div>
    </div>
  );
}
