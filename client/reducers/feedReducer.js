import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  user: '',
  subList: [],
  newPassword: '',
  subreddit: '',
};

const feedReducer = (state = initialState, action) => {
  let user;
  let newPassword;
  let sub;
  let subList;
  let url;
  let subreddit;
  let feedList;

  switch (action.type) {
    case actionTypes.LOAD_USERSUBS:
      subList = action.subs;
      console.log('adding user subs...');
      return {
        ...state,
        newPassword: '',
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
    case actionTypes.SET_USERNAME:
      ({ user } = action);
      // console.log(`username is ${user}`);
      return {
        ...state,
        user,
      };
    case actionTypes.SET_PASSWORD:
      ({ newPassword } = action);
      // console.log(`username is ${newPassword}`);
      return {
        ...state,
        newPassword,
      };
    default:
      console.log('default case');
      return state;
  }
};

export default feedReducer;
