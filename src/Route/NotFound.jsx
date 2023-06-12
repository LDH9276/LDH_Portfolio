import React from 'react';
import './css/not_found.css';

function NotFound(props) {
  return (
    <div className='not_found'>
      <h2>404 NOT FOUND</h2>
      <video src={`${process.env.PUBLIC_URL}/videos/introduce.mp4`} autoPlay loop muted className='found_video'></video>
    </div>
  );
}

export default NotFound;