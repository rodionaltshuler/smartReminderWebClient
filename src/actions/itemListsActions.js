import * as types from './actionTypes';
import serverItemListsApi from '../serverapi/itemListsApi';
import usersApi from '../serverapi/usersApi';
import * as userActions from './userActions';
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

export function loadItemLists(user, includeUsers = true) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return serverItemListsApi.getAllItemLists(user, includeUsers)
      .then(res => {
        if (res instanceof Array) {
          dispatch(loadItemListsSuccess(res));
        } else {
          dispatch(loadItemListsSuccess(res.lists || []));
          dispatch(userActions.getUsersByIdSuccess(res.users || []))
        }
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

export function shareListWithUser(me, itemsList, user) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return usersApi.shareListWithUser(me.accessToken, itemsList._id, user._id)
      .then(updatedList => {
        dispatch(shareListWithUserSuccess(updatedList, user));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      })

  };

}


export function shareListWithUserSuccess(itemsList, user) {
  return {
    type: types.SHARE_LIST_WITH_USER_SUCCESS,
    itemsList,
    user
  }

}
