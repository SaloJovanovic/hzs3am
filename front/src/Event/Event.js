import React from "react";
import './Event.css'
import {HiUser, MdGrade, MdVerified, SiPytorchlightning, AiFillEye} from "react-icons/all";

const Event = ({navbarLightMode}) => {
  return (
    <div className={navbarLightMode ? 'event-container login-container form lightMode' : 'event-container login-container form'}>
      <div className={'container'}>
        <h2>Meet up kod hrama</h2>
        <h3>salejov <MdVerified className={'small-icon'}/></h3>
        <p>23.10.2022. 11:30</p>
        <p>Branicevska 12, Beograd <AiFillEye className={'small-icon'}/></p>
        <p>15 korisnika je zainteresovano <SiPytorchlightning className={'small-icon'}/></p>
      </div>
    </div>
  )
}

export default Event