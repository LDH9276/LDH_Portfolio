import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './css/header.css'
import Menus from './Menus';

function Header( {reset, isStart, setActiveSlide} ) {

  const [toggle, setToggle] = useState('');
  const [menus , setMenus] = useState(false);
  const navigate = useNavigate();

  const toMainTitle = () => {
    setToggle('');
    setTimeout(() => {
      setMenus(false);
    }, 500);
    setActiveSlide(0);
    navigate('/');
  }

  const menuEvent = () => {
    if (toggle === '') {
      setMenus(true);
      setTimeout(() => {
        setToggle('active');
      }, 0);
    } else {
      setToggle('');
      setTimeout(() => {
        setMenus(false);
      }, 500);
    }
  }
  const toggleHandleClick = () => {
    menuEvent();
  }

  return (
    <header className={`header ${isStart}`}>
      <div className="header-wrap">
        <h1 onClick={toMainTitle}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고" />
        </h1>

        <div className={`toggleBtn ${toggle}`} onClick={toggleHandleClick}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
      {menus === true && <Menus setToggle={setToggle} toggle={toggle} setActiveSlide={setActiveSlide} menuEvent={menuEvent} reset={reset}/>}
    </header>
  );
}

export default Header;