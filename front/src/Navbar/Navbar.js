import React, {useState} from "react";
import './Navbar.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {FaCat, RiAliensFill, AiFillRocket, IoLogoWindows, BsFillMoonFill, IoLogoCss3, BsSun, GiLightningHelix, SiHomeassistant, MdOutlineEmojiPeople, HiUser} from "react-icons/all";

const Navbar = ({navbarLightMode, setNavbarLightMode}) => {
  // const[navbarLightMode, setNavbarLightMode] = useState(false);

  const changeColorMode = () => {
    if (!navbarLightMode)
      setNavbarLightMode(true);
    else
      setNavbarLightMode(false);
  }

  let colorModeSwitcher;
  if (!navbarLightMode) {
      colorModeSwitcher =
        <>
          <BsSun className={'icon'}></BsSun>
          <span className={'link-text'}>Light mode</span>
        </>
  }
  else {
    colorModeSwitcher =
    colorModeSwitcher =
      <>
        <BsFillMoonFill className={'icon'}></BsFillMoonFill>
        <span className={'link-text'}>Dark mode</span>
      </>
  }

  return (
    <div className={navbarLightMode ? 'navbar lightMode' : 'navbar'}>
      <ul className={'navbar-nav'}>
        <li className={'logo'}>
          <Link className={'nav-link'} to={'/'}>
            <span className={'link-text'}>RECHARGE</span>
            <GiLightningHelix className={'icon'}></GiLightningHelix>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <SiHomeassistant className={'icon'}></SiHomeassistant>
            <span className={'link-text'}>Početna</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <MdOutlineEmojiPeople className={'icon'}></MdOutlineEmojiPeople>
            <span className={'link-text'}>Dešavanja</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/account'}>
            <HiUser className={'icon'}></HiUser>
            <span className={'link-text'}>Nalog</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link onClick={changeColorMode} className={'nav-link'} to={'#'}>
            <>
              {colorModeSwitcher}
            </>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;