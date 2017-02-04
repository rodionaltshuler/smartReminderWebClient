import {combineReducers} from 'redux';
import itemListsReducer from './itemListsReducer';
import itemsReducer from './itemsReducer';

//of use non-plain JS object as state, Immutable.JS read this-> http://redux.js.org/docs/recipes/reducers/BeyondCombineReducers.html
const rootReducer = combineReducers({
  itemLists: itemListsReducer,
  items: itemsReducer
});

export default rootReducer;
