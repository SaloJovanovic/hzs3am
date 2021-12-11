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

function App() {

  const[navbarLightMode, setNavbarLightMode] = useState(true);

  class Article {
    constructor(id, title, subtitle, type) {
      this.id = id
      this.title = title;
      this.subtitle = subtitle;
      this.type = type;
    }

  }
  const articles = [
    new Article(1, "Burger", "Opis burgera", "food"),
    new Article(2, "Pizza", "Opis pizze", "food"),
    new Article(3, "Coca-cola", "Opis Coca-cole", "drink"),
    new Article(4, "Fanta", "Opis Fante", "drink"),
    new Article(5, "Sopska salata", "Opis sopske salate", "salad"),
    new Article(5, "Kupus salata", "Opis kupus salate", "salad")
  ]

  console.log(navbarLightMode);


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
              <Login navbarLightMode={navbarLightMode}></Login>
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
          }>
          </Route>
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
