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