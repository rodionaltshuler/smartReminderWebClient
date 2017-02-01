import {combineReducers} from 'redux';
import itemLists from './itemListsReducer'

const rootReducer = combineReducers({
  itemLists
});

export default rootReducer;
