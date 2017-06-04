'use strict'
import React from 'react';
import Card from '../Card/Card.js';

const CardList = (props) => {
  debugger;
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
};

export default CardList;