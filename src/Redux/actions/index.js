export function addPlayer() {
  return {
    type: 'ADD_PLAYER'
  }
};

export function removePlayer(id) {
  return {
    type: 'REMOVE_PLAYER',
    id
  }
};
export function editPlayer(index, localName) {
  console.log('say hey', localName, index)

  return {
    type: 'EDIT_PLAYER',
    index: index,
    name: localName
  }
};
