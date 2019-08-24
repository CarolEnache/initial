export function addPlayer() {
  return {
    type: 'ADD_PLAYER'
  }
};

export function removePlayer(index) {
  return {
    type: 'REMOVE_PLAYER',
    index: index
  }
};
