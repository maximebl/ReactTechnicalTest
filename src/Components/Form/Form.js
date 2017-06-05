'use strict'
import React from 'react';
import axios from 'axios';
import {getUserRepos, getUserInfo} from '../../tools/api.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Required at the top of the script to properly dispatch Material-UI components onClick events.
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
    this.setState({value: value})
};

handleSubmit = (event) => {
    event.preventDefault();

    axios.all([
        getUserInfo(this.state.userName),
        getUserRepos(this.state.userName, this.state.value)
    ]).then((data) => {
        let userInfo = data[0];
        let userRepos = data[1];

        let result = {
            userInfo: userInfo,
            userRepos: userRepos
        }

        this.props.onClick(result);
        this.setState({ userName: '' });
    });
    };

  render() {
    return (
    <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div style={{display:'table', width:'100%'}}>
                <TextField
                    hintText="Enter username here"
                    style={{marginRight:'20px'}}
                    floatingLabelText="GitHub username"
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    value={this.state.userName} />

                <RaisedButton
                    label="Go"
                    icon={<ActionSearch />}
                    onClick={this.handleSubmit} />

                <SelectField floatingLabelText="Ordering"
                    value={this.state.value}
                    style={{display:'table-cell'}}
                    onChange={this.handleChange}>
                    <MenuItem value={'desc'} primaryText='Most recent first' />
                    <MenuItem value={'asc'} primaryText='Oldest first' />
                </SelectField>
            </div>
        </MuiThemeProvider>
    </div>
    );
  }
}