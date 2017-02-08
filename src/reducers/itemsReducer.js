import * as types from '../actions/actionTypes';

export default function itemListsReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ITEMS_FOR_LIST_SUCCESS: {
      let otherItems = state.filter(element => element.itemsList != action.listId);
      return [...action.items, ...otherItems];
    }
    case types.ADD_ITEM_SUCCESS: {
      return [...state, action.item];
    }
    case types.REMOVE_ITEM_SUCCESS: {
      return state.filter(element => element._id != action.itemId);
    }
    default: {
      return state;
    }
  }
}
