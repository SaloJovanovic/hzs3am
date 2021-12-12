import "./ShopItem.css"
import {DiSafari, ImArrowRight, SiPytorchlightning} from "react-icons/all";
import {useState} from "react";
const ShopItem = (navbarLightMode) => {
  const [item, setItem] = useState("brrrrrrrrrrrrrrrrrrr")

  return (
    <div className={'item-container'}>
      <div className={'item-element'}>100</div>
      <div className={'item-element'}><SiPytorchlightning/></div>
      <div className={'item-element'}><ImArrowRight/></div>
      <div className={'item-element'}>{item}</div>
    </div>
  )
}
export default ShopItem;