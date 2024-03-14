// deck.js

class Deck {
  constructor() {
    this.cards = [];
    this.reset();
  }

  reset() {
    this.cards = [];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    for (let suit of suits) {
      for (let value of values) {
        this.cards.push({ value: value, suit: suit });
      }
    }
  }

  shuffle() {
    for (let i = 0; i < Math.floor(Math.random()*10); i++) {this.oneShuffle()}
  }

  oneShuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numCards) {
    const hand = [];
    for (let i = 0; i < numCards; i++) {
      hand.push(this.cards.pop());
    }
    return hand;
  }

  compareHands(communityCards, ...hands) {
      const bestHands = hands.map(hand =>
          this.findBestHand(communityCards.concat(hand))
      );

      // Find the maximum rank among all best hands
      const maxRank = Math.max(...bestHands.map(hand => hand.rank));

      // Filter out the winning hands
      const winningHands = bestHands.filter(hand => hand.rank === maxRank);

      // If there is only one winning hand, return its index
      console.log(winningHands[0].rank)
      console.log(winningHands[0].hand)
      if (winningHands.length === 1) {
          const winningHand = winningHands[0].hand;
          for (let i = 0; i < hands.length; i++) {
              for (let j = 0; j < hands[i].length; j++) {
                  if (this.isSameCard(winningHand, hands[i][j])) {
                      return i;
                  }
              }
          }
      } else {
          // Handle tie or multiple winners
          return -1;
      }
  }

  isSameCard(hand, card) {
      return hand.some(handCard => handCard.value === card.value && handCard.suit === card.suit);
  }


  getKicker(hand) {
    const sortedValues = hand
      .map((card) => this.cardValueRank(card.value))
      .sort((a, b) => b - a);
    // Find the highest card value that is not part of the hand's rank
    for (let i = 1; i < sortedValues.length; i++) {
      if (sortedValues[i] !== sortedValues[0]) {
        return sortedValues[i];
      }
    }
    return -Infinity; // If no kicker is found
  }

  parseWinner(int) {
    if (int == -1) {
      return "It's a tie.";
    } else {
      return `Player ${int} hand wins.`;
    }
  }

  findBestHand(cards) {
    const combinations = this.combine(cards, 5);
    let bestRank = 0;
    let bestHand = null;

    for (let combination of combinations) {
      const rank = this.evaluateHand(combination);
      if (rank > bestRank) {
        bestRank = rank;
        bestHand = combination;
      }
    }

    return { rank: bestRank, hand: bestHand };
  }

  combine(cards, k) {
    const result = [];

    const helper = (current, start) => {
      if (current.length === k) {
        result.push([...current]);
      } else {
        for (let i = start; i < cards.length; i++) {
          current.push(cards[i]);
          helper(current, i + 1);
          current.pop();
        }
      }
    };

    helper([], 0);
    return result;
  }

  evaluateHand(hand) {
    const d = 100;
    if (this.isRoyalFlush(hand)) return 10 * d;
    if (this.isStraightFlush(hand)) return 9 * d + this.getStraightRank(hand);
    if (this.isFourOfAKind(hand)) return 8 * d + this.getFourOfAKindRank(hand);
    if (this.isFullHouse(hand)) return 7 * d + this.getFullHouseRank(hand);
    if (this.isFlush(hand)) return 6 * d + this.getFlushRank(hand);
    if (this.isStraight(hand)) return 5 * d + this.getStraightRank(hand);
    if (this.isThreeOfAKind(hand)) return 4 * d + this.getThreeOfAKindRank(hand);
    if (this.isTwoPair(hand)) return 3 * d + this.getTwoPairRank(hand);
    if (this.isPair(hand)) return 2 * d + this.getPairRank(hand);
    return 1 * d + this.getHighCardValue(hand) / d; // High card
  }

  getFlushRank(hand) {
      const sortedValues = hand.map(card => this.cardValueRank(card.value)).sort((a, b) => b - a);
      return sortedValues[0]; // Return the rank of the highest card in the flush
  }

  
  getFourOfAKindRank(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    const fourOfAKindValue = Object.keys(valueCounts).find(
      (key) => valueCounts[key] === 4,
    );
    return this.cardValueRank(fourOfAKindValue);
  }

  getFullHouseRank(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    const threeOfAKindValue = Object.keys(valueCounts).find(
      (key) => valueCounts[key] === 3,
    );
    const pairValue = Object.keys(valueCounts).find(
      (key) => valueCounts[key] === 2,
    );
    return Math.max(
      this.cardValueRank(threeOfAKindValue),
      this.cardValueRank(pairValue),
    );
  }

  getStraightRank(hand) {
    const values = hand
      .map((card) => card.value)
      .sort((a, b) => {
        const valueMap = {
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
          "9": 9,
          "10": 10,
          "J": 11,
          "Q": 12,
          "K": 13,
          "A": 14,
        };
        return valueMap[a] - valueMap[b];
      });
    if (
      values.includes("A") &&
      values.includes("2") &&
      values.includes("3") &&
      values.includes("4") &&
      values.includes("5")
    ) {
      // Ace-low straight
      return 1;
    } else {
      const maxCardValue = Math.max(...values.map(this.cardValueRank));
      return maxCardValue;
    }
  }

  getThreeOfAKindRank(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    const threeOfAKindValue = Object.keys(valueCounts).find(
      (key) => valueCounts[key] === 3,
    );
    return this.cardValueRank(threeOfAKindValue);
  }

  getTwoPairRank(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    const pairs = Object.keys(valueCounts).filter(
      (key) => valueCounts[key] === 2,
    );
    const pair1Rank = this.cardValueRank(pairs[0]);
    const pair2Rank = this.cardValueRank(pairs[1]);

    // Sort the pairs in descending order
    const sortedPairs = [pair1Rank, pair2Rank].sort((a, b) => b - a);

    return sortedPairs[0]; // Return the rank of the higher pair
  }

  getPairRank(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    const pairValue = Object.keys(valueCounts).find(
      (key) => valueCounts[key] === 2,
    );
    return this.cardValueRank(pairValue);
  }

  cardValueRank(value) {
    const valueMap = {
      "A": 14,
      "K": 13,
      "Q": 12,
      "J": 11,
      "10": 10,
      "9": 9,
      "8": 8,
      "7": 7,
      "6": 6,
      "5": 5,
      "4": 4,
      "3": 3,
      "2": 2,
    };
    return valueMap[value];
  }

  isRoyalFlush(hand) {
    return this.isStraightFlush(hand) && this.getHighCardValue(hand) === "A";
  }

  isStraightFlush(hand) {
    return this.isStraight(hand) && this.isFlush(hand);
  }

  isFourOfAKind(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    return Object.values(valueCounts).includes(4);
  }

  isFullHouse(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    return (
      Object.values(valueCounts).includes(3) &&
      Object.values(valueCounts).includes(2)
    );
  }

  isFlush(hand) {
    const suits = new Set(hand.map((card) => card.suit));
    return suits.size === 1;
  }

  isStraight(hand) {
    const values = hand
      .map((card) => card.value)
      .sort((a, b) => {
        const valueMap = {
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
          "9": 9,
          "10": 10,
          "J": 11,
          "Q": 12,
          "K": 13,
          "A": 14,
        };
        return valueMap[a] - valueMap[b];
      });
    const uniqueValues = new Set(values);
    if (uniqueValues.size !== 5) return false;
    return (
      values[4] - values[0] === 4 ||
      (values[0] === "2" &&
        values[1] === "3" &&
        values[2] === "4" &&
        values[3] === "5" &&
        values[4] === "A")
    );
  }

  isThreeOfAKind(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    return Object.values(valueCounts).includes(3);
  }

  isTwoPair(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    let pairCount = 0;
    for (let count of Object.values(valueCounts)) {
      if (count === 2) pairCount++;
    }
    return pairCount === 2;
  }

  isPair(hand) {
    const valueCounts = {};
    for (let card of hand) {
      const value = card.value;
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    return Object.values(valueCounts).includes(2);
  }

  getHighCardValue(hand) {
    const values = hand.map((card) => card.value);
    return Math.max(
      ...values.map((val) => {
        if (val === "A") return 14;
        if (val === "K") return 13;
        if (val === "Q") return 12;
        if (val === "J") return 11;
        return parseInt(val);
      }),
    );
  }

  parseHand(handString) {
    const handArray = handString.split(",").map((card) => card.trim());
    return handArray.map((card) => {
      const [value, suit] = card.split(" of ");
      return { value, suit };
    });
  }

  toString(card) {
    return `${card.value} of ${card.suit}`;
  }
}

// Exporting the Deck class to make it accessible from other files
//module.exports = Deck;
//use for node only
