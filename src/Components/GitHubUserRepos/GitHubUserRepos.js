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
            cards: [],
            headerVisible: false,
            formVisible: true,
            cardListVisible: false,
            error: false,
        };
    }
    
    addNewCard = (searchResult) => {
        if (searchResult.success) {
            this.setState(prevState => ({
                cards: searchResult.userRepos,
                resultHeader: searchResult.userInfo,
                headerVisible: true,
                cardListVisible: true,
                error: false
            }));
        }
        else {
            this.setState(prevState => ({
                error: true,
            }));
        }

    };

    render() {
        return (
            <div className='card-container'>
                <Form
                    visible={this.state.formVisible}
                    onClick={this.addNewCard}
                    error={this.state.error}/>

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
