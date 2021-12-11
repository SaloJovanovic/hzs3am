import React, {useState} from "react";
import './Navbar.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {FaCat, RiAliensFill, AiFillRocket, IoLogoWindows, BsFillMoonFill, IoLogoCss3, BsSun} from "react-icons/all";

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
            <span className={'link-text'}>Fireship</span>
            <IoLogoWindows className={'icon'}></IoLogoWindows>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <FaCat className={'icon'}></FaCat>
            <span className={'link-text'}>Cats</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/'}>
            <RiAliensFill className={'icon'}></RiAliensFill>
            <span className={'link-text'}>Aliens</span>
          </Link>
        </li>

        <li className={'nav-item'}>
          <Link className={'nav-link'} to={'/login'}>
            <AiFillRocket className={'icon'}></AiFillRocket>
            <span className={'link-text'}>Space</span>
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