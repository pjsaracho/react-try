import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  useEffect(() => {
    Axios('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React try
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
