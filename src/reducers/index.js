import {combineReducers} from 'redux';
import entities from './itemListsReducer'

const rootReducer = combineReducers({
  entities
});

export default rootReducer;
