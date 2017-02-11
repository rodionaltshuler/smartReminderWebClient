import * as types from './actionTypes';
import serverItemListsApi from '../serverapi/itemListsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function addItemsList(user, itemsListName) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return serverItemListsApi.saveItemsList(user, itemsListName)
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

export function removeItemsList(user, itemsList) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return serverItemListsApi.deleteItemsList(user, itemsList._id)
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

export function loadItemLists(user) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return serverItemListsApi.getAllItemLists(user)
      .then(lists => {
        dispatch(loadItemListsSuccess(lists));
      })
      .catch(error => {
        dispatch(ajaxCallError());
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

