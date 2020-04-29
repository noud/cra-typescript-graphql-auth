// import React, { Component } from 'react'
// import React, { useState } from 'react'
import React from 'react'
// import React, { Component, useState } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { useHistory } from 'react-router-dom';
import styles from './App.css'
// import { login } from '../actions/user'

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import AuthStore, { loginUser } from '../stores/AuthStore';

// const history = useHistory();

// local
// const [isLoading, setIsLoading] = useState(false);
// const [message, setMessage] = useState(null);

// export class LoginContainer extends Component {
export default function LoginContainer() {
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoading: false,
  //     message: null
  //   };
  // }

    // const state = {
    //   isLoading: false,
    //   message: null
    // };

// const [isLoading, setIsLoading] = useState(false);
// const [message, setMessage] = useState(null);

// static propTypes = {
  // const propTypes = {
  //   login: PropTypes.func.isRequired
  // };

//   const loginMutation = useMutation(
//   gql`
//     mutation Login($username: String!, $password: String!) {
//       login(input: { username: $username, password: $password }) {
//         access_token
//         refresh_token
//         expires_in
//         token_type
//         user {
//           id
//           email
//           name
//         }
//       }
//     }
//   `,
//   {
//     onCompleted: ({ login }) => {
//       // setIsLoading(false);

//       localStorage.setItem('id_token', login.access_token);
//       localStorage.setItem('user_id', login.user.id);

//       AuthStore.set(
//         {
//           isAuthenticated: true,
//         },
//         () => {
//           // history.push('/');
//         }
//       );
//     },
//     onError: (data) => {
//       // setIsLoading(false);

//       // setMessage('Unknown error');
//     },
//   }
// );

  // const onClick = (e) => {
  //   if (e !== undefined) {
  //     e.preventDefault()
  //     const name = this.refs.name.value;
  //     const password = this.refs.password.value;
  //     console.log('login', name, password)
  //     // @todo
  //     // Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
  //     // this.props.login({
  //     //   name: this.refs.name.value,
  //     //   password: this.refs.password.value
  //     // })
  //     loginUser(loginMutation(), name, password);
  //   }
  // };

  // render() {
    return (
      <div className={styles.login}>
        <div><input className={styles.username} type="text" ref="name" placeholder="Enter your email" /></div>
        <div><input className={styles.username} type="text" ref="password" placeholder="Enter your password" /></div>
        {/* <div>
          {state.loading ? (
              'Loading'
            ) : (
            <button className={styles.button} onClick={onClick()}>Login</button>
          )}
        </div>
        {state.message} */}
      </div>
    )
  // }

}
// export default connect(null, { login })(LoginContainer)