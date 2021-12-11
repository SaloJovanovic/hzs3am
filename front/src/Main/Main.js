import React, {useState} from "react";
import './Main.css';
import {Link} from 'react-router-dom';
import {useCookies} from "react-cookie";

const Main = ({navbarLightMode}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);
  let loginBtn;
  const LogOutUser = () => {
    removeCookie("loggedInUserId");
    removeCookie("loggedIn");
    window.location.href = '/';
    console.log("mhm")
  }
  if (cookies.loggedIn != null && cookies.loggedIn) {
    loginBtn = <Link to={'/'} onClick={LogOutUser} className={'btn login-register'}>LOG OUT</Link>
  }
  else {
    loginBtn = <Link to={'/login'} className={'btn login-register'}>LOGIN</Link>
  }

  // const getUser = async () => {
  //   if (cookies.loggedInUserId != null) {
  //     await fetch("http://localhost8080/" + "user/findByID?id=" + cookies.loggedInUserId)
  //       .then((response) => response.json())
  //   }
  // }


  return (
    <div className={navbarLightMode ? 'mainContainer lightMode' : 'mainContainer'} id={'main'}>
      {loginBtn}
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