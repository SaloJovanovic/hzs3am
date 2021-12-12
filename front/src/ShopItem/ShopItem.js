import "./ShopItem.css"
import {ImArrowRight, SiPytorchlightning} from "react-icons/all";
import {useState} from "react";
const ShopItem = (navbarLightMode) => {
  const [item, setItem] = useState("brrrrrrrrrrrrrrrrrrr")

  return(
    <>
      <div className={'item-container'}>
        <p>100<SiPytorchlightning/><ImArrowRight/>{item}</p>
      </div>
    </>
  )
}
export default ShopItem;