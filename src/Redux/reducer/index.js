import { addPlayer, removePlayer } from '../../utils';

export const initialSate = {
  players: ['player ', 'player ']
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return addPlayer(state)
    case 'REMOVE_PLAYER':
      return removePlayer(state, action)
    default: return state
  }
}

export default reducer;