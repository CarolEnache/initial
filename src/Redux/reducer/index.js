import { addPlayer, removePlayer, create_UUID, editPlayer } from '../../utils';

export const initialSate = {
  players: [
    {
      name: 'player ',
      id: create_UUID()
    },
    {
      name: 'player ',
      id: create_UUID()
    }]
}


const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return addPlayer(state)
    case 'REMOVE_PLAYER':
      return removePlayer(state, action)
    case 'EDIT_PLAYER':
      return editPlayer(state, action)//removePlayer(state, action)
    default: return state
  }
}

export default reducer;