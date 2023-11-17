class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }

    // Dustin's Version
    // for (let i = 0; i < this.cards.length; i++) {
    //   let randomIndex = Math.floor(Math.random() * this.cards.length);
    //   let thisCard = this.cards[i];
    //   this.cards[i] = this.cards[randomIndex];
    //   this.cards[randomIndex] = thisCard;
    // }

    // My version
    let shuffledCards = new Array(this.cards.length);
    let i = 0;
    while (shuffledCards.includes(undefined)) {
      let card = this.cards[i];
      let randomIndex = Math.floor(Math.random() * this.cards.length);
      console.log(shuffledCards);
      while (!shuffledCards[randomIndex]) {
        shuffledCards[randomIndex] = card;
        i++;
      }
    }

    this.cards = [...shuffledCards];
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else if (card1 !== card2) {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}
