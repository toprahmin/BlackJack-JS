describe("Dealer", function(){
    
        var dealer;
        beforeEach(function(){
        dealer = new Dealer();

    });

     it("There should be 312 cards in the deck",function(){
        expect(dealer.deck.deckOfCards.length).toBe(312);
    });

    it("The last card in the deck should be Ace of Spade", function(){
        expect(dealer.deck.deckOfCards[311].toString()).toEqual("Ace of Spades");
    });

    it("The last card in the deck should not be an Ace of Spades", function(){
        expect(dealer.shuffleDeck.toString()).toEqual("Ace of Spades");
    });
});
    