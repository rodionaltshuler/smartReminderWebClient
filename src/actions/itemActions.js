import * as types from './actionTypes';
import itemsApi from '../serverapi/itemsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function addItem(itemsListId, itemName) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemsApi.addItem(itemName, itemsListId)
      .then(item => {
        dispatch(addItemSuccess(item));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}

export function addItemSuccess(item) {
  return {
    type: types.ADD_ITEM_SUCCESS,
    item
  };
}

export function removeItem(itemId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemsApi.removeItem(itemId)
      .then(item => {
        dispatch(removeItemSuccess(item._id));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}

export function removeItemSuccess(itemId) {
  return {
    type: types.REMOVE_ITEM_SUCCESS,
    itemId
  };
}

export function loadItemsForList(listId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return itemsApi.getItems(listId)
      .then(lists => {
        dispatch(loadItemsForListSuccess(listId, lists));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}

export function loadItemsForListSuccess(listId, items) {
  return {
    type: types.LOAD_ITEMS_FOR_LIST_SUCCESS,
    listId,
    items
  };
}

