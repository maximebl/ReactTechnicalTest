'use strict'
import React from 'react';
import Card from '../Card/Card.js';

const CardList = ({cards, top}) => {
  debugger;
  if(top){
      let topCards = cards.slice(0, top);
      return (
        <div>
          {topCards.map(card => <Card key={card.id} {...card} />)}
        </div>
      );
  }
  else{
    return (
      <div>
        {cards.map(card => <Card key={card.id} {...card} />)}
      </div>
    );
  }
};

export default CardList;