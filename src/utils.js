import poker from 'poker-hands';

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const suits = ["D", "H", "S", "C"];


export const remainingCards = values.flatMap(value => suits.map(suit => ({suit: suit, value: value})));

export const initialDeck = [...remainingCards];
export const shuffle = remainingCards.sort(() => Math.random() - 0.5);
export const eachPlayersSetOfCards = (numberOfPlayers) =>
  Array(numberOfPlayers)
    .fill(" ")
    .map(() => shuffle.splice(0, 5));

export const deckCards = (remainingCards) => initialDeck.map(m => {
  return {
    selected: remainingCards.includes(m),
    value: m.value,
    suit: m.suit
  }
});

let player = {
  name: 'player ',
  id: ''
}

/* eslint-disable */
export function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
/* eslint-enable */

export const addPlayer = (state) => {
  deckCards(remainingCards)
  const { players } = state;
  const newList = [...players];
  if (players.length <= 5) {
    const newPlayerCards = eachPlayersSetOfCards(1)
    player = newPlayerCards.map(m =>({
        name: 'player',
        id: create_UUID(),
        cards: [...m],
        winner: false
      }))
    newList.push(...player)
  }

  return {
    ...state,
    players: newList,
  };
}

export const removePlayer = (state, action) => {
  deckCards(remainingCards)
  const { players } = state;
  const { id } = action;
  let newList = [...players];
  if (players.length >= 2) {
    newList = players.filter(f => f.id !== id);
  }
  return {
    ...state,
    players: [...newList],
  }
}

export const updatePlayersList = (state, action) => {
  const { playersList } = action;
  return {
    ...state,
    players: [...playersList],
  }}



export const editPlayer = (state, action) => {
  const { players } = state;
  const { id, name } = action;

  const newList = [...players].map(m => {
    if (m.id === id) {
      return {
        id: m.id,
        name: name,
        cards: m.cards,
        winner: false
      }
    }
    return {
      id: m.id,
      name: m.name,
      cards: m.cards,
      winner: false
    }
  });

  return {
    ...state,
    players: [...newList],
  }
}

export const determinWinner = (state) => {
  const { players } = state
  const restructureHands = players.map(hand => {
    const restructuredHands = []
    if (hand.cards) {
      restructuredHands.push(hand.cards.map(a => `${a.suit}${a.value}`).join(' '))
    }
    return restructuredHands
  }).flat()

  const winnerIndex = poker.judgeWinner(restructureHands);

  const includeTheWinner = players.map(m => {
    if (players.indexOf(m) === winnerIndex){
      return {
        name: m.name,
        id: m.id,
        cards: m.cards,
        winner: true
      }
    }
      return {
        name: m.name,
        id: m.id,
        cards: m.cards,
        winner: false
      }
  })
  return {
    players: [...includeTheWinner]
  }
}

export const getColourForSuit = suit => suit === "D" || suit === "H" ? "red" : "black";
