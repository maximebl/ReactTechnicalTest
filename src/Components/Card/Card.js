'use strict'
import React from 'react';
import {formatTimeSinceUpdate} from '../../tools/stringUtils';

const Card = (props) => {

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
            {
                `Updated ${formatTimeSinceUpdate(
                props.time_since_update.days, 
                props.time_since_update.hours, 
                props.time_since_update.minutes)} ago.`
            }
        </div>
      </div>
    </div>
  );
};

export default Card;