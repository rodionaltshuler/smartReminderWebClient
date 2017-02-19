import * as types from '../actions/actionTypes';

export default function meReducer(state = {}, action) {
  switch (action.type) {
    case types.GET_USERS_BY_NAME_SUCCESS: {
      const newUsersMap = action.users.reduce(function (map, obj) {
        map[obj._id] = obj;
        return map;
      }, {});

      const userIdsForSearch = action.users.map(user => user._id);

      const newState = Object.assign({},
        state,
        {
          cache: Object.assign({}, state.cache, newUsersMap),
          searches: Object.assign({}, state.searches, {[action.searchString]: userIdsForSearch})
        }
      );
      console.log(JSON.stringify(newState));
      return newState;
    }

    case types.GET_USERS_BY_ID_SUCCESS: {
      const newUsersMap = action.users.reduce(function (map, obj) {
        map[obj._id] = obj;
        return map;
      }, {});

      return Object.assign({},
        state,
        {cache: Object.assign({}, state.cache, newUsersMap)}
      );

    }

    default: {
      return state;
    }
  }
}
