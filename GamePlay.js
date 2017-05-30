
class GamePlay{
    constructor(){
    this.dealer = new Dealer();
    this.player = new Player();
    this.cardCounter = 0; 
}
    display = document.getElementById("alert");

displayPlayerCards(){
    for(var i = 0; i < this.player.playerHand.length; i++){
        display.innerHTML = this.player.playerHand[i];
    }
    
}

displayDealerCards(){
    var display = document.getElementById("display");
}

DisplayWinner(){
    var display = document.getElementById("display");
}

cardCounter(){
    let cardCounter = 0;
    cardCounter = 312 - this.dealer.deck.deckOfCards.length;
    return cardCounter;
}

// validatePlayerBalance(){
// }

// payPlayer(){
// }

// createNewGame(){
// }

}

