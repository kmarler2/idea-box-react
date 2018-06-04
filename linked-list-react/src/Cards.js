import React, { Component } from 'react';
import UserInput from './UserInput.js';

export default class Card extends Component {
  render() {
    return (
      //make card array and map over it, creating a new card for each item
      <div className="Card">
        <h1>title</h1>
        <h2>body</h2>
        <button>img</button>
        <button>img</button>
        <span>quality<span></span></span>
      </div>
    );
  }
}
