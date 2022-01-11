import React, {useEffect, useState} from "react";
import './Account.css';
import {HiUser, MdVerified, MdGrade, SiPytorchlightning} from "react-icons/all";
import {useCookies} from "react-cookie";

const Account = ({navbarLightMode}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  class UserTemp {
    constructor(username, ime, prezime, grade, points, verified) {
      this.username = username;
      this.ime = ime;
      this.prezime = prezime;
      this.grade = grade;
      this.points = points;
      this.verified = verified;
    }
  }

  const[userTemp, setUserTemp] = useState(new UserTemp(
    "username",
    "Name",
    "Surname",
    "Grade",
    "Points",
    false
  ))

  const [loggedInUser, setLoggedInUser] = useState();
  const getUser = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/user/findByID?id=" + cookies.loggedInUserId)
        .then((response) => response.json())
        .then((data) => {setUserTemp(data)});
    }
  }
  useEffect(() => getUser(), []);

  let verified;
  if (userTemp.verified)
    verified =
      <MdVerified className={'small-icon'}></MdVerified>
  else
    verified = <></>

  return (
    <div className={navbarLightMode ? 'accont-container login-container form lightMode' : 'accont-container login-container form'}>
      <div className={'container'}>
        <div className={'profile-pic'}>
          <HiUser></HiUser>
        </div>
        <h2>{userTemp.username} {verified}</h2>
        <h3>{userTemp.ime} {userTemp.prezime}</h3>
        <p>Grade: {userTemp.grade}/5 <MdGrade className={'small-icon'}></MdGrade></p>
        <p>Points: {userTemp.points} <SiPytorchlightning className={'small-icon'}></SiPytorchlightning></p>
      </div>
    </div>
  )
}

export default Account;