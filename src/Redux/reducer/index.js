import {
  addPlayer,
  removePlayer,
  create_UUID,
  editPlayer,
} from '../../utils';

export const initialState = {
  players: [
    {
      name: 'player ',
      id: create_UUID()
    },
    {
      name: 'player ',
      id: create_UUID()
    }],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return addPlayer(state, action)
    case 'REMOVE_PLAYER':
      return removePlayer(state, action)
    case 'EDIT_PLAYER':
      return editPlayer(state, action)
    default:
      return state
  }
}

export default reducer;