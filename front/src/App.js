import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Wave from "./Wave/Wave";
import Login from "./Login/Login";
import PrivacyPolicy from  "./PrivacyPolicy/PrivacyPolicy"
import * as path from "path";
import Articles from "./Articles/Articles";
import Account from "./Account/Account";
import Register from "./Register/Register";
import Event from "./Event/Event";
import {useCookies} from "react-cookie";
import About from "./About/About";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  const[navbarLightMode, setNavbarLightMode] = useState(true);
  const BACKEND_URL = "http://localhost:8080/";

  class Article {
    constructor(id, usersInterested, title, subtitle, type) {
      this.id = id;
      this.usersInterested = usersInterested;
      this.title = title;
      this.subtitle = subtitle;
      this.type = type;
    }

  }
  const articles = [
    new Article(1, 15, "Burger", "Opis burgera", "sport"),
    new Article(2, 23, "Pizza", "Opis pizze", "food"),
    new Article(3, 8, "Coca-cola", "Opis Coca-cole", "drink"),
    new Article(4, 15, "Fanta", "Opis Fante", "drink"),
    new Article(5, 12, "Sopska salata", "Opis sopske salate", "salad"),
    new Article(5, 34, "Kupus salata", "Opis kupus salate", "salad")
  ]

  const[loginError, setLoginError] = useState(false);

  const login = async (user) => {
    console.log(user)
    const resp = await fetch( "http://localhost:8080/" + "user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        logInfo: user.username,
        password: user.password,
      })
    })
      .then((response) => response.json());
    console.log(resp);
    // await setLoggedInUser(resp);
    if (resp != null && resp.success) {
      setCookie("loggedInUserId", resp.id);
      setCookie("loggedIn", true);
      window.location.href='/';
      setLoginError(false);
      console.log("MOZEAE");
    }
    else {
      setLoginError(true);
      console.log("NEMERE");
    }
  }

  console.log(navbarLightMode);

  const onUserCreated = async (user) => {
    console.log(user);
    const result = await fetch(BACKEND_URL + "user/create-new?code=" + user.code, {
      method: "POST",
      body: JSON.stringify({
        ime: user.ime,
        prezime: user.prezime,
        username: user.username,
        email: user.email,
        password: user.password,
        datumRodjenja: user.datumRodjenja,
        adresa: user.adresa,
        grad: user.grad
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if(result.status === 200){
      //nesto
      console.log("brrrrr 200")
    } else if (result.status===403){
      //NESTO DRUGO
      console.log("brrrrr 403")

    }
  }

  const userVerification = async (email) => {
    await fetch(BACKEND_URL + "user/verification?email=" + email, {
        method: "POST"
      }
    )
  }


  return (
    <BrowserRouter>
      <div className={'Body'}>
        <Navbar navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
        <Routes>
          <Route path={'/'} element= {
            <div className={'Main'}>
              <Main navbarLightMode={navbarLightMode}></Main>
              {/*<Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>*/}
              <Articles articles={articles} navbarLightMode={navbarLightMode}></Articles>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>}>
          </Route>
          <Route path={'/login'} element={
            <div className={'Main'}>
              <Login loginError={loginError} setLoginError={setLoginError} onUserLogin={login} navbarLightMode={navbarLightMode}></Login>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/register'} element={
            <div className={'Main'}>
              <Register navbarLightMode={navbarLightMode} verifyUser={userVerification} createUser={onUserCreated}></Register>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/account'} element={
            <div className={'Main'}>
              <Account navbarLightMode={navbarLightMode}></Account>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/event'} element={
              <div className={'Main'}>
                <Event navbarLightMode={navbarLightMode}></Event>
                <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
                <Footer navbarLightMode={!navbarLightMode}></Footer>
              </div>
            }>
          </Route>
          <Route path={'/privacy-policy'} element={
            <div className={'Main'}>
              <PrivacyPolicy navbarLightMode={navbarLightMode}></PrivacyPolicy>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/about'} element={
            <div className={'Main'}>
              <About navbarLightMode={navbarLightMode}></About>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
