class Player{
    constructor(){
        this.playerBalance = 500;
        this.playerHandValue = 0;
        this.playerHand = [];
    }

    hitMe(dealer){
        this.playerHand.push(dealer.dealCard());
        return this.playerHand;
    }

    getPlayerHandValue(){
        let handValue = 0;
        let size = this.playerHand.length;
        let currentCard;
        for ( var i = 0; i < size; i++){
            currentCard = this.playerHand[i].valueOf();
            handValue += currentCard;
        } return handValue;
    }

    hold(){
        
    }

}