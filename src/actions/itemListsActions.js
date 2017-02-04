import * as types from './actionTypes';

export function addItemsList(itemsListName) {
  return {
    type: types.ADD_ITEMS_LIST,
    itemsListName
  };
}

export function removeItemsList(itemsList) {

  return {
      type: types.REMOVE_ITEMS_LIST,
      itemsList
  };

}
