'use strict'
import React from 'react';
import axios from 'axios';
import {getUserRepos, getUserInfo} from '../../tools/api.js';

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

    axios.all([
        getUserInfo(this.state.userName),
        getUserRepos(this.state.userName)
    ]).then((data) => {

        let userInfo = data[0];
        let userRepos = data[1];

        let result = {
            userInfo: userInfo,
            userRepos: userRepos
        }

        this.props.onSubmit(result);
        this.setState({ userName: '' });
    });
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