import * as types from '../actions/actionTypes';

export default function itemListsReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_ITEMS_LIST: {
      console.log('itemListsReducer got initial state:');
      console.log(JSON.stringify(state));
      console.log('creating new store with a name: ' + action.itemsListName);
      const newItemsList = { name: action.itemsListName };
      const newList = {
          itemLists: [...state.itemLists, newItemsList]
      };
      const newState = Object.assign({}, state, newList);
      console.log('returning new state:');
      console.log(JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
}
