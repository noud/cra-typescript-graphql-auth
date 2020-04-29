import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// @todo multiple reducers
// import * as reducers from './reducers'
import userReducer from './reducers/user'
import App from './components/App';

const client = new ApolloClient({ uri: 'http://127.0.0.1:8000/graphql' });

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware),
)

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(userReducer, enhancer)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();