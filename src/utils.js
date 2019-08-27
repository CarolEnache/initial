const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const suits = ["♦", "♥", "♠", "♣"];

let player = {
  name: 'player ',
  id: ''
}

export function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

export const addPlayer = (state, action) => {
  console.log(action)
  const { players } = state;
  const newList = [...players];
  const { no } = action;
  if (players.length <= 5) {
    player = {
      name: 'player',
      id: create_UUID()
    }
    newList.push(player)
  }
  return {
    ...state,
    players: newList,
    no
  };
}

export const removePlayer = (state, action) => {
  const { players } = state;
  const { id } = action;
  let newList = [...players];
  if (players.length > 2) {
    newList = [...players].filter(f => f.id !== id);
  }
  return {
    ...state,
    players: newList,
    no: -1
  }
}

export const editPlayer = (state, action) => {
  const { players } = state;
  const { id, name } = action;

  const newList = [...players].map(m => {
    if (m.id === id) {
      return {
        id: m.id,
        name: name
      }
    }
    return {
      id: m.id,
      name: m.name
    }
  });
  return {
    ...state,
    players: [...newList],
  }
}

export const allCards = values.flatMap(v => suits.map(s => {
  return {
    suit: s,
    value: v
  }
}));

export const original = [...allCards]
export const shuffle = allCards.sort(() => Math.random() - 0.5);
const numberOfPlayers = 2
export const eachPlayersSetOfCards = (numberOfPlayers) => Array(numberOfPlayers).fill(" ").map(() => shuffle.splice(0, 5));
eachPlayersSetOfCards()
export const deckCards = original.map(m => {
  return {
    selected: allCards.includes(m),
    value: m.value,
    suit: m.suit
  }
});

export const getColourForSuit = suit => suit === "♦" || suit === "♥" ? "red" : "black";