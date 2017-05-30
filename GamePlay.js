
class GamePlay{
    constructor(){
    this.dealer = new Dealer();
    this.player = new Player();
}
    display = document.getElementById("display");

displayPlayerCards(){
    for(var i = 0; i < this.player.playerHand.lenght; i++ ){
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

}

validatePlayerBalance(){

}

payPlayer(){

}

createNewGame(){

}


}
