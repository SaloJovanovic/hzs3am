import React, {useEffect} from "react";
import './Articles.css';
import Article from '../Article/Article';
import  Aos from "aos";
import "aos/dist/aos.css";

const Articles = ({navbarLightMode, events}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  return (
    <div className={navbarLightMode ? 'articles-container lightMode' : 'articles-container'}>
      <div className={"articles-title"}>
        <h1 data-aos={"fade-up"}>MENU</h1>
        <p data-aos={"fade-up"}>CHOOSE YOUR FAVOURITE ARTICLE</p>
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