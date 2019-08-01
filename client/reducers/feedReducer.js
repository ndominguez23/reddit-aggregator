import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  user: '',
  subList: [],
  subreddit: '',
};

const feedReducer = (state = initialState, action) => {
  let user;
  let sub;
  let subList;
  let url;
  let subreddit;
  let feedList;

  switch (action.type) {
    case actionTypes.ADD_USER:
      ({ user } = action);
      subList = action.subs;
      return {
        ...state,
        user,
        subList,
      };
    case actionTypes.ADD_SUB:
      url = `https://www.reddit.com/${state.subreddit}/`;
      // console.log(url);
      subList = [
        ...state.subList,
        {
          name: state.subreddit,
          url,
          feedList: [],
        }];
      subreddit = '';
      // console.log('adding sub');
      return {
        ...state,
        subList,
        subreddit,
      };
    case actionTypes.FETCH_FEED:
      ({ feedList } = action);
      // console.log(`in reducer, feedlist is ${JSON.stringify(feedList)}`);
      sub = {
        ...state.subList[action.id],
        feedList,
      };
      subList = state.subList.slice();
      subList[action.id] = sub;
      // console.log('fetching feed');
      return {
        ...state,
        subList,
      };
    case actionTypes.SET_NAME:
      subreddit = action.name;
      // console.log('setting subreddit name');
      return {
        ...state,
        subreddit,
      };
    default:
      // console.log('default case');
      return state;
  }
};

export default feedReducer;
