export const initialSate = {
  players: ['player ', 'player ']
}

const handlePlayer = (state) => {
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

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return handlePlayer(state)
    default: return state
  }
}
export default reducer;