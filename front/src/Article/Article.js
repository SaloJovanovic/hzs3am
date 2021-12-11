import React, {useEffect} from "react";
import './Article.css';
import {MdRestaurantMenu, FaHamburger, BiDrink, GiTomato, IoMdPeople, MdSportsBasketball, AiFillEye} from "react-icons/all";
import  Aos from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom';

const Article = ({navbarLightMode, socialEvent}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  return (
    // <div data-aos={"fade-up"} id={article.type} className={navbarLightMode ? 'article-container lightMode' : 'article-container'}>
    <div data-aos={"fade-up"} className={navbarLightMode ? 'article-container lightMode' : 'article-container'}>
      <div className={'col30'}>
        <IoMdPeople></IoMdPeople>
        <h2>
          {socialEvent.numI}
        </h2>
        <p>Zainteresovani korisnici</p>
      </div>
      <div className={'col70'}>
        <div className={'title'}>
          {socialEvent.title}
          <div className={'subtitle'}>
            {socialEvent.views} <AiFillEye className={'small-icon'}/>
          </div>
          <Link to={'/event/' + socialEvent.id} className={'btn'}>Vise informacija</Link>
        </div>
        <div className={'iconn'}>
          {/*{article.type === "sport" ? <MdSportsBasketball/> :*/}
          {/*  article.type === "drink" ? <BiDrink/> :*/}
          {/*  article.type === "salad" ? <GiTomato/>*/}
          {/*: <MdRestaurantMenu/>}*/}
          <MdRestaurantMenu></MdRestaurantMenu>
        </div>
      </div>
    </div>
  )
}

export default Article;