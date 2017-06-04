'use strict'
import React from 'react';
import axios from 'axios';
import {getUserRepos, getUserInfo} from '../../tools/api.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            value: 'desc'
        };
    }

handleChange = (event, index, value) => {
    debugger;
    this.setState({value: value})
};

handleSubmit = (event) => {
    event.preventDefault();

    axios.all([
        getUserInfo(this.state.userName),
        getUserRepos(this.state.userName, 'desc')
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
        <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <SelectField floatingLabelText="Ordering"
                    value={this.state.value}
                    onChange={this.handleChange}>
                    <MenuItem value={'desc'} primaryText='Most recent first' />
                    <MenuItem value={'asc'} primaryText='Oldest first' />
                </SelectField>
            </div>
        </MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
            <input type="text"
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
            placeholder="Github username" required />
            <button type="submit">Go</button>
            
        </form>
      </div>
    );
  }
}