'use strict'
class Dealer{
    constructor(hand,deck){
        this.hand = [];
        this.deck = new CardDeck();
        this.shuffle();
    }

    shuffle() {
        let deckOfCards = this.deck.deckOfCards;
        for (var i = deckOfCards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deckOfCards[i];
            deckOfCards[i] = deckOfCards[j];
            deckOfCards[j] = temp;
        }
    }
    dealCard(){
        return this.deck.deckOfCards.pop();
    }

    initialDeal(player){
        player.playerHand.push(this.dealCard());
        this.hand.push(this.dealCard());
        player.playerHand.push(this.dealCard());
        this.hand.push(this.dealCard());
    }

    
       
}


// dealCard(){
// var randomIndex = Math.floor(Math.random() * this.deck.deckOfCards.length);
        // var randomCard = this.deck.deckOfCards.splice(randomIndex,1);
        // return randomCard;
//}