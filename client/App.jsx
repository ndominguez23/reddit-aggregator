import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedContainer from './containers/FeedContainer.jsx';
import styles from './scss/main.scss';
import * as actions from './actions/actions.js';
// import store from './store';


const logInAndAddFeedNames = (user, pass) => dispatch => fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: user, password: pass }),
})
  .then(data => data.json())
  // .then(data => console.log(data));
  .then(subreddits => subreddits.map(sub => ({ name: sub.name, url: sub.url, feedList: [] })))
  .then(subreddits => dispatch(actions.addUserSubs(subreddits)));

const signUp = (user, pass) => dispatch => fetch('/api/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: user, password: pass }),
});

const App = () => {
  const username = useSelector(store => store.feed.user);
  const password = useSelector(store => store.feed.newPassword);

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div id="login-signup">
        <div id="signup-form">
          <input
            type="text"
            value={username}
            onChange={e => dispatch(actions.setUsername(e.target.value))}
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={password}
            onChange={e => dispatch(actions.setPassword(e.target.value))}
            placeholder="Password"
            required
          />
          <input
            type="submit"
            value="Create User"
            onClick={() => dispatch(signUp(username, password))}
          />
        </div>
        <div id="login-form">
          <input
            type="text"
            value={username}
            onChange={e => dispatch(actions.setUsername(e.target.value))}
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={password}
            onChange={e => dispatch(actions.setPassword(e.target.value))}
            placeholder="Password"
            required
          />
          <input
            type="submit"
            value="Log In"
            onClick={() => dispatch(logInAndAddFeedNames(username, password))}
          />
        </div>
      </div>
      <h1 id="welcome">Welcome to Reddit Aggregator</h1>
      <FeedContainer />
    </div>
  );
};

export default App;
