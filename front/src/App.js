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
import ShopItem from "./ShopItem/ShopItem";
import Events from "./Events/Events";
import {useCookies} from "react-cookie";
import About from "./About/About";
import EventsChoice from "./EventsChoice/EventsChoice";
import Shop from "./Shop/Shop";
import CreateNewEvent from "./CreateNewEvent/CreateNewEvent";
import Kontakt from "./Kontakt/Kontakt";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  const [navbarLightMode, setNavbarLightMode] = useState(true);
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

  const [loginError, setLoginError] = useState(false);

  const login = async (user) => {
    console.log(user)
    const resp = await fetch("http://localhost:8080/" + "user/login", {
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
      window.location.href = '/';
      setLoginError(false);
      console.log("MOZEAE");
    } else {
      setLoginError(true);
      console.log("NEMERE");
    }
  }

  console.log(navbarLightMode);

  const [loggedInUser, setLoggedInUser] = useState();
  const getUser = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/user/findByID?id=" + cookies.loggedInUserId)
        .then((response) => response.json())
        .then((data) => setLoggedInUser(data));
    }
  }
  useEffect(() => getUser(), []);

  console.log(loggedInUser);

  let originalEvents = [];
  const[events, setEvents] = useState([]);
  const getEvents = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/event/all")
        .then((response) => response.json())
        .then((data) => {
          setEvents(data)
          originalEvents = data;
        });
    }
  }
  useEffect(() => getEvents(), []);
  console.log(events);
  //events/all
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

    if (result.status === 200) {
      //nesto
      console.log("brrrrr 200")
    } else if (result.status === 403) {
      //NESTO DRUGO
      console.log("brrrrr 403")

    }
  }

  const onEventCreated = async (event) => {
    console.log(event);
    const result = await fetch(BACKEND_URL + "event/create-new?userID=" + loggedInUser.id, {
      method: "POST",
      body: JSON.stringify({
        title: event.title,
        description: event.description,
        city: event.city,
        address: event.address,
        points: event.points,
        time: event.time,
        sponsored: false,
        sponsorID: '',
        benefitID: '',
        numberOfBenefits: 0,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });

    if(result.status === 200){
      //nesto
      window.location.href = '/';
      console.log("brrrrr MOZEEE 200")
    } else if (result.status===403){
      //NESTO DRUGO
      console.log("brrrrr MOZEEE 403")

    }
  }

  console.log("SUMPOR TI");
  console.log(events);


  const userVerification = async (email) => {
    await fetch(BACKEND_URL + "user/verification?email=" + email, {
        method: "POST"
      }
    )
  }




  // useEffect(() => getRewardCode(), [])


  return (
    <BrowserRouter>
      <div className={'Body'}>
        <Navbar navbarLightMode={navbarLightMode} setNavbarLightMode={setNavbarLightMode}></Navbar>
        <Routes>
          <Route path={'/'} element={
            <div className={'Main'}>
              <Main navbarLightMode={navbarLightMode}></Main>
              {/*<Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>*/}
              {/*<Articles articles={articles} navbarLightMode={navbarLightMode}></Articles>*/}
              {/*<ShopItem navbarLightMode={navbarLightMode}></ShopItem>*/}
              {/*<Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>*/}
              <Footer navbarLightMode={navbarLightMode}></Footer>
            </div>}>
          </Route>
          <Route path={'/login'} element={
            <div className={'Main'}>
              <Login loginError={loginError} setLoginError={setLoginError} onUserLogin={login}
                     navbarLightMode={navbarLightMode}></Login>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/events-choice'} element={
            <div className={'Main'}>
              <EventsChoice navbarLightMode={navbarLightMode}></EventsChoice>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/create-new-event'} element={
            <div className={'Main'}>
              <CreateNewEvent createEvent={onEventCreated} navbarLightMode={navbarLightMode}></CreateNewEvent>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/register'} element={
            <div className={'Main'}>
              <Register navbarLightMode={navbarLightMode} verifyUser={userVerification}
                        createUser={onUserCreated}></Register>
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
              <Events events={events} setEvents={setEvents} navbarLightMode={navbarLightMode}></Events>
              <Wave waveType={1} navbarLightMode={navbarLightMode}></Wave>
              <Footer navbarLightMode={!navbarLightMode}></Footer>
            </div>
          }></Route>
          <Route path={'/shop'} element={
            <div className={'Main'}>
              <Shop navbarLightMode={navbarLightMode} cookies={cookies} ></Shop>
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
          <Route path={'/contact'} element={
            <div className={'Main'}>
              <Kontakt navbarLightMode={navbarLightMode}></Kontakt>
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
