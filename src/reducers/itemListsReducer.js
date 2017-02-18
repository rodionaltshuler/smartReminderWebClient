import * as types from '../actions/actionTypes';

export default function itemListsReducer(state = [], action) {
  console.log('itemListsReducer got initial state:');
  console.log(JSON.stringify(state));

  switch (action.type) {
    case types.LOAD_ITEM_LISTS_SUCCESS: {
      return action.itemLists;
    }
    case types.ADD_ITEMS_LIST_SUCCESS: {
      console.log('creating new store with a name: ' + action.itemsList.name);
      const newState = [...state, action.itemsList];
      console.log('returning new state:');
      console.log(JSON.stringify(newState));
      return newState;
    }
    case types.REMOVE_ITEMS_LIST_SUCCESS: {
      return state.filter(element => element._id != action.itemsList._id);
    }
    case types.SHARE_LIST_WITH_USER_SUCCESS: {
      let otherLists = state.filter(element => element._id != action.itemsList._id);
      return [...action.itemsList, ...otherLists];
    }
    default: {
      return state;
    }
  }
}
