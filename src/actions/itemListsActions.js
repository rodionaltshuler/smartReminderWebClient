import * as types from './actionTypes';
import itemListsApi from '../api/mockItemListsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function addItemsList(itemsListName) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemListsApi.saveItemsList(itemsListName)
      .then(itemsList => {
        dispatch(addItemsListSuccess(itemsList));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}

export function addItemsListSuccess(itemsList) {
  return {
    type: types.ADD_ITEMS_LIST_SUCCESS,
    itemsList
  };
}

export function removeItemsList(itemsList) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemListsApi.deleteItemsList(itemsList._id)
      .then(() => {
        dispatch(removeItemsListSuccess(itemsList));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}


export function removeItemsListSuccess(itemsList) {
  return {
    type: types.REMOVE_ITEMS_LIST_SUCCESS,
    itemsList
  };
}

export function loadItemLists() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemListsApi.getAllItemLists()
      .then(lists => {
        dispatch(loadItemListsSuccess(lists));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadItemListsSuccess(itemLists) {
  return {
    type: types.LOAD_ITEM_LISTS_SUCCESS,
    itemLists
  };
}

