import { addPlayer, removePlayer, create_UUID } from '../../utils';

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

const editPlayer = (state, action) => {
  const { players } = state;
  const { id, name } = action;
  console.log(1, players)

  const newList = [...players].map(m => {
    if(m.id === id) {
      console.log(2, m)
      return {
        id: m.id,
        name: name
      }
    }
    return {
      id: m.id,
      name: m.name
    }
  });
  console.log(3, newList)
  // // newList.map(m => m.name = name)
  // const itemToBeModified = newList.splice(index, index, { name: `${name}` });
  // console.log(action)
  return {
    ...state,
    players: [...newList],
  }
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