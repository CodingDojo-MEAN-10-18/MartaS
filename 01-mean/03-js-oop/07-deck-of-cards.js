class Card {
    constructor(suit, name, value){
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.card = name + " of " + suit + " - value of " + value;
    }
        show(){
            //console.log(`The card pulled is: Suit: ${this.suit}, String: ${this.string}, Value: ${this.value}`)
        return this;
        }
    }


class Deck {
    constructor(){
        this.deck = [];
    }
    
    createDeck(){
        //this.deck = []
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        let name = '';
        //names = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
        const values  = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        for (const suit of suits) {
            for (const value of values){
                if (value == 1){
                    name = "One";}
                if (value == 2){
                    name = "Two";}
                if (value == 3){
                    name = "Three";}
                if (value == 4){
                    name = "Four";}
                if (value == 5){
                    name = "Five";}
                if (value == 6){
                    name = "Six";}
                if (value == 7){
                    name = "Seven";}
                if (value == 8){
                    name = "Eight";}
                if (value == 9){
                    name = "Nine";}
                if (value == 10){
                    name = "Ten";}
                if (value == 11){
                    name = "Jack";}
                if (value == 12){
                    name = "Queen";}
                if (value == 13){
                    name = "King";}
                this.deck.push(new Card(suit, name, value))
                //this.deck.push(`${name} (${value}) of ${suit}`);
                    //console.log(this.name)
                
            }
        }
        return this;
    }

    reset(){
        this.deck = [];
    }
    shuffle() {
        let m = this.deck.length, t, i;
        while (m){
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        };
        return this;
    }

    dealCard(){
        this.deck.pop();
        return this;
    }

};

const deck1 = new Deck();
deck1.createDeck();
console.log(deck1);
deck1.shuffle();
console.log(deck1);
deck1.dealCard();
console.log(deck1);


deck1.reset();
console.log(deck1);