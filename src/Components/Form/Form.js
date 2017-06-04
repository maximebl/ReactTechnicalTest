'use strict'
import React from 'react';
import axios from 'axios';
import getUserRepos from '../../tools/api.js';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(event){
    event.preventDefault();
    getUserRepos(this.state.userName).then(
        (userRepos) => {
            this.props.onSubmit(userRepos);
            this.setState({ userName: '' });
        }
    );
};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github username" required />
        <button type="submit">Go</button>
      </form>
    );
  }
}