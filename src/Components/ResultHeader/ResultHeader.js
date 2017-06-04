'use strict'
import React from 'react';

const ResultHeader = ({result:{login, avatar_url, public_repos}}) => {
    debugger;
  return (
    <div>
        <img src={avatar_url} width="200px"/>
        <div>{login}</div>
        <div >Found <span style={{fontWeight: "bold"}}>{public_repos}</span> repositories.</div>
    </div>
  );
};

export default ResultHeader;