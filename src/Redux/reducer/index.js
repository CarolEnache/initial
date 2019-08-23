export const initialSate = {
  players: ['player ', 'player ']
}

const handlePlayer = () => {
  const{ players } = initialSate;
  if (players.length <= 5) {
    players.push('player')
  }
  console.log(players, 'hello from Redux')
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return handlePlayer()
    default: return state
  }
}
export default reducer;