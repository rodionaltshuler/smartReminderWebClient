import * as types from '../actions/actionTypes';

export default function itemListsReducer(state = [], action) {
  console.log('itemsReducer got initial state:');
  console.log(JSON.stringify(state));
  switch (action.type) {
    case types.ADD_ITEM: {
      return state;
    }
    default: {
      return state;
    }
  }
}
