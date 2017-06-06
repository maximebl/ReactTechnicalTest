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
            resultHeader: {},
            headerVisible: false,
            formVisible: true,
        };
    }
    
    addNewCard = (searchResult) => {
        this.setState(prevState => ({
            cards: searchResult.userRepos,
            resultHeader: searchResult.userInfo,
            headerVisible: true
        }));
    };

    render() {
        return (
            <div className='card-container'>
                <Form
                    onClick={this.addNewCard}
                    visible={this.state.formVisible} />

                <ResultHeader 
                    result={this.state.resultHeader} 
                    resultCount={this.state.cards.length}
                    visible={this.state.headerVisible}/>

                <CardList 
                    cards={this.state.cards} 
                    top={this.props.top}/>
            </div>
        );
    }
}
