import * as constants from '../constants'
import { createStore } from 'redux';
// import { createStore } from './Store';

function user(state = [], action) {
  switch (action.type) {
    case constants.USER_LOGGING_IN:
      return state
      case constants.USER_LOGGED_IN:
        return state.concat([action.text])
      default:
      return state
  }
}


const AuthStore = createStore(user, {
  isAuthenticated: typeof localStorage !== 'undefined' && !!localStorage.getItem('id_token'),
});

function loginUser(loginMutation, login, password) {
  if (!!login && !!password) {
    loginMutation[0]({
      variables: {
        username: login,
        password: password,
      },
    });
  }
}

function signOut(history) {
  localStorage.removeItem('id_token');
  localStorage.removeItem('user_id');

  AuthStore.set({
    isAuthenticated: false,
  });

  history.push('/login');
}

export { loginUser, signOut };

export default AuthStore;
