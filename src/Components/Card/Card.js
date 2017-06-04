'use strict'
import React from 'react';
import getTimeSinceUpdate from '../../utils/api';


const Card = (props) => {

function getTimeSinceUpdateString(){
    debugger;
    let daysSinceUpdate =  props.time_since_update.days > 0 ? props.time_since_update.days + " days " : '';
    let hoursSinceUpdate =  props.time_since_update.hours > 0 ? props.time_since_update.hours + " hours " : '';
    let minutesSinceUpdate =  props.time_since_update.minutes > 0 ? props.time_since_update.minutes + " minutes " : '';
    let timeSinceUpdate = daysSinceUpdate + hoursSinceUpdate + minutesSinceUpdate;
    return timeSinceUpdate;
}
  return (
      <div style={{margin: '1em'}}>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div style={{fontSize: '1em', fontWeight: 'lighter'}}>
          {props.description}
        </div>
        <div style={{fontSize: '0.5em', fontWeight: 'lighter'}}>
        {`Updated ${getTimeSinceUpdateString()} ago.`}
        </div>
      </div>
    </div>
  );
};

export default Card;