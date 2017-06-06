'use strict'
import React from 'react';
import Form from '../Form/Form.js';
import CardList from '../CardList/CardList.js';
import ResultHeader from '../ResultHeader/ResultHeader';

export default class GitHubUserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultHeader: {},
            headerVisible: false,
            formVisible: true,
            cards: [],
            cardListVisible: false,
        };
    }
    
    addNewCard = (searchResult) => {
        this.setState(prevState => ({
            cards: searchResult.userRepos,
            resultHeader: searchResult.userInfo,
            headerVisible: true,
            cardListVisible: true,
        }));
    };

    render() {
        return (
            <div className='card-container'>
                <Form
                    visible={this.state.formVisible}
                    onClick={this.addNewCard}/>

                <ResultHeader 
                    visible={this.state.headerVisible}
                    result={this.state.resultHeader} 
                    resultCount={this.state.cards.length}/>

                <CardList
                    visible={this.state.cardListVisible}
                    cards={this.state.cards} 
                    top={this.props.top}/>
            </div>
        );
    }
}
