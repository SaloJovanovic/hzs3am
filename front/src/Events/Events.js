import React from "react";
import './Events.css';
import Articles from '../Articles/Articles';

const Events = ({navbarLightMode, events, setEvents}) => {
  return (
    <div className={'events-container'}>
        <Articles navbarLightMode={navbarLightMode} events={events} setEvents={setEvents}></Articles>
    </div>
  )
}

export default Events;