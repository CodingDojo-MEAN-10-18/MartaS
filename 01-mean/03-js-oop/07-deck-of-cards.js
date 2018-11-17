class Card {
    constructor(suit, name, value){
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.card = name + " of " + suit + " - value of " + value;
    }
}


class Deck {
    constructor(){
        this.deck = [];
    }
    
    createDeck(){
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        let name = '';
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
        return this.deck.pop();
    }

};

class Player{
    constructor(name) {
        this.name = name;
        this.hand = []
    }

    take(deck) {
        this.hand.push(deck.dealCard());
        return this;   
    }
    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new Deck();
deck1.createDeck();
console.log(deck1);
deck1.shuffle();
console.log(deck1);
randomCard = deck1.dealCard();
console.log(randomCard);


const player1 = new Player('Marta');
console.log(player1)
player1.take(deck1).take(deck1)
console.log('PLAYERS HAND:', player1.hand)
player1.discard()
console.log('DISCARDED CARD:', player1.hand)

deck1.reset();
//console.log(deck1);
