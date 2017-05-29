describe("Player", function(){
    var player = new Player();
    var dealer = new Dealer();

    player.hitMe(dealer);
    it("When the player calls hitMe the player's hand should add a card", function(){
        expect(player.playerHand.length).toBe(1);
    });
});