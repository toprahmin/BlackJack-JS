"use strict";

class PlayerWallet {
    
    constructor(balance){
        this.balance = balance;
    }
   
    getBalance(){
        return this.balance;
    }

    setBalance(money){
        this.balance = this.balance + money;
        return this.balance;
    }
}


