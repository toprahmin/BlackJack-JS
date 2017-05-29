

describe("Cards", function(){
        var card;
        beforeEach(function(){
        card = new Card(7,2);
    });


    it("This card should return a value of 7 Diamonds",function(){
        expect(card.getValue()).toBe(7);
    });

    it("This card should return a suit of Diamonds", function(){
        expect(card.getSuit()).toBe("Diamonds");
    });

    it("This card should return 7 of Diamonds", function(){
        expect(card.toString()).toEqual("7 of Diamonds");
    });
});