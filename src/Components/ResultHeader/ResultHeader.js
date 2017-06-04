'use strict'
import React from 'react';

const ResultHeader = ({result:{login, avatar_url}}) => {
    debugger;
  return (
    <div>
        {login}
        <img src={avatar_url} />
    </div>
  );
};

export default ResultHeader;