import './Shop.css'
import Article from "../Article/Article";
import React, {useEffect, useState} from "react";
import ShopItem from "../ShopItem/ShopItem";
import Aos from "aos";
const Shop = ({navbarLightMode, cookies}) => {

  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const BACKEND_URL = "http://localhost:8080/";

  const [shopItems, setShopItems] = useState([]);
  const getShopItems =  () => {
    fetch(BACKEND_URL + "sponsor/benefit/shop")
      .then((response) => response.json())
      .then((data) => setShopItems(data))
  }

  useEffect(()=>{
    getShopItems();
  },[])

  return (
    <div className={navbarLightMode ? 'shop-container lightMode' : 'shop-container'}>
      <div className={"shop-title"}>
        <h1 data-aos={"fade-up"}>NAGRADE</h1>
        <p data-aos={"fade-up"}>POSTROŠITE POENE OVDE</p>
      </div>
      <div className={navbarLightMode ? "sp-container lightMode" : "sp-container"}>
        <div className={'shop-list'}>
          {shopItems.length > 0 &&
          shopItems.map((shopItem) => <ShopItem navbarLightMode={navbarLightMode} key={shopItem.id}
                                                shopItem={shopItem} cookies={cookies}/>)}
          {!(shopItems.length > 0) && <div>Lodaing...</div>}
        </div>
      </div>
    </div>
  )
}
export default Shop;