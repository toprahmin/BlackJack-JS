describe("Player Wallet", function(){
    
    var wallet;
    beforeEach(function(){
        wallet = new PlayerWallet();
        wallet.balance = 0;
    });
    

    it("Should return the balance of the wallet", function(){
        expect(wallet.getBalance()).toBe(0);
    })

    it("should return balance is 150", function(){
            expect(wallet.setBalance(150)).toBe(150);
        });

    
});
    