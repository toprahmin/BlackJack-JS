class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }

    getValue(){
        if(this.value === 11){
            return "Jack";
        } else if(this.value === 12){
            return "Queen";
        } else if(this.value === 13){
            return "King";
        } else if(this.value === 14){
            return "Ace";
        } else{
            return this.value;
        }
    }

    getSuit(){
        if(this.suit === 1){
        return "Hearts";
        } else if (this.suit === 2){
            return "Diamonds";
        } else if(this.suit === 3){
            return "Clubs";
        } else {
            return "Spades";
        }
    }

    toString(){
        return this.getValue() + " of " + this.getSuit();
    }




}