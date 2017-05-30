
describe("GamePlay", function(){
    var gamePlay;
        beforeEach(function(){
        gamePlay = new GamePlay();
        });
it("The card Counter should read 6 cards", function(){ 
        // player.hitMe(dealer);
        // player.hitMe(dealer);
        // player.hitMe(dealer);
        // player.hitMe(dealer);
        // player.hitMe(dealer);
        // player.hitMe(dealer);
        expect(gamePlay.cardCounter()).toBe(6);
        });
});