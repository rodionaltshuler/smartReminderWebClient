import * as types from './actionTypes';
import serverItemListsApi from '../serverapi/usersApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loginWithFacebook(facebookAccessToken) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return serverItemListsApi.login(facebookAccessToken)
      .then(user => {
        dispatch(loginSuccess(user));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user
  };
}

export function getUsersByName(me, searchString) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return serverItemListsApi.getUsers(me.accessToken, searchString)
      .then(users => {
        dispatch(getUsersByNameSuccess(users, searchString));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      })

  };
}

export function getUsersByNameSuccess(users, searchString) {
  return {
    type: types.GET_USERS_BY_NAME_SUCCESS,
    users,
    searchString
  };
}

export function getUsersByIdSuccess(users) {
  return {
    type: types.GET_USERS_BY_ID_SUCCESS,
    users
  }
}
