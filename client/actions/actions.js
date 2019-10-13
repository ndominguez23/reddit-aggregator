// TODO: ACTION CREATORS BELONG HERE
import ReduxThunk from 'redux-thunk';
import * as types from '../constants/actionTypes';
import { bindActionCreators } from 'redux';

// addUserSubs will take an array of subreddit objects and add them
// to the state's subList
export const addUserSubs = subs => ({
  type: types.LOAD_USERSUBS,
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

export const setUsername = user => ({
  type: types.SET_USERNAME,
  user,
});

export const setPassword = newPassword => ({
  type: types.SET_PASSWORD,
  newPassword,
});
