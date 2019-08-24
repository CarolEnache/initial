export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
export const suits = ["♦", "♥", "♠", "♣"];

export const addPlayer = (state) => {
  let { players } = state;
  const newList = [...players];
  if (players.length <= 5) {
    newList.push('player')
  }
  return {
    ...state,
    players: newList,
  };
}

export const removePlayer = (state, action) => {
  let { players } = state;
  let { index } = action;

  const newList = [...players];
  const itemToBeRemoved = players.length > 2 && newList.splice(index, index);
  return {
    ...state,
    players: newList,
  }
}




const allCards = values.flatMap(v => suits.map(s => v + s));
const shuffle = allCards.sort(() => Math.random() - 0.5);
const numberOfPlayers = 5;

const eachPlayersSetOfCards = Array(numberOfPlayers).fill(" ").map(() => shuffle.splice(0, 5));

export const getColourForSuit = suit => suit === "♦" || suit === "♥" ? "red" : "black";