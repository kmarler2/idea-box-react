import React, { Component } from 'react';
import './UserInput.css';

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      titleInput: '',
      bodyInput: ''
    }
  }
  render() {
    return (
      <div className="App">
      <div className='left'>
        <header className="Ideabox">
          <h1 className="App-title">idea<span className='box'>box</span></h1>
          <input type='text' className='title input' placeholder='Title'></input>
          <input type='text' className='body input' placeholder='Body'></input>
          <input type='submit' className='save-btn' onClick='addValues()'></input>
          <input type='text' className='search' placeholder='Search'></input>
        </header>
      </div>
      </div>
    );
  }
  addValues(event) {
    event.preventDefault();
    this.setState(
      )
  }
}