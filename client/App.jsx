import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedContainer from './containers/FeedContainer.jsx';
import styles from './scss/main.scss';
import * as actions from './actions/actions.js';
import SignUp from './components/Signup.jsx';
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

const setPassword = actions.setPassword;
const setUsername = actions.setUsername;

const App = () => {
  const isLoggedIn = useState(false);
  const username = useSelector(store => store.feed.user);
  const password = useSelector(store => store.feed.newPassword);
  // TODO: add isLoggedIn state from useState hook to conditionally render
  // login/singup or logout

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div id="login-signup">
        {/* TODO: USE ROUTING OR CONDITIONAL RENDERING TO DISPLAY ONLY ONE */}
        {/* TODO: MAKE LOGIN AND SIGNUP SEPARATE COMPONENTS */}
        <SignUp 
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          signUp={signUp}
        />
        <LogIn 
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          logIn={logInAndAddFeedNames}
        />
      </div>
      <h1 id="welcome">Welcome to Reddit Aggregator</h1>
      <FeedContainer />
    </div>
  );
};

export default App;
