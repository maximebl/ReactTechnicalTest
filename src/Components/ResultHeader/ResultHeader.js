'use strict'
import React from 'react';

const ResultHeader = ({result: {login, avatar_url, public_repos}, resultCount, visible}) => {
  return (
    <div className={ visible ? "resultHeader--visible" : "resultHeader--hidden" }>
        <div>
            <img src={avatar_url} className='avatarImage'/>
        </div>
        <div className='FoundRepoInfo'>
            <div >{login}</div>
            <div className='AccentInfo'>Repositories</div>
            <div>
                Found <span className='AccentInfo'>{public_repos}</span> repositories. 
                Showing <span className='AccentInfo'>{resultCount}.</span>
            </div>
        </div>
    </div>
  );
};

export default ResultHeader;