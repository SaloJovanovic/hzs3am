import React, {useEffect, useState} from "react";
import './CreateNewEvent.css';
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";

const CreateNewEvent = ({navbarLightMode}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  const[loggedInUser, setLoggedInUser] = useState();
  const getUser = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/user/findByID?id=" + cookies.loggedInUserId)
        .then((response) => response.json())
        .then((data) => setLoggedInUser(data));
    }
  }
  useEffect(()=>getUser(), []);

  const[title, setTitle] = useState("");
  const[time, setTime] = useState(new Date(0, 0, 0));
  const[description, setDescription] = useState("");
  const[city, setCity] = useState("");
  const[address, setAddress] = useState("");
  const[points, setPoints] = useState(0);

  return (
    <div className={navbarLightMode ? 'new-event-container login-container form lightMode' : 'new-event-container login-container form'}>
      <div className={'container'}>
        <div className={'brand-title'}>NAPRAVITE NOVI DOGAĐAJ</div>
        <div className={'inputs'}>
          {/*<label className={usernameSelected ? 'selected' : ''}>Username</label>*/}
          {/*<input className={'form input'} type={'text'} placeholder={''} value={username}*/}
          {/*       onChange={(event) => {*/}
          {/*         setUsername(event.target.value)*/}
          {/*       }}*/}
          {/*       onFocus={(event) => {*/}
          {/*         setUsernameSelected(true);*/}
          {/*       }}*/}
          {/*       onBlur={(event) => {*/}
          {/*         setUsernameSelected(false);*/}
          {/*       }}/>*/}
          {/*<label className={passwordSelected ? 'selected' : ''}>Password:</label>*/}
          {/*<input className={'form input'} type={'password'} placeholder={''} value={password}*/}
          {/*       onChange={(event) => {*/}
          {/*         setPassword(event.target.value)*/}
          {/*       }}*/}
          {/*       onFocus={(event) => {*/}
          {/*         setPasswordSelected(true);*/}
          {/*       }}*/}
          {/*       onBlur={(event) => {*/}
          {/*         setPasswordSelected(false);*/}
          {/*       }}/>*/}
          <button className={'btn'} type={'submit'}>
            Log in
          </button>
          <p>Dont have an account? <Link className={'link'} to={'/register'}>Sign up</Link></p>
          <p>Want to create restaurant? <Link className={'link'} to={'/new-restaurant'}>Sign up as restaurant</Link></p>
          <p>Have a restaurant on this website? <Link className={'link'} to={'/login-restaurant'}>Log in as restaurant</Link></p>
          {/*<p className={loginError ? 'error active' : 'error'}>Netacne informacije.</p>*/}
        </div>
      </div>
    </div>
  )
}

export default CreateNewEvent;