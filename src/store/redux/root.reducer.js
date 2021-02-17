import {combineReducers} from 'redux';
import {reducer as adventures} from './adventures/adventures.reducer';

export const rootReducer = combineReducers({
  adventures,
});
