import React, {useEffect} from "react";
import './Article.css';
import {MdRestaurantMenu, FaHamburger, BiDrink, GiTomato, IoMdPeople, MdSportsBasketball} from "react-icons/all";
import  Aos from "aos";
import "aos/dist/aos.css";

const Article = ({navbarLightMode, article}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  return (
    <div data-aos={"fade-up"} id={article.type} className={navbarLightMode ? 'article-container lightMode' : 'article-container'}>
      <div className={'col30'}>
        <IoMdPeople></IoMdPeople>
        <h2>
          {article.usersInterested}
        </h2>
        <p>Interested Users</p>
      </div>
      <div className={'col70'}>
        <div className={'title'}>
          {article.title}
          <div className={'subtitle'}>
            {article.subtitle}
          </div>
        </div>
        <div className={'iconn'}>
          {article.type === "sport" ? <MdSportsBasketball/> :
            article.type === "drink" ? <BiDrink/> :
            article.type === "salad" ? <GiTomato/>
          : <MdRestaurantMenu/>}
          {/*<MdRestaurantMenu></MdRestaurantMenu>*/}
        </div>
      </div>
    </div>
  )
}

export default Article;