import { combineReducers } from 'redux';
import feedReducer from './feedReducer.js';

const reducers = combineReducers({
  feed: feedReducer,
});

export default reducers;
