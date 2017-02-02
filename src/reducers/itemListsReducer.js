import * as types from '../actions/actionTypes';

export default function itemListsReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_ITEMS_LIST: {
      const newList = {
        entities: {
          itemLists: [...state.entities.itemLists, action.itemsList]
        }
      };
      return Object.assign({}, state, newList);
    }
    default: {
      return state;
    }
  }
}
