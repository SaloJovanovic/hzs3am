import React, {useState} from "react";
import './Main.css';
import {Link} from 'react-router-dom';

const Main = ({navbarLightMode}) => {
  return (
    <div className={navbarLightMode ? 'mainContainer lightMode' : 'mainContainer'} id={'main'}>
      <Link to={'/login'} className={'btn login-register'}>LOGIN</Link>
      <div className={'header-heading'}>
        <h3>Postani deo organizacije za izlazak iz izolacije</h3>
        <h1><span>RE</span>CHARGE</h1>
        <h3 className={'details'}>Opusti se, izađi iz zone komfora, pridruži nam se, upoznaj nove ljude i spremi se za nova znanja i iskustva.</h3>
        <div className={'header-btns'}>
          <Link to={'/all-restaurants'} smooth={true} duration={500} className={'btn'}>Događaji</Link>
        </div>
      </div>
    </div>
  )
}

export default Main;