import React from "react";
import './EventsChoice.css';
import {Link} from 'react-router-dom';
import {BsPlusCircleFill, IoPeople} from "react-icons/all";

const EventsChoice = ({navbarLightMode}) => {
  return (
    <div className={navbarLightMode ? 'events-choice-container login-container form lightMode' : 'events-choice-container login-container form'}>
      <div className={'container'}>
        <Link className={'linkk'} to={'/events'}>
          <IoPeople></IoPeople>
          Pogledaj sve događaje
        </Link>
        <Link className={'linkk'} to={'/create-new-event'}>
          <BsPlusCircleFill></BsPlusCircleFill>
          Napravi novi događaj
        </Link>
      </div>
    </div>
  )
}

export default EventsChoice;