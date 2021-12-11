import React, {useState} from "react";
import './Main.css';
import {Link} from 'react-router-dom';

const Main = ({navbarLightMode}) => {
  return (
    <div className={navbarLightMode ? 'mainContainer lightMode' : 'mainContainer'} id={'main'}>
      <div className={'header-heading'}>
        <h3>It's Great Time For Some Tasty Food</h3>
        <h1><span>FORK</span> O'CLOCK</h1>
        <p className={'details'}>ORDER YOUR FAVORITE FOOD OR RESERVE SPOT IN YOUR FAVORITE RESTAURANT</p>
        <div className={'header-btns'}>
          <Link to={'/all-restaurants'} smooth={true} duration={500} className={'btn'}>Order or Reserve</Link>
        </div>
      </div>
    </div>
  )
}

export default Main;