import * as types from './actionTypes';
import itemListsApi from '../api/mockItemListsApi';

export function addItemsList(itemsListName) {
  return function (dispatch) {
    return itemListsApi.saveItemsList(itemsListName)
      .then(itemsList => {
        dispatch(addItemsListSuccess(itemsList));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addItemsListSuccess(itemsList) {
  return {
    type: types.ADD_ITEMS_LIST,
    itemsList
  };
}

export function removeItemsList(itemsList) {
  return function (dispatch) {
    return itemListsApi.deleteItemsList(itemsList._id)
      .then(() => {
        dispatch(removeItemsListSuccess(itemsList));
      })
      .error(error => {
        throw error;
      });
  };
}


export function removeItemsListSuccess(itemsList) {
  return {
    type: types.REMOVE_ITEMS_LIST,
    itemsList
  };
}

export function loadItemLists() {
  return function (dispatch) {
    return itemListsApi.getAllItemLists()
      .then(lists => {
        dispatch(loadItemListsSuccess(lists));
      })
      .catch(error => {
        throw error;
      });
  }
}

export function loadItemListsSuccess(itemLists) {
  return {
    type: types.LOAD_ITEM_LISTS_SUCCESS,
    itemLists
  };
}

