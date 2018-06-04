import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import Card from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <Card />
      </div>
    );
  }
}

export default App;
