import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.scss/normalize.scss';
import thunk from 'redux-thunk';
import './styles.scss';
import App from './App.jsx';
import reducer from './reducers/index';

const logger = store => next => action => {
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  const result = next(action);
  console.log('next state', store.getState());
  return result
};

const store = createStore(reducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
