import * as types from './actionTypes';

export function addItemsList(itemsListName) {
  return {
    type: types.ADD_ITEMS_LIST,
    itemsListName
  };
}
