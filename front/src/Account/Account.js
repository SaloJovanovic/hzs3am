import React from "react";
import './Account.css';
import {HiUser, MdVerified, MdGrade, SiPytorchlightning} from "react-icons/all";
import {useCookies} from "react-cookie";

const Account = ({navbarLightMode, loggedInUser}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  return (
    <div className={navbarLightMode ? 'accont-container login-container form lightMode' : 'accont-container login-container form'}>
      <div className={'container'}>
        <div className={'profile-pic'}>
          <HiUser></HiUser>
        </div>
        <h2>{loggedInUser.username} <MdVerified className={'small-icon'}></MdVerified></h2>
        <h3>{loggedInUser.ime} {loggedInUser.prezime}</h3>
        <p>Grade: {loggedInUser.grade}/5 <MdGrade className={'small-icon'}></MdGrade></p>
        <p>Points: {loggedInUser.points} <SiPytorchlightning className={'small-icon'}></SiPytorchlightning></p>
      </div>
    </div>
  )
}

export default Account;