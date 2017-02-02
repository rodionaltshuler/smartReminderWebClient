import * as types from './actionTypes';

export function addItem(itemsList, item) {
  return {
    type: types.ADD_ITEM,
    itemsList,
    item,
  };
}
