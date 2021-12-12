import React, {useEffect, useState} from "react";
import './Articles.css';
import Article from '../Article/Article';
import  Aos from "aos";
import "aos/dist/aos.css";

const Articles = ({navbarLightMode, events, setEvents}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const filterEvents = (city) => {
     fetch("http://localhost:8080/event/city-search?city=" + city)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
      });
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={navbarLightMode ? 'articles-container lightMode' : 'articles-container'}>
      <div className={"articles-title"}>
        <h1 data-aos={"fade-up"}>DOGAĐAJI</h1>
        <p data-aos={"fade-up"}>POGLEDAJTE SVE DOGAĐAJE</p>
        <div className={'filter'}>
          <input placeholder={"Unesite željeni grad"}
                 onChange={(e) => {
                   console.log("TARGET VALUE " + e.target.value)
                   if (e.target.value == "") {
                     window.location.href = '/events';
                   }
                   else {
                     filterEvents(e.target.value);
                   }
                 }}/>
        </div>
        <div className={'verifikovan'}>
          <p>Verifikovan</p>
          <div className={'verifiedChecked'}>
            <input type={'checkbox'}
                   onChange={(e) => {
                     console.log(e.target.checked);
                     let newEvents = []
                     if (e.target.checked) {
                       events.map((event) => {
                         if (event.verified)
                           newEvents.push(event);
                       })
                       setEvents(newEvents);
                     }
                     else {
                       window.location.href = '/events';
                     }
                   }}
            />
          </div>
        </div>
      </div>
      <div className={'articles-list'}>
        {events.length > 0 &&
        events.map((socialEvent) => <Article navbarLightMode={navbarLightMode} key={socialEvent.id} socialEvent={socialEvent} /> )}
        {!(events.length > 0) && <div>Lodaing...</div>}
      </div>
    </div>
  )
}

export default Articles;