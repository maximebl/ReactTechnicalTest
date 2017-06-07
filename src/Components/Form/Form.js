'use strict'
import React from 'react';
import axios from 'axios';
import {getUserRepos, getUserInfo, getUserRepoInformation} from '../../tools/api.js';
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
            value: 'desc',
            noReposFoundError: false,
        };
    }

handleChange = (event, index, value) => {
    this.setState({value: value});
};

handleSubmit = (event) => {
    event.preventDefault();

    getUserRepoInformation(this.state.userName, this.state.value).then((userRepoInformation)=>{
        this.props.onClick(userRepoInformation);
        this.setState({ userName: '', });
    });
};

getErrorStatus = () =>{
    return this.props.error ? 'No results to show.' : '';
}

onChange = (event) =>{
    this.setState({ userName: event.target.value });
}

  render() {
    return (
    // ref attributes are used to properly select Material-UI components during unit tests only.
    <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div className={this.props.visible ? 'form--visible' : 'form--hidden'}>
                <div style={{display:'flex', justifyContent:'space-between'}}> 
                    <TextField
                        ref='UsernameField'
                        className='UsernameField'
                        hintText='Enter username here'
                        floatingLabelText='GitHub username'
                        errorText={this.getErrorStatus()}
                        onChange={this.onChange}
                        value={this.state.userName} />

                    <SelectField 
                        ref='OrderingList'
                        className='OrderingList'
                        floatingLabelText='Ordering'
                        value={this.state.value}
                        onChange={this.handleChange}>
                            <MenuItem value={'desc'} primaryText='Most recent first' />
                            <MenuItem value={'asc'} primaryText='Oldest first' />
                    </SelectField>
                </div>

                <RaisedButton
                    ref='SubmitButton'
                    className='SubmitButton'
                    label='Go'
                    icon={<ActionSearch />}
                    onClick={this.handleSubmit} />
            </div>
        </MuiThemeProvider>
    </div>
    );
  }
}
