import React from 'react';
import FeedContainer from './containers/FeedContainer.jsx';
import styles from './scss/main.scss';

const App = props => (
  <div className="main">
    <div id="login-signup">
      <form method="POST" action="/api/signup">
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="password" placeholder="Password" required />
        <input type="submit" value="Create User" />
      </form>
      <form method="POST" action="/api/login">
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="password" placeholder="Password" required />
        <input type="submit" value="Log In" />
      </form>
    </div>
    <h1 id="welcome">Welcome to Reddit Aggregator</h1>
    <FeedContainer />
  </div>
);

export default App;
