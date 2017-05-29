class CardDeck{
    constructor(){
        this.deckOfCards = this.newDeck();
    }

    newDeck(){
        this.deckOfCards = [];
        for(var k = 0; k< 6;k++){
            for(var i = 1; i< 5;i++){
                for(var j = 2; j< 15; j++){
                    var card = new Card(j, i);
                    this.deckOfCards.push(card);
                }
            }
        }
        return this.deckOfCards;
    }

}