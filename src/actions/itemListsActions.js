import * as types from './actionTypes';

export function addItemsList(itemsList) {
  return {
    type: types.ADD_ITEMS_LIST,
    itemsList
  };
}
