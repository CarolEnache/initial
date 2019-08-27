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
      console.log(action)
      return addPlayer(state, action)
    case 'REMOVE_PLAYER':
        console.log(action)
      return removePlayer(state, action)
    case 'EDIT_PLAYER':
      console.log(action)
      return editPlayer(state, action)
    case 'UPDATE_LIST':
        console.log(action)
        return updatePlayersList(state, action)
    case 'DETERMINE_THE_WINNER':
            console.log(action)
      return determinWinner(state, action)
    default:
      return state
  }
}

export default reducer;