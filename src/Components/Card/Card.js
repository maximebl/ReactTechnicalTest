'use strict'
import React from 'react';
import {formatTimeSinceUpdate} from '../../tools/stringUtils';

const Card = ({name, description, time_since_update}) => {

  return (
    <div >
        <div className="card">
            <div className='RepoName'>
                {name}
            </div>
            <div className='RepoDescription'>
                {description}
            </div>
            <div className='RepoTimeSinceLastUpdate'>
                {
                    `Updated ${formatTimeSinceUpdate(
                        time_since_update.days, 
                        time_since_update.hours, 
                        time_since_update.minutes)} ago.`
                }
            </div>
        </div>
    </div>
  );
};

export default Card;