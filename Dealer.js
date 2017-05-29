class Dealer{
    constructor(hand,deck){
        this.hand = hand;
        this.deck = new CardDeck();
    }
    

    dealRandomCard(){
        var randomIndex = Math.floor(Math.random() * this.deck.deckOfCards.length);
        var randomCard = this.deck.deckOfCards.splice(randomIndex,1);
        return randomCard;
    }
       /* 
        for (var i = this.deck.deckOfCards - 1; i > 0; i--){
            var k = Math.floor(Math.random()*(i+1));
            var shuffledCardArray = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[k];
            this.deck.deckOfCards[k] = shuffledCardArray;
        }
        return this.deck.deckOfCards;
    */

}
