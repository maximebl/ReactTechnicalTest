'use strict'

export default class Cards {
    constructor(){
        this.cards = document.querySelectorAll('.card');

        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.update = this.update.bind(this);

        this.addEventListeners();
    }
    addEventListeners(){
        document.addEventListener('touchstart', this.onStart);
        document.addEventListener('touchmove', this.onMove);
        document.addEventListener('touchend', this.onEnd);
        
    }
    onStart(evt){
        if (!evt.target.classList.contains('card'))
            return;
        
        console.log('card!');
    }
    onMove(evt){

    }
    onEnd(evt){

    }
    update(evt){

    }
}

window.addEventListener('load', () => new Cards());