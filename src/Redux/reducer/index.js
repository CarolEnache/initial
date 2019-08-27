import {
  addPlayer,
  removePlayer,
  create_UUID,
  editPlayer,
  updatePlayersList,
  determinWinner
} from '../../utils';

export const initialState = {
  players: [
    {
      name: 'player ',
      id: create_UUID(),
      cards: [],
      winner: false
    },
    {
      name: 'player ',
      id: create_UUID(),
      cards: [],
      winner: false
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
    case 'UPDATE_LIST':
      return updatePlayersList(state, action)
    case 'DETERMINE_WINNER':
      return determinWinner(state, action)
    default:
      return state
  }
}

export default reducer;