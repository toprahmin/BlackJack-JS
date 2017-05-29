describe("Card deck", function(){
        var cardDeck;
        beforeEach(function(){
        cardDeck = new CardDeck;
    });

    it("There should be 312 cards in the deck",function(){
        expect(cardDeck.newDeck().length).toBe(312);
    });

    it("The last card in the deck should be", function(){
        expect(cardDeck.deckOfCards[311].toString()).toEqual("Ace of Spades");
    });
});