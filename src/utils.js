export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
export const suits = ["♦", "♥", "♠", "♣"];

const allCards = values.flatMap(v => suits.map(s => v + s));
const shuffle = allCards.sort(() => Math.random() - 0.5);
const numberOfPlayers = 5;

const eachPlayersSetOfCards = Array(numberOfPlayers).fill(" ").map(() => shuffle.splice(0, 5));

export const getColourForSuit = suit => suit === "♦" || suit === "♥" ? "red" : "black";