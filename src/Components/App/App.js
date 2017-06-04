'use strict'
import React from 'react';
import GitHubUserRepos from '../GitHubUserRepos/GitHubUserRepos.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GitHubUserRepos top={10}></GitHubUserRepos> 
      </div>
    );
  }
}
