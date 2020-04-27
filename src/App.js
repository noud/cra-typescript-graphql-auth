import React from 'react';
import logo from './logo.svg';
import './App.css';

// @todo dev remove
// import { useQuery } from '@apollo/react-hooks';
// import query from './graphql/User';
// console.log('App User query', query);

function App() {
  // @todo dev remove
  // const User = useQuery(query);
  // const UserData = JSON.stringify(User.data, null, 2);
  // console.log('App UserData', UserData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
