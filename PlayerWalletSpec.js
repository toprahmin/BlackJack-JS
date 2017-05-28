describe("Player Wallet", function(){
    /*
    var wallet;
    beforeEach(function(){
        wallet = new PlayerWallet();
        wallet.balance = 0;
    });
    */
    it("should return hello world", function(){ 
        var wallet = new PlayerWallet();
        expect(wallet.helloWorld()).toBe("Hello World");
    });

    it("should return balance is 150", function(){
        var wallet = new PlayerWallet();
        wallet.balance = 0;
            expect(wallet.setBalance(150)).toBe(150);
        });
});
    