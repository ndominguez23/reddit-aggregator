import React from 'react';
import {useDispatch} from 'react-redux';

export default ({username, password, setUsername, setPassword, signUp}) => {
  const dispatch = useDispatch();
  return (
    <div id="signup-form">
      <input
        type="text"
        value={username}
        onChange={e => dispatch(setUsername(e.target.value))}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => dispatch(setPassword(e.target.value))}
        placeholder="Password"
        required
      />
      <input
        type="submit"
        value="Sign Up"
        onClick={() => dispatch(signUp(username, password))}
      />
    </div>
  )
}

