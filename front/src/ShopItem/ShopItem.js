import "./ShopItem.css"
import {DiSafari, ImArrowRight, SiPytorchlightning} from "react-icons/all";
import {useEffect, useState} from "react";
const ShopItem = ({navbarLightMode, shopItem, cookies}) => {

  function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  const [rewardCode, setRewardCode] = useState("")

  const getRewardCode =  () => {
    if (cookies.loggedInUserId != null) {
      fetch("http://localhost:8080/sponsor/benefit-code?benefitID=" + shopItem.id + "&userID=" + cookies.loggedInUserId)
      setRewardCode("Promo kod: " + makeid(12))
      // return res.data;
    }
  }

  const setRC = () => {
    getRewardCode()
  }

  let notLogged = "Niste ulogovani"

  // useEffect(() => getRewardCode(), [])


  return (
    <div className={navbarLightMode?'shop-item-container lightMode':'shop-item-container'}>
        <div className={'pola'}>
          <div className={navbarLightMode?'shop-item-element lightMode':'shop-item-element'}>{shopItem.points}</div>
          <div className={navbarLightMode?'shop-item-element lightMode pahre':'shop-item-element pahre'}><SiPytorchlightning/></div>
          <div className={navbarLightMode?'shop-item-element lightMode':'shop-item-element'}><ImArrowRight/></div>
        </div>
        <div className={'pola'}>
          <div className={navbarLightMode?'shop-item-element lightMode':'shop-item-element'}>{shopItem.description}</div>
        </div>
      <img className={'shop-item-img'} src={'http://localhost:8080/sponsor/logo?sponsorID=' + shopItem.sponsorID}></img>
      <button className={navbarLightMode? 'button lightMode':'button'} onClick={setRC}>Kupi</button>
      <p className={'ppp'}>{cookies.loggedInUserId != null ? rewardCode : notLogged}</p>
    </div>
  )
}
export default ShopItem;