'use strict'
import React from 'react';
import Card from '../Card/Card.js';

const CardList = ({cards, top, visible}) => {
  if(top){
      let topCards = cards.slice(0, top);
      return (
        <div className={visible ? 'cardList--visible' : 'cardList--hidden'}>
          {topCards.map(card => <Card key={card.id} {...card} />)}
        </div>
      );
  }
  else{
    return (
      <div className={visible ? 'cardList--visible' : 'cardList--hidden'}>
        {cards.map(card => <Card key={card.id} {...card} />)}
      </div>
    );
  }
};
export default CardList;