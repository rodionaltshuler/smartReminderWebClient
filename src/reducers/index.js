import {combineReducers} from 'redux';
import itemListsReducer from './itemListsReducer';
import itemsReducer from './itemsReducer';
import meReducer from './meReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

//of use non-plain JS object as state, Immutable.JS read this-> http://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
const rootReducer = combineReducers({
  itemLists: itemListsReducer,
  items: itemsReducer,
  me: meReducer,
  ajaxCallsInProgress
});

export default rootReducer;
