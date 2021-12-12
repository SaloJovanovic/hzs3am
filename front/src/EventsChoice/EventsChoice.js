import React from "react";
import './EventsChoice.css';
import {Link} from 'react-router-dom';
import {BsPlusCircleFill} from "react-icons/all";

const EventsChoice = ({navbarLightMode}) => {
  return (
    <div className={navbarLightMode ? 'events-choice-container login-container form lightMode' : 'events-choice-container login-container form'}>
      <div className={'container'}>
        <Link className={'linkk'} to={'/events'}>
          <BsPlusCircleFill></BsPlusCircleFill>
          Pogledaj sve događaje
        </Link>
      </div>
    </div>
  )
}

export default EventsChoice;