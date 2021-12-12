import React, {useEffect, useState} from "react";
import './CreateNewEvent.css';
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateNewEvent = ({navbarLightMode, createEvent}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['loggedInUserId, loggedIn']);

  const[verified1, setVerified1] = useState(false);
  const[loggedInUser, setLoggedInUser] = useState();
  const[maxPoints, setMaxPoints] = useState(10);
  const getUser = async () => {
    if (cookies.loggedInUserId != null) {
      await fetch("http://localhost:8080/user/findByID?id=" + cookies.loggedInUserId)
        .then((response) => response.json())
        .then((data) => {
          setLoggedInUser(data)
          setVerified1(data.verified);
          if (data.verified)
            setMaxPoints(50);
        });
    }
  }
  useEffect(()=>getUser(), []);

  const[title, setTitle] = useState("");
  const[time, setTime] = useState(new Date());
  const[time1, setTime1] = useState("");
  const[description, setDescription] = useState("");
  const[city, setCity] = useState("");
  const[address, setAddress] = useState("");
  const[points, setPoints] = useState(0);

  const[titleInp, setTitleInp] = useState("");
  const[timeInp, setTimeInp] = useState("");
  const[time1Inp, setTime1Inp] = useState("");
  const[descriptionInp, setDescriptionInp] = useState("");
  const[cityInp, setCityInp] = useState("");
  const[addressInp, setAddressInp] = useState("");
  const[pointsInp, setPointsInp] = useState("");

  const[titleSelected, setTitleSelected] = useState(false);
  const[timeSelected, setTimeSelected] = useState(false);
  const[time1Selected, setTime1Selected] = useState(false);
  const[descriptionSelected, setDescriptionSelected] = useState(false);
  const[citySelected, setCitySelected] = useState(false);
  const[addressSelected, setAddressSelected] = useState(false);
  const[pointsSelected, setPointsSelected] = useState(false);

  const CreateNewUser = () => {
    setTitle("");
    setTime(new Date(0, 0, 0));
    setDescription("");
    setCity("");
    setAddress("");
    setPoints(0);

    setTitleInp("");
    setTimeInp()
    setDescriptionInp("");
    setCityInp("");
    setAddressInp("");
    setPointsInp("");

    const timeFinal = time.toString() + "T" + time1 + ":00.000";

    createEvent({
      title: title,
      time: timeFinal,
      description: descriptionInp,
      city: city,
      address: address,
      points: points,
    })
  }

  return (
    <div className={navbarLightMode ? 'new-event-container login-container form lightMode' : 'new-event-container login-container form'}>
      <div className={'container'}>
        <div className={'brand-title'}>NAPRAVITE NOVI DOGAĐAJ</div>
        <div className={'inputs'}>
          <label className={titleSelected ? 'selected' : ''}>Naziv:</label>
          <input className={titleInp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'text'}
                 placeholder={titleInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Ime'} value={title}
                 onChange={(event) => {
                   setTitle(event.target.value)
                 }}
                 onFocus={(event) => {
                   setTitleSelected(true);
                 }}
                 onBlur={(event) => {
                   setTitleSelected(false);
                 }}/>
          <label className={descriptionSelected ? 'selected' : ''}>Opis:</label>
          <input className={descriptionInp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'text'}
                 placeholder={descriptionInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Ime'} value={description}
                 onChange={(event) => {
                   setDescription(event.target.value)
                 }}
                 onFocus={(event) => {
                   setDescriptionSelected(true);
                 }}
                 onBlur={(event) => {
                   setDescriptionSelected(false);
                 }}/>
          <label className={citySelected ? 'selected' : ''}>Grad:</label>
          <input className={cityInp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'text'}
                 placeholder={cityInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Ime'} value={city}
                 onChange={(event) => {
                   setCity(event.target.value)
                 }}
                 onFocus={(event) => {
                   setCitySelected(true);
                 }}
                 onBlur={(event) => {
                   setCitySelected(false);
                 }}/>
          <label className={addressSelected ? 'selected' : ''}>Adresa:</label>
          <input className={addressInp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'text'}
                 placeholder={addressInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Ime'} value={address}
                 onChange={(event) => {
                   setAddress(event.target.value)
                 }}
                 onFocus={(event) => {
                   setAddressInp(true);
                 }}
                 onBlur={(event) => {
                   setAddressInp(false);
                 }}/>
          <label className={pointsSelected ? 'selected' : ''}>Poeni:</label>
          <input className={pointsInp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'number'}
                 placeholder={pointsInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Ime'} value={points}
                 onChange={(event) => {
                   if (event.target.value > maxPoints)
                     event.target.value = maxPoints;
                   setPoints(event.target.value)
                 }}
                 onFocus={(event) => {
                   setPointsInp(true);
                 }}
                 onBlur={(event) => {
                   setPointsInp(false);
                 }}/>
          <label className={timeSelected ? 'selected' : ''}>Datum:</label>
          <input
            className={timeInp == 'error' ? 'form input datumRodjenja-input error' : 'form input datumRodjenja-input'}
            type={'date'}
            placeholder={timeInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Datum rodjenja'}
            value={time}
            onChange={(event) => {
              setTime(event.target.value)
            }}
            onFocus={(event) => {
              setTimeSelected(true);
            }}
            onBlur={(event) => {
              setTimeSelected(false);
            }}/>
          <label className={time1Selected ? 'selected' : ''}>Vreme:</label>
          <input className={time1Inp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'text'}
                 placeholder={time1Inp == 'error' ? 'Unesi manje od 20 karaktera' : 'Vreme'} value={time1}
                 onChange={(event) => {
                   if (event.target.value.length <= 5)
                    setTime1(event.target.value)
                 }}
                 onFocus={(event) => {
                   setTime1Inp(true);
                 }}
                 onBlur={(event) => {
                   setTime1Inp(false);
                 }}/>
          <button className={'btn'} type={'submit'} onClick={CreateNewUser} >
            Napravi događaj
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateNewEvent;