// TODO: ACTION CREATORS BELONG HERE
import ReduxThunk from 'redux-thunk';
import * as types from '../constants/actionTypes';
import { bindActionCreators } from 'redux';

export const addUser = (user, subs) => ({
  type: types.ADD_USER,
  user,
  subs,
});

export const addSubreddit = () => ({
  type: types.ADD_SUB,
});


export const setSubredditName = name => ({
  type: types.SET_NAME,
  name,
});

export const updateFeedItems = (id, feedList) => ({
  type: types.FETCH_FEED,
  feedList,
  id,
});
