
describe("Dealer", function(){
/*    
        var dealer;
        beforeEach(function(){
        dealer = new Dealer();

    });
*/
     it("There should be 312 cards in the deck",function(){
        var dealer = new Dealer();
        expect(dealer.deck.deckOfCards.length).toBe(312);
    });

    it("The last card in the deck should not be Ace of Spade", function(){
        var dealer = new Dealer();
        expect(dealer.deck.deckOfCards[311].toString()).not.toEqual("Ace of Spades");
    });

it("The last card in the deck should not be an Ace of Spades", function(){
     var dealer = new Dealer();
     expect(dealer.dealCard().toString()).not.toEqual("Ace of Spades");
    });

it("The deck should decrease in size as card is delt", function(){
    var dealer = new Dealer();
    dealer.dealCard();
    dealer.dealCard();
    expect(dealer.deck.deckOfCards.length).toBe(310);
    });
});
    