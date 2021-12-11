import React, {useState} from "react";
import './Login.css';
import Wave from '../Wave/Wave';
import {Link} from 'react-router-dom';

const Login = ({navbarLightMode}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameSelected, setUsernameSelected] = useState(false);
  const [passwordSelected, setPasswordSelected] = useState(false);

  return (
    <>
      <div className={navbarLightMode ? 'login-container lightMode form' : 'login-container form'}>
        <div className={'container'}>
          {/*<div className={'brand-logo'}></div>*/}
          <div className={'brand-title'}>LOG IN</div>
          <div className={'inputs'}>
            <label className={usernameSelected ? 'selected' : ''}>Username</label>
            <input className={'form input'} type={'text'} placeholder={''} value={username}
                   onChange={(event) => {
                     setUsername(event.target.value)
                   }}
                    onFocus={(event) => {
                      setUsernameSelected(true);
                    }}
                    onBlur={(event) => {
                      setUsernameSelected(false);
                    }}/>
            <label className={passwordSelected ? 'selected' : ''}>Password:</label>
            <input className={'form input'} type={'password'} placeholder={''} value={password}
                   onChange={(event) => {
                     setPassword(event.target.value)
                   }}
                   onFocus={(event) => {
                     setPasswordSelected(true);
                   }}
                   onBlur={(event) => {
                     setPasswordSelected(false);
                   }}/>
            <button className={'btn'} type={'submit'}>
              Log in
            </button>
            <p>Dont have an account? <Link className={'link'} to={'/new-user'}>Sign up</Link></p>
            <p>Want to create restaurant? <Link className={'link'} to={'/new-restaurant'}>Sign up as restaurant</Link></p>
            <p>Have a restaurant on this website? <Link className={'link'} to={'/login-restaurant'}>Log in as restaurant</Link></p>
            {/*<p className={canLogInError ? 'error' : 'error active'}>False informations.</p>*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;