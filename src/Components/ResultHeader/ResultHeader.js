'use strict'
import React from 'react';

const ResultHeader = ({result:{login, avatar_url, public_repos}, resultCount}) => {
    debugger;
  return (
    <div>
        <img src={avatar_url} width='200px'/>
        <div>{login}</div>
        <div>
            Found <span style={{fontWeight: 'bold'}}>{public_repos}</span> repositories. 
            Showing <span style={{fontWeight: 'bold'}}>{resultCount}.</span>
        </div>
    </div>
  );
};

export default ResultHeader;