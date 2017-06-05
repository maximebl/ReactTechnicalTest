'use strict'
import React from 'react';

const ResultHeader = ({result:{login, avatar_url, public_repos}, resultCount, visible}) => {
  return (
    <div style={ visible ? {display:'flex'} : {display:'none'} }>
        <div>
            <img src={avatar_url} width='200px'/>
        </div>
        <div style={{flex:1, paddingLeft:'20px'}}>
            <div>{login}</div>
            <div style={{fontWeight: 'bold'}}>Repositories</div>
            <div>
                Found <span style={{fontWeight: 'bold'}}>{public_repos}</span> repositories. 
                Showing <span style={{fontWeight: 'bold'}}>{resultCount}.</span>
            </div>
        </div>
    </div>
  );
};

export default ResultHeader;