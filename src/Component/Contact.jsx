import React, {useEffect, useState} from 'react';
import './css/contact.css'

function Contact({activeSlide}) {

  const [active, setActive] = useState('ready');

  useEffect(() => {
  if (activeSlide === 4) {
    setActive('');
  } else {
    setActive('ready');
  }}, [activeSlide]);

  return (
    <div className={`main-comp contact ${active}`}>
      <div className="main-line">&nbsp;</div>
      <div className="main-line02">&nbsp;</div>
      <div className="main-index-wrap">
        <p className='main-subtitle'>
          The LDH
        </p>
        <h2 className='main-title'>
          Contact
        </h2>
        <div className="contact-wrap"> 
          <div className="contact-info-wrap">
            <p className='thanks-for-watching'>
              포트폴리오를 감상해주셔서 감사합니다.<br/>
              궁금하신 사항이 있으시면 언제든지 연락주세요.
            </p>
            <div className="contact-info list01">
              <p className='main-contact-subtitle'>Mail Address</p>
              <p className='main-contact-title'>leedh9276@naver.com</p>
            </div>
            <div className="contact-info list02">
              <p className='main-contact-subtitle'>Kakao Address</p>
              <p className='main-contact-title'>dhlee9207@gmail.com</p>
            </div>
            <div className="contact-info list02">
              <p className='main-contact-subtitle'>Github Address</p>
              <p className='main-contact-title'>LDH9276</p>
            </div>
            <div className="contact-info list03">
              <p className='main-contact-notice'>해당 포트폴리오 사이트에 저장된 이미지의 저작권은 포트폴리오 사이트에 명기했습니다.</p>
              <p className='main-contact-notice'>COPYRIGHT &copy; LDH 2023</p>
            </div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/profile.webp`} alt="프로필" className='contact-profile'/>
        </div>
      </div>
      <div className="contact-bg">&nbsp;</div>
    </div>
  );
}

export default Contact;