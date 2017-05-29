class Dealer{
    constructor(hand,deck){
        this.hand = hand;
        this.deck = new CardDeck();
    }

    dealPlayerACard(){
        if(Player.playerCardValue < 21){
        
        }
    }

    shuffleDeck(){
        for (var i = this.deck.deckOfCards - 1; i > 0; i--){
            var k = Math.floor(Math.random()*(i+1));
            var shuffledCardArray = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[k];
            this.deck.deckOfCards[k] = shuffledCardArray;
        }
        return shuffledCardArray;
    }
}