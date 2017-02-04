import * as types from '../actions/actionTypes';

export default function itemListsReducer(state = [], action) {
  console.log('itemListsReducer got initial state:');
  console.log(JSON.stringify(state));

  switch (action.type) {
    case types.ADD_ITEMS_LIST: {
      console.log('creating new store with a name: ' + action.itemsListName);
      const newItemsList = { name: action.itemsListName };
      const newState = [...state, newItemsList];
      console.log('returning new state:');
      console.log(JSON.stringify(newState));
      return newState;
    }
    case types.REMOVE_ITEMS_LIST: {
      return state.filter(element => element !== action.itemsList);
    }
    default: {
      return state;
    }
  }
}
