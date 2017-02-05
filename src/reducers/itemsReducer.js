import * as types from '../actions/actionTypes';

function itemId() {
  return Math.floor(Math.random() * 10000);
}

export default function itemListsReducer(state = [], action) {
  console.log('itemsReducer got initial state:');
  console.log(JSON.stringify(state));
  switch (action.type) {
    case types.ADD_ITEM: {
      const item = {
        name: action.itemName,
        listId: action.itemsListId,
        _id: itemId()
      };
      const newState = [...state, item];
      console.log('returning new state:');
      console.log(JSON.stringify(newState));
      return newState;
    }
    case types.REMOVE_ITEM: {
      return state.filter(element => element._id !== action.itemId);
    }
    default: {
      return state;
    }
  }
}
