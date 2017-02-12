import * as types from '../actions/actionTypes';

export default function meReducer(state = [], action) {
  switch (action.type) {
    case types.GET_USERS_BY_NAME_SUCCESS: {
      return action.users;
    }
    default: {
      return state;
    }
  }
}
