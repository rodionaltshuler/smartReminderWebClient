import * as types from './actionTypes';
import itemListsApi from '../api/mockItemListsApi';

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

export function loadItemListsSuccess(itemLists) {
  return {
    type: types.LOAD_ITEM_LISTS_SUCCESS,
    itemLists
  };
}

export function loadItemLists() {
  return function(dispatch) {
    return itemListsApi.getAllItemLists()
      .then(lists => {
        dispatch(loadItemListsSuccess(lists));
      })
      .catch(error => {
        throw error;
      });
  }
}
