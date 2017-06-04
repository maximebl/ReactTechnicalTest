'use strict'
import React from 'react';
import Form from '../Form/Form.js';
import CardList from '../CardList/CardList.js';
import ResultHeader from '../ResultHeader/ResultHeader';

export default class GitHubUserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            resultHeader:{},
        };
    }
    
    addNewCard = (searchResult) => {
        this.setState(prevState => ({
            cards: searchResult.userRepos,
            resultHeader: searchResult.userInfo
        }));
    };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <ResultHeader result={this.state.resultHeader}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
