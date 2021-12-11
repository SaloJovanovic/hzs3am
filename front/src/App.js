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
import Event from "./Event/Event";
import Events from "./Events/Events";
import {useCookies} from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  const[navbarLightMode, setNavbarLightMode] = useState(true);

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

  const[loggedInUser, setLoggedInUser] = useState();
  const getUser = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/user/findByID?id=" + cookies.loggedInUserId)
        .then((response) => response.json())
        .then((data) => setLoggedInUser(data));
    }
  }
  useEffect(()=>getUser(), []);

  console.log(loggedInUser);

  const[events, setEvents] = useState([]);
  const getEvents = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/event/all")
        .then((response) => response.json())
        .then((data) => setEvents(data));
    }
  }
  useEffect(()=>getEvents(), []);
  console.log(events);
  //events/all


  return (
    <BrowserRouter>
      <div className={'Body'}>
        <Navbar navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
        <Routes>
          <Route path={'/'} element= {
            <div className={'Main'}>
              <Main navbarLightMode={navbarLightMode}></Main>
              {/*<Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>*/}
              {/*<Articles articles={articles} navbarLightMode={navbarLightMode}></Articles>*/}
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
          <Route path={'/account'} element={
            <div className={'Main'}>
              <Account loggedInUser={loggedInUser} navbarLightMode={navbarLightMode}></Account>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/events'} element={
            <div className={'Main'}>
              <Events events={events} navbarLightMode={navbarLightMode}></Events>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }>
          </Route>
          <Route path={'/event/:id'} element={
              <div className={'Main'}>
                <Event navbarLightMode={navbarLightMode}></Event>
                <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
                <Footer navbarLightMode={!navbarLightMode}></Footer>
              </div>
            }>
          </Route>
          <Route path={'/events'}></Route>
          <Route path={'/privacy-policy'} element={
            <div className={'Main'}>
              <PrivacyPolicy navbarLightMode={navbarLightMode}></PrivacyPolicy>
              <Wave waveType={2} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={navbarLightMode}></Footer>
            </div>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
