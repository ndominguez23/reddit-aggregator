import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk),
    composeWithDevTools()),
);

export default store;
