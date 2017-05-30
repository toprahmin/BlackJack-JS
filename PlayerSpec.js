
describe("Player", function(){
    var player = new Player();
    var dealer = new Dealer();
    var card = new Card();

    player.hitMe(dealer);
    player.hitMe(dealer);
    player.hitMe(dealer);
    it("When the player calls hitMe the player's hand should add a card", function(){
        expect(player.playerHand.length).toBe(3);
        expect(dealer.deck.deckOfCards.length).toBe(309);
    });
});

describe("GetPlayerHandValue", function(){ 
    var player = new Player();
    var dealer = new Dealer();
    var card = new Card();

    player.hitMe(dealer);
    player.hitMe(dealer);
    player.hitMe(dealer);
    var value = player.getPlayerHandValue();
    it("The playerCardValue should return a value greater than 0", function(){
        expect(value).toBeGreaterThan(0);
        expect(player.playerHand.length).toBe(3);
    });
});
