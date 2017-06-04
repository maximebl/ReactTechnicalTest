'use strict'
import React from 'react';
import Form from '../Form/Form.js';
import CardList from '../CardList/CardList.js';

export default class GitHubUserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.addNewCard = this.addNewCard.bind(this);
    }
    
    addNewCard(cardInfo){
            debugger;
        this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
        }));
    };
  
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        {/*result header component here*/}
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
