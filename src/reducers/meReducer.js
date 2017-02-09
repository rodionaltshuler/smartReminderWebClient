import * as types from '../actions/actionTypes';

export default function meReducer(state = null, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return action.user;
    }
    default: {
      return state;
    }
  }
}
