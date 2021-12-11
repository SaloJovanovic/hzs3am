import React from "react";
import './Account.css';
import {HiUser, MdVerified, MdGrade, SiPytorchlightning} from "react-icons/all";

const Account = ({navbarLightMode}) => {
  return (
    <div className={navbarLightMode ? 'accont-container login-container form lightMode' : 'accont-container login-container form'}>
      <div className={'container'}>
        <div className={'profile-pic'}>
          <HiUser></HiUser>
        </div>
        <h2>salejov <MdVerified className={'small-icon'}></MdVerified></h2>
        <h3>Aleksandar Jovanovic</h3>
        <h3>Grade: 4.3/5 <MdGrade className={'small-icon'}></MdGrade></h3>
        <p>Points: 1500 <SiPytorchlightning className={'small-icon'}></SiPytorchlightning></p>
      </div>
    </div>
  )
}

export default Account;