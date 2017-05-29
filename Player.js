class Player{
    constructor(name,playerBalance,playerCardValue,playerHand){
        this.name = name;
        this.playerBalance = playerBalance;
        this.playerCardValue = playerCardValue;
        this.playerHand = [];
    }

    hitMe(dealer){
        this.playerHand.push(dealer.dealRandomCard());
        return this.playerHand;
    }
}