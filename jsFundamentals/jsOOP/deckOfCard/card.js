class Card {
    constructor(suit, card, value) {
        this.suit = suit;
        this.card = card;
        this.value = value;
    }
    showCardInfo() {
        console.log(`Suit: ${this.suit}, Name: ${this.nameCard}, Value: ${this.value}`)
    }
}

class DeckOfCard {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }
    // Reset method
    reset() {
        this.deck = [];
        let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
        let cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
        let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        for (let suit of suits) {
            for (let i = 0; i < cards.length; i++) {
                this.deck.push(new Card(suit, cards[i], values[i]));
            }
        }
    }
    // Shuffle method
    shuffle() {
        let count = this.deck.length,
            i;

        // While there remain elements to shuffle…
        while (count) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * count--);

            // And swap it with the current element.
            [this.deck[count], this.deck[i]] = [this.deck[i], this.deck[count]]
        }
        return this.deck
    }
    // Deal method
    deal() {
        return this.deck.pop(); // Deal should return the Card that was dealt and remove it from the Deck
    }
}

class Player extends DeckOfCard {
    constructor(name) {
        super(name)
        this.name = name;
        this.hand = [];
    }
    showPlayerInfo() {
        console.log(`my name is ${this.name}`)
    }
    draw() {
        this.hand.push(deck.deal()) // Draw an random card from deck
        // console.log(this.hand)
    }
    discard() {
        var temp, temp_num;
        temp_num = Math.floor(Math.random() * this.hand.length); // pick random card to discard
        // console.log(temp_num, this.hand.length)
        temp = this.hand[temp_num];
        // console.log(temp)
        this.hand[temp_num] = this.hand[this.hand.length - 1];
        this.hand[this.hand.length - 1] = temp;
        this.hand.pop(); // Discard card in an array which is hand
        // console.log(this.hand)
    }
}


let deck = new DeckOfCard()
let nathan = new Player('Nathan')

// console.log(deck.deck)
// deck.reset()
// console.log(deck.deck)

nathan.showPlayerInfo()
nathan.draw()
nathan.draw()
nathan.discard()