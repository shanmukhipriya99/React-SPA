import React from 'react';
import axios from './axios';
import logo from './logo.svg';
import './App.css';
import Success from './Success';

function App() {
  const submitHandler = () => {
      console.log('submitted');
      let name = {
        name: document.getElementById('name').value
      }
      axios.post('/', name)
      .then((response) => {
        console.log(response.data.success);
      })
      document.location.reload();
  }
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
      <div className="Input">
        <p>Enter your name:</p>
        <input type='text' id='name' placeholder='Name' />
        <button type='submit' onClick={submitHandler}>Submit</button>
      </div>
      <div>
        <Success />
      </div>
    </div>
  );
}

export default App;
