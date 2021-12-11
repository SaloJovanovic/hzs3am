import React from "react";
import './Events.css';
import Articles from '../Articles/Articles';

const Events = ({navbarLightMode, events}) => {
  return (
    <div className={'events-container'}>
        <Articles navbarLightMode={navbarLightMode} events={events}></Articles>
    </div>
  )
}

export default Events;