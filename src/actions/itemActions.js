import * as types from './actionTypes';

export function addItem(itemsListId, itemName) {
  return {
    type: types.ADD_ITEM,
    itemsListId,
    itemName
  };
}

export function removeItem(itemId) {
  return {
    type: types.REMOVE_ITEM,
    itemId
  };
}
